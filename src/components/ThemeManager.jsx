import { useEffect } from "react";
import {
  applyTheme,
  getStoredTheme,
  THEME_PREFERENCE_EVENT
} from "../theme";

const DAY_START_HOUR = 7;
const NIGHT_START_HOUR = 19;

function getSystemTheme() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return null;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }

  return null;
}

function getLocalTimeTheme(date = new Date()) {
  const hour = date.getHours();
  return hour >= DAY_START_HOUR && hour < NIGHT_START_HOUR ? "light" : "dark";
}

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date - start) / 86400000);
}

function getSunTime(date, latitude, longitude, isSunrise) {
  const dayOfYear = getDayOfYear(date);
  const lngHour = longitude / 15;
  const approxTime = dayOfYear + ((isSunrise ? 6 : 18) - lngHour) / 24;
  const meanAnomaly = 0.9856 * approxTime - 3.289;
  let trueLongitude =
    meanAnomaly +
    1.916 * Math.sin((Math.PI / 180) * meanAnomaly) +
    0.02 * Math.sin((Math.PI / 180) * 2 * meanAnomaly) +
    282.634;
  trueLongitude = (trueLongitude + 360) % 360;

  let rightAscension =
    (180 / Math.PI) *
    Math.atan(0.91764 * Math.tan((Math.PI / 180) * trueLongitude));
  rightAscension = (rightAscension + 360) % 360;
  rightAscension += Math.floor(trueLongitude / 90) * 90 - Math.floor(rightAscension / 90) * 90;
  rightAscension /= 15;

  const sinDeclination = 0.39782 * Math.sin((Math.PI / 180) * trueLongitude);
  const cosDeclination = Math.cos(Math.asin(sinDeclination));
  const cosHour =
    (Math.cos((Math.PI / 180) * 90.833) -
      sinDeclination * Math.sin((Math.PI / 180) * latitude)) /
    (cosDeclination * Math.cos((Math.PI / 180) * latitude));

  if (cosHour > 1) {
    return Infinity;
  }

  if (cosHour < -1) {
    return -Infinity;
  }

  let hourAngle = isSunrise
    ? 360 - (180 / Math.PI) * Math.acos(cosHour)
    : (180 / Math.PI) * Math.acos(cosHour);
  hourAngle /= 15;

  const localMeanTime = hourAngle + rightAscension - 0.06571 * approxTime - 6.622;
  const utcTime = (localMeanTime - lngHour + 24) % 24;
  const localOffset = -date.getTimezoneOffset() / 60;
  return (utcTime + localOffset + 24) % 24;
}

function getLocationTimeTheme(position, date = new Date()) {
  const { latitude, longitude } = position.coords;
  const sunrise = getSunTime(date, latitude, longitude, true);
  const sunset = getSunTime(date, latitude, longitude, false);

  if (sunrise === Infinity || sunset === Infinity) {
    return "dark";
  }

  if (sunrise === -Infinity || sunset === -Infinity) {
    return "light";
  }

  const currentHour = date.getHours() + date.getMinutes() / 60;
  return currentHour >= sunrise && currentHour < sunset ? "light" : "dark";
}

function ThemeManager() {
  useEffect(() => {
    if (!window.matchMedia) {
      applyTheme(getLocalTimeTheme());
      return undefined;
    }

    let timeoutId;
    let isMounted = true;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const lightQuery = window.matchMedia("(prefers-color-scheme: light)");

    function resolveTheme() {
      const storedTheme = getStoredTheme();
      if (storedTheme) {
        applyTheme(storedTheme);
        return;
      }

      const systemTheme = getSystemTheme();
      applyTheme(systemTheme ?? getLocalTimeTheme());

      if (systemTheme || !navigator.permissions || !navigator.geolocation) {
        return;
      }

      navigator.permissions
        .query({ name: "geolocation" })
        .then((permission) => {
          if (!isMounted || permission.state !== "granted") {
            return;
          }

          navigator.geolocation.getCurrentPosition(
            (position) => {
              if (isMounted) {
                applyTheme(getLocationTimeTheme(position));
              }
            },
            () => {},
            { maximumAge: 900000, timeout: 1500 }
          );
        })
        .catch(() => {});
    }

    function scheduleNextCheck() {
      window.clearTimeout(timeoutId);
      const now = new Date();
      const nextHour = new Date(now);
      nextHour.setHours(now.getHours() + 1, 0, 0, 0);
      timeoutId = window.setTimeout(() => {
        resolveTheme();
        scheduleNextCheck();
      }, nextHour.getTime() - now.getTime());
    }

    resolveTheme();
    scheduleNextCheck();

    darkQuery.addEventListener("change", resolveTheme);
    lightQuery.addEventListener("change", resolveTheme);
    window.addEventListener(THEME_PREFERENCE_EVENT, resolveTheme);
    window.addEventListener("storage", resolveTheme);

    return () => {
      isMounted = false;
      window.clearTimeout(timeoutId);
      darkQuery.removeEventListener("change", resolveTheme);
      lightQuery.removeEventListener("change", resolveTheme);
      window.removeEventListener(THEME_PREFERENCE_EVENT, resolveTheme);
      window.removeEventListener("storage", resolveTheme);
    };
  }, []);

  return null;
}

export default ThemeManager;

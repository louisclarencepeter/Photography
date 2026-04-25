const imageModules = import.meta.glob(
  [
    "../../images/LP-01.jpg",
    "../../images/louis.jpg",
    "../../images/IMG_0310.jpg",
    "../../images/30241300-F27C-4C36-9A95-A7CD63773185.jpg",
    "../../images/DJI_0026.jpg",
    "../../images/DJI_0072.jpg",
    "../../images/IMG_1199.jpg",
    "../../images/DJI_0316.jpg",
    "../../images/DSC_0526.jpg",
    "../../images/IMG_0064.jpg",
    "../../images/IMG_0080.jpg",
    "../../images/IMG_0180.jpg",
    "../../images/IMG_0208.jpg",
    "../../images/IMG_0011.jpg",
    "../../images/IMG_0381.jpg",
    "../../images/IMG_0507.jpg",
    "../../images/IMG_0834.jpg",
    "../../images/IMG_0850.jpg",
    "../../images/IMG_6390.jpg",
    "../../images/IMG_1318.jpg",
    "../../images/IMG_1381.jpg",
    "../../images/IMG_1683.jpg",
    "../../images/IMG_3078.jpg",
    "../../images/IMG_1766.jpg",
    "../../images/IMG_2887.jpg",
    "../../images/IMG_1792.jpg",
    "../../images/IMG_1965.jpg",
    "../../images/IMG_20210620_224747_006.jpg",
    "../../images/IMG_1862.jpg",
    "../../images/IMG_2050.jpg",
    "../../images/IMG_2062.jpg",
    "../../images/IMG_1969.jpg",
    "../../images/IMG_20210427_095438_387.jpg",
    "../../images/IMG_2192.jpg",
    "../../images/IMG_2469.jpg",
    "../../images/IMG_3149.jpg",
    "../../images/IMG_3952.jpg",
    "../../images/IMG_3733.jpg",
    "../../images/IMG_3936.jpg",
    "../../images/IMG_4097.jpg",
    "../../images/IMG_4406.jpg",
    "../../images/IMG_6442.jpg",
    "../../images/IMG_4500.jpg",
    "../../images/IMG_4572.jpg",
    "../../images/IMG_5958.jpg",
    "../../images/IMG_4588.jpg",
    "../../images/IMG_4699.jpg",
    "../../images/IMG_5133.jpg",
    "../../images/IMG_5282.jpg",
    "../../images/IMG_5334.jpg",
    "../../images/IMG_5828.jpg",
    "../../images/IMG_5907.jpg",
    "../../images/IMG_6022.jpg",
    "../../images/IMG_7018.jpg",
    "../../images/IMG_7154.jpg",
    "../../images/IMG_7771.jpg",
    "../../images/IMG_8184.jpg",
    "../../images/IMG_8473.jpg",
    "../../images/Öl.jpg",
    "../../images/IMG_5313.jpg"
  ],
  {
    eager: true,
    import: "default"
  }
);

const productModules = import.meta.glob("../../Products/*.{jpg,JPG,jpeg,png,webp,avif}", {
  eager: true,
  import: "default"
});

const videoModules = import.meta.glob("../../video/*.{mp4,webm,ogg}", {
  eager: true,
  import: "default"
});

function resolveAsset(modules, folder, fileName) {
  const match = Object.entries(modules).find(([path]) => path.endsWith(`/${folder}/${fileName}`));

  if (!match) {
    throw new Error(`Missing asset: ${folder}/${fileName}`);
  }

  return match[1];
}

const image = (fileName) => resolveAsset(imageModules, "images", fileName);
const product = (fileName) => resolveAsset(productModules, "Products", fileName);
const video = (fileName) => resolveAsset(videoModules, "video", fileName);

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/louisclarencepeter",
    icon: "facebook"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/louispeterphotography/",
    icon: "instagram"
  },
  {
    label: "500px",
    href: "https://500px.com/p/louisclarencepeters",
    icon: "fiveHundredPx"
  }
];

export const aboutDetails = {
  logo: image("LP-01.jpg"),
  portrait: image("louis.jpg"),
  bio: "With a keen eye for detail and a passion for bringing out the beauty in the world around me, I capture the essence of life through my images. Years of experience have honed a style that blends artistic creativity with technical expertise, whether I am photographing landscapes, portraits, or memorable personal moments.",
  note: "Note: I am currently not offering photoshoots and am using this space to keep practising and sharing new work."
};

export const heroImages = [
  image("IMG_7771.jpg"),
  image("IMG_2887.jpg"),
  image("IMG_7018.jpg"),
  image("IMG_0850.jpg"),
  image("IMG_2469.jpg"),
  image("IMG_5958.jpg"),
  image("IMG_2062.jpg"),
  image("IMG_0180.jpg")
];

export const videography = {
  video: video("Baiana.mp4"),
  description:
    "Introducing my videography services, designed to bring your vision to life through captivating visuals and cinematic storytelling. Whether you need a promotional video, coverage for a special event, or a more atmospheric visual piece, I focus on high-quality footage, strong pacing, and the details that make a story feel memorable."
};

export const offerings = [
  {
    title: "Weddings",
    description:
      "Capturing the beauty and joy of your special day with wedding photography that tells your unique love story.",
    image: product("IMG_6407 (1280x720).jpg")
  },
  {
    title: "Family Photos",
    description:
      "Family sessions that preserve real moments and create lasting keepsakes across generations.",
    image: product("IMG_3518 (1280x853).jpg")
  },
  {
    title: "Portraits",
    description:
      "Professional portraits that capture personality and individuality for business, social media, or personal use.",
    image: product("IMG_3070 (1280x853).jpg")
  },
  {
    title: "Couples",
    description:
      "A couples shoot is a beautiful way to celebrate love, connection, anniversaries, or engagement milestones.",
    image: product("IMG_0868 (1280x853).jpg")
  },
  {
    title: "Babies and Children",
    description:
      "Playful and heartfelt sessions that capture the energy, joy, and warmth of childhood.",
    image: product("IMG_33641 (1280x853).jpg")
  },
  {
    title: "Events",
    description:
      "Coverage for birthdays, gatherings, and special occasions with a focus on atmosphere and candid moments.",
    image: product("IMG_3636 (1280x720).jpg")
  },
  {
    title: "Pets",
    description:
      "Pet photography that celebrates personality, character, and the bond you share with your companion.",
    image: product("IMG_4097 (1280x720).jpg")
  },
  {
    title: "Drone Photography",
    description:
      "Aerial imagery and video that bring scale, perspective, and a fresh visual angle to your story.",
    image: product("DJI_0100 (1280x720).jpg")
  },
  {
    title: "Property Photography",
    description:
      "Clean, professional property imagery that highlights layout, mood, and key architectural details.",
    image: product("GOPR8550 (1280x960).jpg")
  }
];

const galleryFileNames = [
  "IMG_0310.jpg",
  "30241300-F27C-4C36-9A95-A7CD63773185.jpg",
  "DJI_0026.jpg",
  "DJI_0072.jpg",
  "IMG_1199.jpg",
  "DJI_0316.jpg",
  "DSC_0526.jpg",
  "IMG_0064.jpg",
  "IMG_0080.jpg",
  "IMG_0180.jpg",
  "IMG_0208.jpg",
  "IMG_0011.jpg",
  "IMG_0381.jpg",
  "IMG_0507.jpg",
  "IMG_0834.jpg",
  "IMG_0850.jpg",
  "IMG_6390.jpg",
  "IMG_1318.jpg",
  "IMG_1381.jpg",
  "IMG_1683.jpg",
  "IMG_3078.jpg",
  "IMG_1766.jpg",
  "IMG_2887.jpg",
  "IMG_1792.jpg",
  "IMG_1965.jpg",
  "IMG_20210620_224747_006.jpg",
  "IMG_1862.jpg",
  "IMG_2050.jpg",
  "IMG_2062.jpg",
  "IMG_1969.jpg",
  "IMG_20210427_095438_387.jpg",
  "IMG_2192.jpg",
  "IMG_2469.jpg",
  "IMG_3149.jpg",
  "IMG_3952.jpg",
  "IMG_3733.jpg",
  "IMG_3936.jpg",
  "IMG_4097.jpg",
  "IMG_4406.jpg",
  "IMG_6442.jpg",
  "IMG_4500.jpg",
  "IMG_4572.jpg",
  "IMG_5958.jpg",
  "IMG_4588.jpg",
  "IMG_4699.jpg",
  "IMG_5133.jpg",
  "IMG_5282.jpg",
  "IMG_5334.jpg",
  "IMG_5828.jpg",
  "IMG_5907.jpg",
  "IMG_6022.jpg",
  "IMG_7018.jpg",
  "IMG_7154.jpg",
  "IMG_7771.jpg",
  "IMG_8184.jpg",
  "IMG_8473.jpg",
  "Öl.jpg",
  "IMG_5313.jpg"
];

export const galleryImages = galleryFileNames.map((fileName) => ({
  src: image(fileName)
}));

export const legalSections = [
  {
    heading: "Angaben gemaess § 5 TMG",
    paragraphs: [
      "Louis Peter, Ludwig-Landmann-Strasse 190, 60488 Frankfurt am Main",
      "Vertreten durch: Louis Peter",
      "Kontakt: Telefon 0176-82113705, E-Mail louisclarencepeters@gmail.com"
    ]
  },
  {
    heading: "Haftung fuer Inhalte",
    paragraphs: [
      "Die Inhalte dieser Website wurden mit grosster Sorgfalt erstellt. Fuer die Richtigkeit, Vollstaendigkeit und Aktualitaet der Inhalte kann jedoch keine Gewaehr uebernommen werden.",
      "Als Diensteanbieter ist Louis Peter gemaess § 7 Abs. 1 TMG fuer eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich."
    ]
  },
  {
    heading: "Haftung fuer Links",
    paragraphs: [
      "Dieses Angebot enthaelt Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss besteht. Deshalb kann fuer diese fremden Inhalte auch keine Gewaehr uebernommen werden.",
      "Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt."
    ]
  },
  {
    heading: "Urheberrecht",
    paragraphs: [
      "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.",
      "Downloads und Kopien dieser Seite sind nur fuer den privaten, nicht kommerziellen Gebrauch gestattet."
    ]
  },
  {
    heading: "Datenschutz",
    paragraphs: [
      "Die Nutzung dieser Website ist in der Regel ohne Angabe personenbezogener Daten moeglich. Soweit personenbezogene Daten erhoben werden, erfolgt dies moeglichst auf freiwilliger Basis.",
      "Es wird darauf hingewiesen, dass die Datenuebertragung im Internet Sicherheitsluecken aufweisen kann und ein vollstaendiger Schutz vor dem Zugriff durch Dritte nicht moeglich ist."
    ]
  },
  {
    heading: "Cookies",
    paragraphs: [
      "Diese React-Version der Website verwendet derzeit nur lokalen Browser-Speicher, um Ihre Cookie-Auswahl auf diesem Geraet zu merken.",
      "Es werden aktuell keine Analyse- oder Marketing-Cookies durch die von uns bereitgestellte Banner-Funktion gesetzt."
    ]
  },
  {
    heading: "Quelle",
    paragraphs: [
      "Website Impressum erstellt durch impressum-generator.de von der Kanzlei Hasselbach."
    ]
  }
];

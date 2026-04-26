const imageModules = import.meta.glob("../../images/*.{jpg,JPG,jpeg,png,webp,avif}", {
  eager: true,
  import: "default"
});

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

export const socialPreviewImages = [
  {
    src: image("gallery-023.jpg"),
    alt: "Portrait portfolio highlight by Louis Peter"
  },
  {
    src: image("gallery-052.jpg"),
    alt: "Lifestyle portfolio highlight by Louis Peter"
  },
  {
    src: image("gallery-003.jpg"),
    alt: "Aerial portfolio highlight by Louis Peter"
  }
];

export const aboutDetails = {
  logo: image("louis-peter-logo.jpg"),
  portrait: image("louis-peter-portrait.jpg"),
  bio: "I am drawn to light, atmosphere, and the small details that give a moment its feeling. My work blends creativity with technical precision, whether I am photographing portraits, landscapes, travel scenes, or personal milestones.",
  note: "I am not currently booking photoshoots, but I am using this space to keep creating, refining my craft, and sharing new work."
};

export const heroImages = [
  image("gallery-054.jpg"),
  image("gallery-023.jpg"),
  image("gallery-052.jpg"),
  image("gallery-016.jpg"),
  image("gallery-033.jpg"),
  image("gallery-043.jpg"),
  image("gallery-029.jpg"),
  image("gallery-010.jpg")
];

export const videography = {
  video: video("baiana-showreel.mp4"),
  description:
    "My videography work is shaped by mood, pacing, and visual detail. From promotional pieces to personal events and atmospheric short-form stories, I aim to create films that feel polished, expressive, and memorable."
};

export const offerings = [
  {
    title: "Weddings",
    description:
      "Elegant, story-led coverage that captures the emotion, atmosphere, and quiet in-between moments of your day.",
    image: product("service-weddings.jpg")
  },
  {
    title: "Family Photos",
    description:
      "Relaxed family sessions that preserve genuine connection and create photographs you will return to for years.",
    image: product("service-family-photos.jpg")
  },
  {
    title: "Portraits",
    description:
      "Natural, polished portraits that reflect personality and presence for personal, professional, or creative use.",
    image: product("service-portraits.jpg")
  },
  {
    title: "Couples",
    description:
      "A thoughtful way to capture connection, whether you are celebrating an engagement, an anniversary, or simply this chapter together.",
    image: product("service-couples.jpg")
  },
  {
    title: "Babies and Children",
    description:
      "Warm, playful sessions that capture childhood with honesty, energy, and tenderness.",
    image: product("service-babies-and-children.jpg")
  },
  {
    title: "Events",
    description:
      "Documentary-style coverage of celebrations, gatherings, and special occasions with an eye for mood and candid moments.",
    image: product("service-events.jpg")
  },
  {
    title: "Pets",
    description:
      "Characterful pet portraits that celebrate personality and the bond you share with your companion.",
    image: product("service-pets.jpg")
  },
  {
    title: "Drone Photography",
    description:
      "Aerial photography and video that add scale, perspective, and striking visual context to your story.",
    image: product("service-drone-photography.jpg")
  },
  {
    title: "Property Photography",
    description:
      "Clean, well-composed imagery that highlights space, light, and architectural detail.",
    image: product("service-property-photography.jpg")
  }
];

const galleryFileNames = Array.from({ length: 58 }, (_, index) => {
  const sequence = String(index + 1).padStart(3, "0");
  return `gallery-${sequence}.jpg`;
});

const aerialGalleryFiles = new Set(["gallery-003.jpg", "gallery-004.jpg", "gallery-006.jpg"]);

function defaultAltFor(fileName) {
  if (aerialGalleryFiles.has(fileName)) {
    return "Aerial drone photograph by Louis Peter";
  }
  return "Louis Peter Photography portfolio image";
}

export const galleryImages = galleryFileNames.map((fileName) => ({
  src: image(fileName),
  alt: defaultAltFor(fileName)
}));

export const legalSections = [
  {
    heading: "Angaben gemäß § 5 TMG",
    paragraphs: [
      "Louis Peter, Ludwig-Landmann-Straße 190, 60488 Frankfurt am Main",
      "Vertreten durch: Louis Peter",
      "Kontakt: Telefon 0176-82113705, E-Mail louisclarencepeters@gmail.com"
    ]
  },
  {
    heading: "Haftung für Inhalte",
    paragraphs: [
      "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.",
      "Als Diensteanbieter ist Louis Peter gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich."
    ]
  },
  {
    heading: "Haftung für Links",
    paragraphs: [
      "Dieses Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss besteht. Deshalb kann für diese fremden Inhalte auch keine Gewähr übernommen werden.",
      "Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt."
    ]
  },
  {
    heading: "Urheberrecht",
    paragraphs: [
      "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.",
      "Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet."
    ]
  },
  {
    heading: "Datenschutz",
    paragraphs: [
      "Die Nutzung dieser Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit personenbezogene Daten erhoben werden, erfolgt dies möglichst auf freiwilliger Basis.",
      "Es wird darauf hingewiesen, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann und ein vollständiger Schutz vor dem Zugriff durch Dritte nicht möglich ist."
    ]
  },
  {
    heading: "Cookies",
    paragraphs: [
      "Diese React-Version der Website verwendet derzeit nur lokalen Browser-Speicher, um Ihre Cookie-Auswahl auf diesem Gerät zu merken.",
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

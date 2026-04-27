import galleryEntries from "./galleryEntries.json";

const imagePictureModules = import.meta.glob("../../images/*.{jpg,JPG,jpeg,png}", {
  query: { w: "160;320;480;960;1600", format: "avif;webp;jpg", as: "picture" },
  eager: true,
  import: "default"
});

const productPictureModules = import.meta.glob("../../Products/*.{jpg,JPG,jpeg,png}", {
  query: { w: "160;320;480;960;1600", format: "avif;webp;jpg", as: "picture" },
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

const imagePicture = (fileName) => resolveAsset(imagePictureModules, "images", fileName);
const productPicture = (fileName) => resolveAsset(productPictureModules, "Products", fileName);

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
    picture: imagePicture("gallery-029.jpg"),
    alt: "Editorial beach portrait by Louis Peter"
  },
  {
    picture: imagePicture("gallery-052.jpg"),
    alt: "Wedding day portrait by Louis Peter"
  },
  {
    picture: imagePicture("gallery-003.jpg"),
    alt: "Aerial photograph of snorkelling boats by Louis Peter"
  }
];

export const aboutDetails = {
  logo: imagePicture("louis-peter-logo.jpg"),
  portrait: imagePicture("louis-peter-portrait.jpg"),
  bio: "I am drawn to light, atmosphere, and the small details that give a moment its feeling. My work blends creativity with technical precision, whether I am photographing portraits, landscapes, travel scenes, or personal milestones."
};

export const heroImages = [
  { picture: imagePicture("gallery-054.jpg"), alt: "" },
  { picture: imagePicture("gallery-029.jpg"), alt: "" },
  { picture: imagePicture("gallery-052.jpg"), alt: "" },
  { picture: imagePicture("gallery-016.jpg"), alt: "" },
  { picture: imagePicture("gallery-033.jpg"), alt: "" },
  { picture: imagePicture("gallery-043.jpg"), alt: "" },
  { picture: imagePicture("gallery-013.jpg"), alt: "" },
  { picture: imagePicture("gallery-010.jpg"), alt: "" }
];

export const videography = {
  video: "/video/baiana-showreel.mp4",
  poster: "/video/baiana-showreel-poster.webp",
  description:
    "My videography work is shaped by mood, pacing, and visual detail. From promotional pieces to personal events and atmospheric short-form stories, I aim to create films that feel polished, expressive, and memorable."
};

export const offerings = [
  {
    title: "Weddings",
    description:
      "Elegant, story-led coverage that captures the emotion, atmosphere, and quiet in-between moments of your day.",
    image: productPicture("service-weddings.jpg")
  },
  {
    title: "Family Photos",
    description:
      "Relaxed family sessions that preserve genuine connection and create photographs you will return to for years.",
    image: productPicture("service-family-photos.jpg")
  },
  {
    title: "Portraits",
    description:
      "Natural, polished portraits that reflect personality and presence for personal, professional, or creative use.",
    image: productPicture("service-portraits.jpg")
  },
  {
    title: "Couples",
    description:
      "A thoughtful way to capture connection, whether you are celebrating an engagement, an anniversary, or simply this chapter together.",
    image: productPicture("service-couples.jpg")
  },
  {
    title: "Babies and Children",
    description:
      "Warm, playful sessions that capture childhood with honesty, energy, and tenderness.",
    image: productPicture("service-babies-and-children.jpg")
  },
  {
    title: "Events",
    description:
      "Documentary-style coverage of celebrations, gatherings, and special occasions with an eye for mood and candid moments.",
    image: productPicture("service-events.jpg")
  },
  {
    title: "Pets",
    description:
      "Characterful pet portraits that celebrate personality and the bond you share with your companion.",
    image: productPicture("service-pets.jpg")
  },
  {
    title: "Drone Photography",
    description:
      "Aerial photography and video that add scale, perspective, and striking visual context to your story.",
    image: productPicture("service-drone-photography.jpg")
  },
  {
    title: "Property Photography",
    description:
      "Clean, well-composed imagery that highlights space, light, and architectural detail.",
    image: productPicture("service-property-photography.jpg")
  }
];

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "portraits", label: "Portraits" },
  { id: "weddings", label: "Weddings" },
  { id: "family", label: "Family" },
  { id: "aerial", label: "Aerial" },
  { id: "animals", label: "Animals" },
  { id: "architecture", label: "Architecture" },
  { id: "travel", label: "Travel" }
];


export const galleryImages = galleryEntries.map((entry) => ({
  picture: imagePicture(entry.file),
  alt: entry.alt,
  category: entry.category
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

const imagePictureModules = import.meta.glob("../../images/*.{jpg,JPG,jpeg,png}", {
  query: { w: "480;960;1600", format: "avif;webp;jpg", as: "picture" },
  eager: true,
  import: "default"
});

const imageHeroModules = import.meta.glob("../../images/*.{jpg,JPG,jpeg,png}", {
  query: { w: "1280", format: "webp", as: "src" },
  eager: true,
  import: "default"
});

const imageRawModules = import.meta.glob("../../images/louis-peter-logo.{jpg,JPG,jpeg,png}", {
  eager: true,
  import: "default"
});

const productPictureModules = import.meta.glob("../../Products/*.{jpg,JPG,jpeg,png}", {
  query: { w: "480;960;1600", format: "avif;webp;jpg", as: "picture" },
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
const imageHero = (fileName) => resolveAsset(imageHeroModules, "images", fileName);
const imageRaw = (fileName) => resolveAsset(imageRawModules, "images", fileName);
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
  logo: imageRaw("louis-peter-logo.jpg"),
  portrait: imagePicture("louis-peter-portrait.jpg"),
  bio: "I am drawn to light, atmosphere, and the small details that give a moment its feeling. My work blends creativity with technical precision, whether I am photographing portraits, landscapes, travel scenes, or personal milestones."
};

export const heroImages = [
  imageHero("gallery-054.jpg"),
  imageHero("gallery-023.jpg"),
  imageHero("gallery-052.jpg"),
  imageHero("gallery-016.jpg"),
  imageHero("gallery-033.jpg"),
  imageHero("gallery-043.jpg"),
  imageHero("gallery-029.jpg"),
  imageHero("gallery-010.jpg")
];

export const videography = {
  video: "/video/baiana-showreel.mp4",
  poster: "/video/baiana-showreel-poster.jpg",
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

const galleryEntries = [
  {
    file: "gallery-001.jpg",
    alt: "Frankfurt skyline at twilight reflected in the river Main",
    category: "architecture"
  },
  {
    file: "gallery-002.jpg",
    alt: "Lioness peering through tall grass on a Tanzanian safari",
    category: "animals"
  },
  {
    file: "gallery-003.jpg",
    alt: "Aerial view of snorkelling boats over a coral reef in turquoise water",
    category: "aerial"
  },
  {
    file: "gallery-004.jpg",
    alt: "Aerial view of a small green island and rocks in turquoise sea",
    category: "aerial"
  },
  {
    file: "gallery-005.jpg",
    alt: "Beach portrait of a man in patterned swim shorts under palm trees",
    category: "portraits"
  },
  {
    file: "gallery-006.jpg",
    alt: "Aerial view of a single boat anchored in shallow seagrass water",
    category: "aerial"
  },
  {
    file: "gallery-007.jpg",
    alt: "Festival night scene with strings of fairy lights and warm bokeh",
    category: "travel"
  },
  {
    file: "gallery-008.jpg",
    alt: "Studio fitness portrait of a woman in black sportswear",
    category: "portraits"
  },
  {
    file: "gallery-009.jpg",
    alt: "Pool portrait of a woman in a leopard print swimsuit",
    category: "portraits"
  },
  {
    file: "gallery-010.jpg",
    alt: "Couple holding hands and looking back on a sunlit forest path",
    category: "portraits"
  },
  {
    file: "gallery-011.jpg",
    alt: "Beach portrait of a woman in a leopard print swimsuit framed by palm leaves",
    category: "portraits"
  },
  {
    file: "gallery-012.jpg",
    alt: "Gym portrait of a fitness duo in athletic wear",
    category: "portraits"
  },
  {
    file: "gallery-013.jpg",
    alt: "Beach portrait of a woman laughing in a yellow swimsuit",
    category: "portraits"
  },
  {
    file: "gallery-014.jpg",
    alt: "Studio fitness portrait of a woman stretching her arms above her head",
    category: "portraits"
  },
  {
    file: "gallery-015.jpg",
    alt: "Beach portrait of a woman in a yellow swimsuit beside a mangrove tree",
    category: "portraits"
  },
  {
    file: "gallery-016.jpg",
    alt: "Beach portrait of a woman smiling over her shoulder among mangrove trees",
    category: "portraits"
  },
  {
    file: "gallery-017.jpg",
    alt: "Beach portrait of a woman in a flowing olive green dress at sunset",
    category: "portraits"
  },
  {
    file: "gallery-018.jpg",
    alt: "Yoga pose photographed on a stone staircase in Frankfurt",
    category: "portraits"
  },
  {
    file: "gallery-019.jpg",
    alt: "Outdoor stretch portrait on a stone staircase in Frankfurt",
    category: "portraits"
  },
  {
    file: "gallery-020.jpg",
    alt: "Outdoor portrait of a woman in a lime green dress against a travertine wall",
    category: "portraits"
  },
  {
    file: "gallery-021.jpg",
    alt: "Frankfurt Sentinels American football quarterback with cheerleader behind",
    category: "travel"
  },
  {
    file: "gallery-022.jpg",
    alt: "Mangrove portrait of a woman in a white off-shoulder dress",
    category: "portraits"
  },
  {
    file: "gallery-023.jpg",
    alt: "African buffalo close-up in the Serengeti grasslands",
    category: "animals"
  },
  {
    file: "gallery-024.jpg",
    alt: "Mangrove portrait of a woman in a white dress turned away",
    category: "portraits"
  },
  {
    file: "gallery-025.jpg",
    alt: "Beach portrait of a woman in a black side-cut gown on white sand",
    category: "portraits"
  },
  {
    file: "gallery-026.jpg",
    alt: "Beach portrait of a woman with platinum blonde hair in a black tube top",
    category: "portraits"
  },
  {
    file: "gallery-027.jpg",
    alt: "Outdoor portrait of a woman in a burgundy satin shirt against weathered branches",
    category: "portraits"
  },
  {
    file: "gallery-028.jpg",
    alt: "Beach portrait of a woman in a black cut-out dress with hand to her hair",
    category: "portraits"
  },
  {
    file: "gallery-029.jpg",
    alt: "Beach portrait of a woman in a black cut-out gown with thigh slit",
    category: "portraits"
  },
  {
    file: "gallery-030.jpg",
    alt: "Frankfurt skyscrapers photographed from below at dusk",
    category: "architecture"
  },
  {
    file: "gallery-031.jpg",
    alt: "Macro photograph of a daisy in spring grass",
    category: "travel"
  },
  {
    file: "gallery-032.jpg",
    alt: "Indoor portrait of a baby in a costume hat on a couch",
    category: "family"
  },
  {
    file: "gallery-033.jpg",
    alt: "Indoor portrait of a baby in a high chair against a purple floral backdrop",
    category: "family"
  },
  {
    file: "gallery-034.jpg",
    alt: "Male lion roaring while resting in long grass",
    category: "animals"
  },
  {
    file: "gallery-035.jpg",
    alt: "Frankfurt business district portrait of a woman in a striped shirt",
    category: "portraits"
  },
  {
    file: "gallery-036.jpg",
    alt: "Studio portrait of a woman in glasses against a yellow and green backdrop",
    category: "portraits"
  },
  {
    file: "gallery-037.jpg",
    alt: "Telephoto photograph of a near-full moon at night",
    category: "travel"
  },
  {
    file: "gallery-038.jpg",
    alt: "Pet portrait of a golden brown dog resting on a sheepskin rug",
    category: "animals"
  },
  {
    file: "gallery-039.jpg",
    alt: "Soft focus portrait of a woman framed by out-of-focus white flowers",
    category: "portraits"
  },
  {
    file: "gallery-040.jpg",
    alt: "Evening portrait of a woman in a white dress and floral kimono in a bar",
    category: "portraits"
  },
  {
    file: "gallery-041.jpg",
    alt: "Beach portrait of a woman in a blue bikini and sunglasses in shallow water",
    category: "portraits"
  },
  {
    file: "gallery-042.jpg",
    alt: "Mangrove portrait of a woman in a tropical print bikini between trees",
    category: "portraits"
  },
  {
    file: "gallery-043.jpg",
    alt: "Hands holding an opened achiote seed pod with red pigment seeds",
    category: "travel"
  },
  {
    file: "gallery-044.jpg",
    alt: "Mangrove portrait of a woman in a printed bandeau bikini between trees",
    category: "portraits"
  },
  {
    file: "gallery-045.jpg",
    alt: "Outdoor portrait of a woman in a white ruffled blouse in greenery",
    category: "portraits"
  },
  {
    file: "gallery-046.jpg",
    alt: "Travel portrait of a woman aboard a traditional dhow sailing boat",
    category: "portraits"
  },
  {
    file: "gallery-047.jpg",
    alt: "Winter portrait of a woman in a leopard print coat and tortoiseshell sunglasses",
    category: "portraits"
  },
  {
    file: "gallery-048.jpg",
    alt: "Beach yoga portrait of a woman in a bridge pose on white sand",
    category: "portraits"
  },
  {
    file: "gallery-049.jpg",
    alt: "Wide-angle look up at Frankfurt skyscrapers under a blue sky",
    category: "architecture"
  },
  {
    file: "gallery-050.jpg",
    alt: "Outdoor portrait of a woman in a lime green dress in a city plaza",
    category: "portraits"
  },
  {
    file: "gallery-051.jpg",
    alt: "Forest portrait of a woman in an olive green backless dress smiling over her shoulder",
    category: "portraits"
  },
  {
    file: "gallery-052.jpg",
    alt: "Wedding day group portrait of bride, groom, and parents on the church steps",
    category: "weddings"
  },
  {
    file: "gallery-053.jpg",
    alt: "Wedding moment as the bride receives a personalised celebration balloon",
    category: "weddings"
  },
  {
    file: "gallery-054.jpg",
    alt: "Aerial view of two boats drifting on deep blue ocean water",
    category: "aerial"
  },
  {
    file: "gallery-055.jpg",
    alt: "Silhouetted dhow sailing boat against a coastal sunset",
    category: "travel"
  },
  {
    file: "gallery-056.jpg",
    alt: "Aerial view of a forested motorway interchange in Germany",
    category: "aerial"
  },
  {
    file: "gallery-057.jpg",
    alt: "Outdoor portrait of a woman in a lime green dress in afternoon light",
    category: "portraits"
  },
  {
    file: "gallery-058.jpg",
    alt: "Pet portrait close-up of a brown dog peering over a railing",
    category: "animals"
  }
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

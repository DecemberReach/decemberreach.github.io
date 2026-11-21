export type ProjectHighlight = {
  title: string;
  value: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  photoPage: string;
  photographer: string;
  facts: { label: string; value: string }[];
  highlights: ProjectHighlight[];
};

export const sharedOSRepository =
  "https://github.com/DecemberReach/reach-to-be-reached";

export const projects: Project[] = [
  {
    slug: "auroraADE",
    name: "auroraADE",
    category: "Operating system · x86_64",
    summary: "A real x86_64 operating system project hosted in a browser.",
    description:
      "auroraADE runs a guest operating system written in C and Assembly. A TypeScript runtime provides the CPU, bus, and device environment, while WebGPU handles display output.",
    image: "https://images.unsplash.com/photo-1531764411937-45495415d84d?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "A turquoise lake surrounded by forested mountains",
    photoPage: "https://unsplash.com/photos/landscape-photography-of-lake-and-mountains-bXGUdxFeQUQ",
    photographer: "Ryan Stone",
    facts: [
      { label: "Project type", value: "Operating system" },
      { label: "Target architecture", value: "x86_64" },
      { label: "Execution environment", value: "Browser-hosted" },
      { label: "Display", value: "WebGPU" }
    ],
    highlights: [
      {
        title: "Guest operating system",
        value: "C / Assembly",
        description: "The guest OS is implemented separately from the browser runtime."
      },
      {
        title: "Runtime",
        value: "TypeScript",
        description: "The runtime provides the CPU, bus, and device environment."
      },
      {
        title: "Display",
        value: "WebGPU",
        description: "WebGPU is used for the display path."
      }
    ]
  },
  {
    slug: "haloDOT",
    name: "haloDOT",
    category: "Operating system",
    summary: "An operating system project developed by December Reach.",
    description:
      "haloDOT is maintained as a separate OS project in December Reach's shared source repository.",
    image: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "A mountain range across a wide lake under an evening sky",
    photoPage: "https://unsplash.com/photos/landscape-photography-of-lake-and-mountain-73F4pKoUkM0",
    photographer: "Tobias Keller",
    facts: [
      { label: "Project type", value: "Operating system" },
      { label: "Source", value: "Shared OS repository" }
    ],
    highlights: []
  },
  {
    slug: "stellaOS",
    name: "stellaOS",
    category: "Television operating system",
    summary: "A television operating system project from December Reach.",
    description:
      "stellaOS is maintained as a separate OS project in December Reach's shared source repository.",
    image: "https://images.unsplash.com/photo-1516941072577-aecd44b927bf?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "A sunlit river canyon between steep mountain walls",
    photoPage: "https://unsplash.com/photos/landscape-photography-of-mountain-and-lake-kyDyOHkIbC8",
    photographer: "Marc-Olivier Jodoin",
    facts: [
      { label: "Project type", value: "Television operating system" },
      { label: "Source", value: "Shared OS repository" }
    ],
    highlights: []
  },
  {
    slug: "solsticeARC",
    name: "solsticeARC",
    category: "Automotive infotainment · Web",
    summary: "A browser-based automotive infotainment concept for in-vehicle displays.",
    description:
      "solsticeARC explores a web-based infotainment environment for landscape-oriented in-vehicle displays. Its planned interface brings navigation, media playback, and connected-device features together. Capabilities that require privileged vehicle or mobile-system access will depend on supported browser APIs or a separate integration layer.",
    image: "https://images.unsplash.com/photo-1773065558261-792b9d779fb1?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "A car navigation display showing a map and music player",
    photoPage: "https://unsplash.com/photos/car-navigation-screen-showing-map-and-music-player-QJdSPs-CFxw",
    photographer: "Seungmin Yoon",
    facts: [
      { label: "Project type", value: "Automotive infotainment" },
      { label: "Platform", value: "Web browser" },
      { label: "Target display", value: "In-vehicle touchscreen" },
      { label: "Stage", value: "Concept" }
    ],
    highlights: []
  }
];

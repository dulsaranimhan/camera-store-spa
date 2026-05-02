export interface StoreProduct {
  id: string
  name: string
  price: number
  category: string
  image: string
  description: string
}

export const products: StoreProduct[] = [
  // Photography
  {
    id: "sony-a7-iv",
    name: "Sony A7 IV",
    price: 430000,
    category: "photography",
    image: "/src/assets/sony-camera.png",
    description: "Full-frame mirrorless camera for professional photography.",
  },
  {
    id: "nikon-d7500",
    name: "Nikon D7500",
    price: 280000,
    category: "photography",
    image: "/src/assets/sony-camera.png",
    description: "DSLR camera suitable for photography and video.",
  },
  {
    id: "sony-a7-iii",
    name: "Sony A7 III",
    price: 320000,
    category: "photography",
    image: "/src/assets/sony-camera.png",
    description: "Full-frame mirrorless camera with excellent autofocus.",
  },
  {
    id: "sony-a7-v",
    name: "Sony A7 V",
    price: 830000,
    category: "photography",
    image: "/src/assets/sony-camera.png",
    description: "Advanced Sony mirrorless camera for professionals.",
  },
  {
    id: "canon-r5",
    name: "Canon R5",
    price: 310000,
    category: "photography",
    image: "/src/assets/sony-camera.png",
    description: "Canon professional mirrorless camera.",
  },
  {
    id: "nikon-z5",
    name: "Nikon Z5",
    price: 530000,
    category: "photography",
    image: "/src/assets/sony-camera.png",
    description: "Nikon full-frame mirrorless camera.",
  },
  {
    id: "sony-a6400",
    name: "Sony a6400",
    price: 230000,
    category: "photography",
    image: "/src/assets/sony-camera.png",
    description: "Compact mirrorless camera with real-time autofocus.",
  },
  {
    id: "canon-4000d",
    name: "Canon 4000D",
    price: 220000,
    category: "photography",
    image: "/src/assets/sony-camera.png",
    description: "Entry-level DSLR camera for beginners.",
  },

  // Pro Video
  {
    id: "sony-pxw-z280",
    name: "Sony PXW-Z280",
    price: 680000,
    category: "pro-video",
    image: "/src/assets/sony-camera.png",
    description: "Professional video camera for broadcast production.",
  },
  {
    id: "canon-xa60b",
    name: "Canon XA60B",
    price: 359000,
    category: "pro-video",
    image: "/src/assets/sony-camera.png",
    description: "Compact professional Canon video camera.",
  },
  {
    id: "sony-fdr",
    name: "Sony FDR",
    price: 210000,
    category: "pro-video",
    image: "/src/assets/sony-camera.png",
    description: "Sony 4K video camera for creators.",
  },
  {
    id: "sony-xhr-nx200",
    name: "Sony XHR-NX200",
    price: 774000,
    category: "pro-video",
    image: "/src/assets/sony-camera.png",
    description: "Professional Sony video camera.",
  },

  // Drones
  {
    id: "dji-phantom-4",
    name: "DJI Phantom 4",
    price: 320000,
    category: "drones",
    image: "/src/assets/sony-camera.png",
    description: "Drone camera with stable flight and aerial photography support.",
  },
  {
    id: "dji-neo-2",
    name: "DJI Neo 2",
    price: 134000,
    category: "drones",
    image: "/src/assets/sony-camera.png",
    description: "Compact mini drone suitable for smooth aerial shots.",
  },
  {
    id: "dji-mavic-mini",
    name: "DJI Mavic MINI",
    price: 285000,
    category: "drones",
    image: "/src/assets/sony-camera.png",
    description: "Lightweight drone with stable video recording features.",
  },
  {
    id: "dji-mavic-pro",
    name: "DJI Mavic Pro",
    price: 615000,
    category: "drones",
    image: "/src/assets/sony-camera.png",
    description: "Professional drone for high-quality aerial photography and video.",
  },

  // Lighting
  {
    id: "godox-tt350",
    name: "GODOX TT350",
    price: 60000,
    category: "lighting",
    image: "/src/assets/sony-camera.png",
    description: "Compact flash light for camera photography.",
  },
  {
    id: "godox-tt400",
    name: "GODOX TT400",
    price: 65000,
    category: "lighting",
    image: "/src/assets/sony-camera.png",
    description: "Powerful flash light for indoor photography.",
  },
  {
    id: "godox-softbox",
    name: "GODOX Softbox",
    price: 47000,
    category: "lighting",
    image: "/src/assets/sony-camera.png",
    description: "Softbox lighting setup for studio photography.",
  },

  // Audio
  {
    id: "jbl-720bt",
    name: "JBL 720BT",
    price: 18000,
    category: "audio",
    image: "/src/assets/sony-camera.png",
    description: "Wireless headphones for monitoring and editing audio.",
  },
  {
    id: "jbl-750bt",
    name: "JBL 750BT",
    price: 25000,
    category: "audio",
    image: "/src/assets/sony-camera.png",
    description: "Bluetooth headphones with clear audio quality.",
  },

  // Gaming
  {
    id: "ps5",
    name: "PS 5",
    price: 320000,
    category: "gaming",
    image: "/src/assets/sony-camera.png",
    description: "PlayStation 5 gaming console.",
  },
]
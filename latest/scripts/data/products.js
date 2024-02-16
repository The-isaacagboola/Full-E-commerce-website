export const products = [
  {
    id: "p1",
    category: "general",
    image: `<img src="Images/products/71RdoeXxtrL 1.png" alt="coat" />`,
    name: "Breed Dry Dog Food",
    presentPrice: 100,
    rating: {
      stars: 5,
      count: 35,
    },
  },
  {
    id: "p2",
    category: "general",
    image: `<img
    src="Images/products/eos-250d-03-500x500 1 (1).png"
    alt="coat"
  />`,
    name: "CANON EOS DSLR Camera",
    presentPrice: 360,
    rating: {
      stars: 5,
      count: 95,
    },
  },
  {
    id: "p3",
    category: "general",
    image: ` <img
    src="Images/products/ideapad-gaming-3i-01-500x500 1.png"
    alt="laptop"
  />`,
    name: "ASUS FHD Gaming Laptop",
    presentPrice: 700,
    rating: {
      stars: 5,
      count: 325,
    },
  },
  {
    id: "p4",
    category: "general",
    image: `<img
    src="Images/products/curology-j7pKVQrTUsM-unsplash 1 (1).png"
    alt="coat"
  />`,
    name: "Curology Product Set",
    presentPrice: 500,
    rating: {
      stars: 5,
      count: 145,
    },
  },
  {
    id: "p5",
    category: "general",
    image: `<img
    src="Images/products/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png"
    alt="elctric car"
  />`,
    name: "Kids Electric Car",
    presentPrice: 960,
    rating: {
      stars: 5,
      count: 65,
    },
  },
  {
    id: "p6",
    category: "general",
    image: `<img src="Images/products/Copa_Sense 1.png" alt="soccer cleats" />`,
    name: "Jr. Zoom Soccer Cleats",
    presentPrice: 1160,
    rating: {
      stars: 5,
      count: 35,
    },
  },
  {
    id: "p7",
    category: "general",
    image: `<img src="Images/products/GP11_PRD3 1.png" alt="Gamepad" />`,
    name: "GP11 Shooter USB Gamepad",
    presentPrice: 660,
    rating: {
      stars: 5,
      count: 55,
    },
  },
  {
    id: "p8",
    category: "general",
    image: `<img
    src="Images/products/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png"
    alt="Satin Jacket"
  />`,
    name: "Quilted Satin Jacket",
    presentPrice: 660,
    rating: {
      stars: 5,
      count: 55,
    },
  },
  {
    id: "f1",
    category: "flashsale",
    flashsaleNumber: 45,
    image: `<img src="Images/products/g92-2-500x500 1.png" alt="game-pad" />`,
    name: "HAVIT HV-G92 Gamepad",
    presentPrice: 120,
    formerPrice: 160,
    rating: {
      stars: 5,
      count: 88,
    },
  },
  {
    id: "f2",
    category: "flashsale",
    flashsaleNumber: 35,
    image: `<img src="Images/products/ak-900-01-500x500 1.png" alt="keyboard" />`,
    name: "AK-900 Wired keyboard",
    presentPrice: 960,
    formerPrice: 1160,
    rating: {
      stars: 4,
      count: 75,
    },
  },
  {
    id: "f3",
    category: "flashsale",
    flashsaleNumber: 45,
    image: ` <img
    src="Images/products/g27cq4-500x500 1.png"
    alt="flat screen tv"
  />`,
    name: "IPS LCD Gaming Monitor",
    presentPrice: 370,
    formerPrice: 400,
    rating: {
      stars: 5,
      count: 99,
    },
  },
  {
    id: "f4",
    category: "flashsale",
    flashsaleNumber: 45,
    image: ` <img
    src="Images/products/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png"
    alt="flat screen tv"
  />`,
    name: "S-Series Comfort Chair",
    presentPrice: 375,
    formerPrice: 400,
    rating: {
      stars: 5,
      count: 99,
    },
  },
  {
    id: "b1",
    category: "best-selling",
    image: `<img
    src="Images/products/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png"
    alt="coat"
  />`,
    name: "The North Coat",
    presentPrice: 260,
    formerPrice: 360,
    rating: {
      stars: 5,
      count: 65,
    },
  },
  {
    id: "b2",
    category: "best-selling",
    image: `<img
    src="Images/products/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png"
    alt="bag"
  />`,
    name: "Guchi Duffle Bag",
    presentPrice: 960,
    formerPrice: 1160,
    rating: {
      stars: 5,
      count: 65,
    },
  },
  {
    id: "b3",
    category: "best-selling",
    image: `<img
    src="Images/products/gammaxx-l240-argb-1-500x500 1.png"
    alt="stereo"
  />`,
    name: "S-Series Comfort Chair",
    presentPrice: 160,
    formerPrice: 170,
    rating: {
      stars: 5,
      count: 69,
    },
  },
  {
    id: "b4",
    category: "best-selling",
    image: `<img
    src="Images/products/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png"
    alt="Chair"
  />`,
    name: "Small Bookshelf",
    presentPrice: 360,
    formerPrice: "770",
    rating: {
      stars: 5,
      count: 75,
    },
  },
];


export let cart = JSON.parse(localStorage.getItem("cart")) || [
  {
    id: "f3",
    category: "flashsale",
    flashsaleNumber: 45,
    image: ` <img
        src="Images/products/g27cq4-500x500 1.png"
        alt="flat screen tv"
      />`,
    name: "IPS LCD Gaming Monitor",
    presentPrice: 370,
    formerPrice: 400,
    rating: {
      stars: 5,
      count: 99,
    },
  },
  {
    id: "p7",
    category: "general",
    image: `<img src="Images/products/GP11_PRD3 1.png" alt="Gamepad" />`,
    name: "GP11 Shooter USB Gamepad",
    presentPrice: 660,
    rating: {
      stars: 5,
      count: 55,
    },
  },
];
saveToLocal();

export function saveToLocal(){
  localStorage.setItem("cart", JSON.stringify(cart));
};
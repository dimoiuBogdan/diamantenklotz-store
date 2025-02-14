import type {
  Diamond,
  Labour,
  Metal,
  Product,
  ProductCategory,
  ProductImage,
  Stone,
} from "@prisma/client";

type SampleData = {
  products: Product[];
  productCategories: ProductCategory[];
  labours: Labour[];
  metals: Metal[];
  stones: Stone[];
  diamonds: Diamond[];
  productImages: ProductImage[];
};

const sampleData: SampleData = {
  diamonds: [
    {
      amt: 430,
      batchNo: "661037",
      certificateNo: null,
      clarity: "VS1",
      color: "E",
      gSize: null,
      id: 1,
      mm: "1.23",
      pcs: 1,
      pointer: 2.0,
      productId: 1,
      rate: 215,
      raw: "SO",
      shape: "RND",
      sizeName: null,
      totDiaAmt: 430,
      wts: 2.0,
    },
  ],
  metals: [
    {
      amt: 246,
      grWt: 4.494,
      id: 1,
      name: "Gold",
      netWt: 4.094,
      qly: "G14KYY",
      rate: 60.05,
    },
  ],
  stones: [],
  productImages: [
    {
      id: 1,
      productId: 1,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      productId: 1,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      productId: 1,
      imageUrl: "https://via.placeholder.com/150",
    },
  ],
  productCategories: [
    {
      name: "Women's Rings",
      id: 1,
    },
    {
      name: "Men's Rings",
      id: 2,
    },
    {
      name: "Pendants",
      id: 3,
    },

    {
      name: "Earrings",
      id: 4,
    },

    {
      name: "Necklaces",
      id: 5,
    },

    {
      name: "Bracelets",
      id: 6,
    },

    {
      name: "Kada",
      id: 7,
    },
  ],
  labours: [
    {
      id: 1,
      amt: 61.41,
      rate: 15,
    },
  ],
  products: [
    {
      amt: 761.84,
      categoryId: 1,
      createdAt: new Date(),
      description:
        "A ring for women with a beautiful design and a diamond that is lab-grown",
      goldLoss: 24.6,
      id: 1,
      isFeatured: false,
      itemNumber: "GLD14848",
      labourId: 1,
      metalId: 1,
      name: "Beautiful Women Ring",
      size: 14,
      slug: "beautiful-women-ring",
      stock: 1,
      styleCode: "GLR3207A",
      updatedAt: new Date(),
    },
  ],
};

export default sampleData;

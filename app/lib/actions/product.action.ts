"use server";

import { PRODUCTS_PER_PAGE } from "@/app/common/constants";
import type { ActionResult } from "@/app/common/data/types";
import { prisma } from "@/db/prisma";
import {
  type Diamond,
  type Labour,
  type Metal,
  type Product,
  type ProductCategory,
  type ProductImage,
  type Stone,
} from "@prisma/client";
import { cache } from "react";

export type ProductWithRelations = Product & {
  ProductImage: ProductImage[];
  Stone: Stone[];
  Diamond: Diamond[];
  Metal: Metal;
  Labour: Labour;
};

export const getProducts = cache(
  async ({
    category,
    sort = "newest",
    price,
    page = 1,
  }: {
    category?: number;
    sort?: "newest" | "oldest";
    price?: string;
    page?: number;
  }): Promise<ActionResult<ProductWithRelations[]>> => {
    try {
      const [minPrice, maxPrice] =
        price !== "all" ? (price?.split("-") ?? []) : [];

      const products = await prisma.product.findMany({
        include: {
          Metal: true,
          Labour: true,
          ProductImage: true,
          Stone: true,
          Diamond: true,
        },
        take: PRODUCTS_PER_PAGE,
        skip: (page - 1) * PRODUCTS_PER_PAGE,
        orderBy: {
          createdAt: sort === "newest" ? "desc" : "asc",
        },
        where: {
          categoryId: category ? Number(category) : undefined,
          amt: {
            gte: minPrice ? Number(minPrice) : undefined,
            lte: maxPrice ? Number(maxPrice) : undefined,
          },
        },
      });

      return {
        data: products,
        success: true,
      };
    } catch (error) {
      console.error("[PRODUCT_GET_ERROR]", error);

      return {
        error: "Failed to fetch products",
        success: false,
      };
    }
  }
);

export const getProductCategories = cache(
  async (): Promise<ActionResult<ProductCategory[]>> => {
    try {
      const categories = await prisma.productCategory.findMany();

      return {
        data: categories,
        success: true,
      };
    } catch (error) {
      console.error("[PRODUCT_CATEGORIES_GET_ERROR]", error);

      return {
        error: "Failed to fetch product categories",
        success: false,
      };
    }
  }
);

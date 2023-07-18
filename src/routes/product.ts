import { FastifyInstance } from "fastify";
import { Products } from "@prisma/client";
import * as z from "zod";

import prisma from "../lib/prisma";

import formattedProducts from "../utils/formattedProducts";
import getQueries from "../utils/getQueries";
import setSkipAndTake from "../utils/setSkipAndTake";

const productRoutes = async (server: FastifyInstance) => {
  // Search for the product that has the ID sent
  server.get("/product/:id", async (request) => {
    const createProductParams = z.object({
      id: z.string().uuid(),
    });

    const id = createProductParams.parse(request.params);

    const product = await prisma.products.findUnique({
      where: id,
    });

    return product;
  });

  // Counts the total number of products
  server.get("/products/amount", async () => {
    const productsAmount = await prisma.products.count();

    return productsAmount;
  });

  // Searches for all products that have a given category ID
  server.get("/product-category/:id", async (request) => {
    const createProductCategoryParams = z.object({
      id: z.string().uuid(),
    });

    const { id } = createProductCategoryParams.parse(request.params);
    const { skip, take } = getQueries(request);

    const productCategory = await prisma.products.findMany({
      take,
      skip,
      where: {
        categoryIds: {
          equals: id,
        },
      },
    });

    return {
      productCategory: formattedProducts(productCategory),
      ...setSkipAndTake(skip, take),
    };
  });

  // Search for products that have any of the submitted IDs
  server.get("/products-by-ids", async (request) => {
    const { skip, take } = getQueries(request);

    const createProductsByIdsQuery = z.object({
      productIds: z.string(),
    });

    const { productIds } = createProductsByIdsQuery.parse(request.query);
    const selectedProductIds = productIds.split(",").slice(skip, skip + take);

    const products: Products[] = [];

    for (let productId of selectedProductIds) {
      const product = await prisma.products.findUnique({
        where: {
          id: productId,
        },
      });

      products.push(product as Products);
    }

    return {
      products: formattedProducts(products),
      ...setSkipAndTake(skip, take),
    };
  });

  // Counts the number of products that have any of the submitted IDs in their category
  server.get("/products-by-category-ids/amount", async (request) => {
    const createProductsByCategoryIdsAmountParams = z.object({
      productId: z.string().uuid(),
      categoryIds: z.string(),
    });

    const { productId, categoryIds } =
      createProductsByCategoryIdsAmountParams.parse(request.query);

    const amount = await prisma.products.count({
      where: {
        AND: [
          {
            categoryIds: {
              hasSome: categoryIds,
            },
          },
          {
            NOT: {
              id: productId,
            },
          },
        ],
      },
    });

    return amount;
  });

  // Search for products that have any of the submitted IDs in their category
  server.get("/products-by-category-ids", async (request) => {
    const { skip, take } = getQueries(request);

    const createProductsByCategoryIdsParams = z.object({
      productId: z.string().uuid(),
      categoryIds: z.string(),
    });

    const { productId, categoryIds } = createProductsByCategoryIdsParams.parse(
      request.query
    );

    const products = await prisma.products.findMany({
      take,
      skip,
      where: {
        AND: [
          {
            categoryIds: {
              hasSome: categoryIds,
            },
          },
          {
            NOT: {
              id: productId,
            },
          },
        ],
      },
    });

    return {
      products: formattedProducts(products),
      ...setSkipAndTake(skip, take),
    };
  });

  // Search products
  server.get("/products", async (request) => {
    const { skip, take } = getQueries(request);

    const products = await prisma.products.findMany({
      take,
      skip,
    });

    return {
      products: formattedProducts(products),
      ...setSkipAndTake(skip, take),
    };
  });

  // Create product
  server.post("/product", async (request) => {
    const createProductBody = z.object({
      name: z.string().min(4).max(30),
      description: z.string().min(20).max(2000),
      imageUrlIds: z.string().array().min(1).max(10),
      price: z.string().min(1).max(6),
      categoryId: z.string().array().min(1).max(10),
    });

    const data = createProductBody.parse(request.body);

    await prisma.products.create({
      data,
    });

    return "success";
  });

  // Update product
  server.patch("/product/:id", async (request) => {
    const createProductParams = z.object({
      id: z.string().uuid(),
    });

    const createProductBody = z.object({
      name: z.string().min(4).max(30).optional(),
      description: z.string().min(20).max(2000).optional(),
      imageUrlIds: z.string().array().min(1).max(10).optional(),
      price: z.string().min(1).max(6).optional(),
      categoryId: z.string().array().min(1).max(10).optional(),
    });

    const id = createProductParams.parse(request.params);
    const data = createProductBody.parse(request.body);

    await prisma.products.update({
      where: id,
      data,
    });

    return "success";
  });

  // Delete product
  server.delete("/product/:id", async (request) => {
    const createProductParams = z.object({
      id: z.string().uuid(),
    });

    const id = createProductParams.parse(request.params);

    await prisma.products.delete({
      where: id,
    });

    return "success";
  });
};

export default productRoutes;

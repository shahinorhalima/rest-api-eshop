import asynchandler from "express-async-handler";
import prisma from "../config/client.js";

/**
 * @dec get all brand
 * @method get
 * @endpoint /api/v1/brnad
 */

export const getAllBrands = asynchandler(async (req, res) => {
  // get all brands data from db
  const data = await prisma.brand.findMany({});
  res.status(200).json(data);
});

/**
 * @dec get single brand
 * @method api/v1/brand:id
 */

export const getSingleBrand = asynchandler(async (req, res) => {
  // get brand id
  const { id } = req.params;
  // get all brand data from db
  const data = await prisma.brand.findUnique({
    where: {
      id,
    },
  });
  res.status(200).json(data);
});

/**
 * @dec update single brand
 * @endpoint /api/v1/brand:id
 * @method patch
 */
export const updateBrand = asynchandler(async (req, res) => {
  // get brand id
  const { id } = req.params;
  // get all brand data  from db

  const data = await prisma.brand.update({
    where: { id },
    data: req.body,
  });
  res.status(200).json(data);
});

/**
 * @dec create brand
 * @method create
 * @endpoint /api/v1/brand
 */

export const createBrand = asynchandler(async (req, res) => {
  // get all brands data from db

  const data = await prisma.brand.create({
    data: req.body,
  });

  res.status(201).json(data);
});

/**
 * @dec detele single brand db
 * @method delete
 * @endpoint /api/v1/brnad:id
 */

export const deleteBrand = asynchandler(async (req, res) => {
  // get brnad id
  const { id } = req.params;
  // get brand data from db
  const data =  await prisma.brand.delete({
    where: { id }
  });
  res.status(200).json(data);
});

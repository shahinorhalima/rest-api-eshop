import express from "express";
import {
  createBrand,
  deleteBrand,
  getAllBrands,
  getSingleBrand,
  updateBrand,
} from "../controller/brandController.js";

// router init
const router = express.Router();

//router create

router.get("/", getAllBrands);
router.get("/:id", getSingleBrand);
router.patch("/:id", updateBrand);
router.post("/", createBrand);
router.delete("/:id", deleteBrand);

// export router
export default router;

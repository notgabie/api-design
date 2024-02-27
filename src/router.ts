import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
} from "./handlers/product";
import {
  createUpdate,
  deleteUpdate,
  getUpdate,
  getUpdates,
  updateUpdate,
} from "./handlers/update";

const router = Router();

/**
 * Product
 */
router.get("/product", getProducts);

router.get("/product/:id", getProduct);

router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);

router.delete("/product/:id", deleteProduct);

/**
 * Update
 */

const putUpdateValidation = [
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "DEPRECATED", "SHIPPED"]).optional(),
  body("version").optional(),
];

const postUpdateValidation = [
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
];

router.get("/update", getUpdates);

router.get("/update/:id", getUpdate);

router.post("/update", postUpdateValidation, handleInputErrors, createUpdate);

router.put("/update/:id", putUpdateValidation, handleInputErrors, updateUpdate);

router.delete("/update/:id", deleteUpdate);

/**
 * UpdatePoint
 */

const putUpdatePointValidation = [
  body("name").optional().isString(),
  body("description").optional().isString(),
];

const postUpdatePointValidation = [
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
];

router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post("/updatepoint", postUpdatePointValidation, (req, res) => {});

router.put("/updatepoint/:id", putUpdatePointValidation, (req, res) => {});

router.delete("/updatepoint/:id", (req, res) => {});

export default router;

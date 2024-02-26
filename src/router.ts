import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
 * Product
 */
router.get("/product", (req, res) => {
  res.json({ message: "product" });
});

router.get("/product/:id", (req, res) => {});

router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);

router.delete("/product/:id", (req, res) => {});

/**
 * Update
 */

const putUpdateValidation = [
  body("title").optional(),
  body("body").optional(),
  body('status').isIn(['IN_PROGRESS', 'DEPRECATED', 'SHIPPED']),
  body("version").optional(),
];

const postUpdateValidation = [
  body("title").exists().isString(),
  body("body").exists().isString(),
];

router.get("/update", (req, res) => {});

router.get("/update/:id", (req, res) => {});

router.post(
  "/update",
  postUpdateValidation,
  handleInputErrors,
  (req, res) => {}
);

router.put(
  "/update/:id",
  putUpdateValidation,
  handleInputErrors,
  (req, res) => {}
);

router.delete("/update/:id", (req, res) => {});

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

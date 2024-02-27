import prisma from "../db";

// Get all products
export const getProducts = async (req, res) => {
  console.log("getting all products....");
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });

  res.json({ data: user.products });
};

// Get one product
export const getProduct = async (req, res) => {
  console.log("getting one product....");
  const id = req.params.id;

  const product = await prisma.product.findFirst({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};

// Create a product
export const createProduct = async (req, res) => {
  console.log("creating product....");
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};

// Update a product
export const updateProduct = async (req, res) => {
  console.log("updating product....");
  const updated = await prisma.product.update({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
    data: {
      name: req.body.name,
    },
  });

  res.json({ data: updated });
};

export const deleteProduct = async (req, res) => {
  console.log("deleting product....");
  const deleted = await prisma.product.delete({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: deleted });
};

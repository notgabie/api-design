import prisma from "../db";

// Get all updates
export const getUpdates = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.product.id,
    },
    include: {
      updates: true,
    },
  });

  res.json({ data: product.updates });
};

// Get one update for one product
export const getUpdate = async (req, res) => {
  const product = await prisma.product.findFirst({
    where: {
      id: req.product.id,
    },
    include: {
      updates: true,
    },
  });

  res.json({ data: product.updates });
};

// Create an update
export const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.productId,
    },
  });

  if (!product) {
    return res.json({ message: "no" });
  }

  const update = await prisma.update.create({
      data: {
          title: req.body.title,
          body: req.body.body,
          product: {connect: product}
    }
  });

  res.json({ data: update });
};

// Update an update
export const updateUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.updates];
  }, []);

  const match = updates.find((update) => update.id === req.params.id);

  if (!match) {
    res.json({ messagge: "no" });
  }

  const updatedUpdate = await prisma.update.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });

  res.json({ data: updateUpdate });
};

// Delete an update
export const deleteUpdate = async (req, res) => {
  const { updateId } = req.params;

  await prisma.update.findUnique({
    where: { id: updateId },
    include: {
      product: {
        select: {
          belongsToId: true,
        },
      },
    },
  });

  const deleted = await prisma.update.delete({
    where: { id: updateId },
  });

  res.json({ data: deleted });
};

import prisma from "../db";

// Get all updatePoints
export const getUpdatePoints = async (req, res) => {
  const updatePoints = await prisma.update.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      updatePoints: true,
    },
  });

  res.json({ data: updatePoints });
};

// Get one updatePoint
export const getUpdatePoint = async (req, res) => {
  const updatePoint = await prisma.update.findFirst({
    where: {
      id: req.user.id,
    },
    include: {
      updatePoints: true,
    },
  });

  res.json({ data: updatePoint });
};

// Create updatePoint
export const createUpdatePoint = async (req, res) => {
  const updatePoint = await prisma.updatePoint.create({
    data: {
      update: req.params.update,
      name: req.body.name,
      description: req.body.description,
      updatedAt: String(Date.now()),
    },
  });

  res.json({ data: updatePoint });
};

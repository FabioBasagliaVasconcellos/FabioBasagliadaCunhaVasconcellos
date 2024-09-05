import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const listUsers = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.query;

    const filters: any = {};

    if (name) {
      filters.name = { contains: name as string, mode: 'insensitive' };
    }

    if (email) {
      filters.email = { contains: email as string, mode: 'insensitive' };
    }

    const users = await prisma.user.findMany({
      where: filters,
    });

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching users' });
  }
};

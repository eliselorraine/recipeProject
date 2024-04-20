import { Prisma } from '@prisma/client';
import prisma from './libs/client'

export const createUser = async (user: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data: user
  });
}

export const getUser = async (id: string) => {
  return await prisma.user.findUnique({ where: { id: id } })
}

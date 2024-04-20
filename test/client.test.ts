
import { Role } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { expect, test, vi } from 'vitest'

import prisma from '../libs/__mocks__/client'
import { createUser } from '../helpers'

vi.mock('../libs/client')
test('createUser should return the generated user', async () => {
  const newUser = {
    email: 'new_user@prisma.io',
    name: 'Prisma Fan',
    id: uuidv4(),
    createdAt: new Date(),
    role: Role.USER
  }
  prisma.user.create.mockResolvedValue(newUser)
  const user = await createUser(newUser)
  expect(user).toStrictEqual(newUser)
})

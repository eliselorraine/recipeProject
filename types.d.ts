enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

type LoginParams = {
  email: string;
  password: string;
};

type CreateUserInput = {
  email: string;
  name?: string;
}

interface User extends CreateUserInput {
  id: string,
  createdAt: Date,
  role: Role
}

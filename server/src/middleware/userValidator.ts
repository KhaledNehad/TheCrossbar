import { z } from 'zod';

export const userValidator = z.object({
  username: z
    .string()
    .min(4, {
      message: 'Username must be at least 4 characters long'
    })
    .max(40)
    .nonempty({
      message: 'Username is required'
    }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters long'
    })
    .max(40)
    .nonempty({ message: 'Password is required' }),
  email: z
    .string()
    .email({
      message: 'Email is not valid'
    })
    .min(6)
    .max(255)
    .nonempty({ message: 'Email is required' }),
  isAdmin: z.boolean().optional().default(false),
  createdAt: z.date().optional().default(new Date()),
  updatedAt: z.date().optional().default(new Date())
});

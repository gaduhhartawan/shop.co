import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified" | "role"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
  role: string | null;
};

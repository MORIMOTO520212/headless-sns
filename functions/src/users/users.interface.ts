import { FieldValue } from 'firebase-admin/firestore';

export type User = {
  id: string;
  userId: string;
  profileUrl: string;
  bio: string;
  hashedPassword: string; // sha256
  createdAt: FieldValue;
  updatedAt: FieldValue;
};

export type CreateUser = Omit<
  User,
  'id' | 'hashedPassword' | 'createdAt' | 'updatedAt'
> & {
  password: string;
};
export type SetUser = Omit<User, 'id'>;
export type ResponseUser = Omit<User, 'hashedPassword'>;

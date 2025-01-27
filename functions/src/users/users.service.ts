import { Injectable } from '@nestjs/common';
import { firestore } from 'src/lib/firestore';
import { CreateUser, ResponseUser, SetUser } from './users.interface';
import bcrypt from 'bcrypt';
import { FieldValue } from 'firebase-admin/firestore';

const salt = 10;
@Injectable()
export class UsersService {
  async create(body: CreateUser): Promise<ResponseUser> {
    // eslint-disable-next-line
    const hashedPassword: string = await bcrypt.hash(body.password, salt);
    const userData: SetUser = {
      userId: body.userId,
      profileUrl: body.profileUrl,
      bio: body.bio,
      hashedPassword,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    };

    const ref = await firestore.collection('users').add(userData);
    return {
      id: ref.id,
      ...userData,
    };
  }
  async update() {
    return 'update user done.';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  create() {
    return 'create user done.';
  }
  update() {
    return 'update user done.';
  }
}

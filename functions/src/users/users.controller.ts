import { Controller, Post, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Patch('create')
  createUser() {
    return this.usersService.create();
  }

  @Post()
  updateUser() {
    return this.usersService.update();
  }
}

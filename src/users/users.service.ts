import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userID: string): Promise<User> {
    return await this.usersRepository.findOne({ userID });
  }

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find({});
  }

  async createUser(email: string, age: number): Promise<User> {
    return await this.usersRepository.create({
      userID: uuidv4(),
      email,
      age,
      favoriteFoods: [],
    });
  }

  async updateUser(userID: string, userUpdates: UpdateUserDto): Promise<User> {
    return await this.usersRepository.findOneAndUpdate({ userID }, userUpdates);
  }
}

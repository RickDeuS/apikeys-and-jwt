import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';


@Injectable()
export class UserService {
    constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) { }
    async createUser(username: string, password: string): Promise<User> {
        console.log(password);
        
        return this.userModel.create({
            username,   
            password,
        });
    }
    async findOne(query: object ): Promise<User> {
        console.log(query);
        
        return this.userModel.findOne(query);
    }
}
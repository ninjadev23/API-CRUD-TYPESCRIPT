import { IUserRepository, User } from "../types/UsersTypes";
import { UserModel } from "../models/Users";
export class UserRepository implements IUserRepository{
    async create(data: User): Promise<User> {
        const newUser = new UserModel(data)
        return await newUser.save()
    }
    async find(): Promise<User[]> {
        return await UserModel.find().exec()
    }
    async findById(id: string): Promise<User | null> {
        return await UserModel.findById(id).exec()
    }
    async update(id: string, data: Partial<User>): Promise<User | null> {
        return await UserModel.findByIdAndUpdate(id, data, {
            new: true
        }).exec()
    }
    async delete(id: string): Promise<boolean> {
        const dataDeleted = await UserModel.findByIdAndDelete(id)
        return dataDeleted !== null
    }
}
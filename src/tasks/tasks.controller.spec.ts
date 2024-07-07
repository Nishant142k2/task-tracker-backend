import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async getTasks(userId: string): Promise<Task[]> {
    return this.taskModel.find({ userId }).exec();
  }

  async addTask(createTaskDto: CreateTaskDto, userId: string): Promise<Task> {
    const newTask = new this.taskModel({ ...createTaskDto, userId });
    return newTask.save();
  }

  // Test MongoDB connection
  async testConnection(): Promise<string> {
    try {
      await this.taskModel.findOne().exec();
      return 'MongoDB connection successful';
    } catch (error) {
      return `MongoDB connection error: ${error.message}`;
    }
  }
}

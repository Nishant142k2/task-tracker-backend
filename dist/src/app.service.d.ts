import { Model } from 'mongoose';
import { Task } from './tasks/schemas/task.schema';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<Task>);
    getTasks(userId: string): Promise<Task[]>;
    addTask(name: string, userId: string): Promise<Task>;
}

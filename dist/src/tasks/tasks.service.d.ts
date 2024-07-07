import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private taskModel;
    getTasks: any;
    addTask(createTaskDto: CreateTaskDto, userId: any): void;
    constructor(taskModel: Model<Task>);
    findAll(): Promise<Task[]>;
    create(task: Task): Promise<Task>;
}

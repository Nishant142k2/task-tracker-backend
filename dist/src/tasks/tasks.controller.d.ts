import { TasksService } from './tasks.service';
import { Task } from './schemas/task.schema';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): Promise<Task[]>;
    create(createTaskDto: Task): Promise<Task>;
}

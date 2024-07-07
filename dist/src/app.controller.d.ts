import { TasksService } from './tasks/tasks.service';
import { CreateTaskDto } from './tasks/dto/create-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getTasks(req: any): Promise<any>;
    addTask(createTaskDto: CreateTaskDto, req: any): Promise<void>;
}

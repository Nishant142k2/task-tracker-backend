import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks/tasks.service'; // Correct path to TasksService
import { JwtAuthGuard } from './auth/jwt-auth.guard'; // Correct path to JwtAuthGuard
import { CreateTaskDto } from './tasks/dto/create-task.dto'; // Correct path to CreateTaskDto

@Controller('tasks')
export class TasksController{
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getTasks(@Request() req) {
    return this.tasksService.getTasks(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async addTask(@Body() createTaskDto: CreateTaskDto, @Request() req) {
    return this.tasksService.addTask(createTaskDto, req.user.userId);
  }
}

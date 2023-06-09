import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import {v4} from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Task 1 description',
      status: TaskStatus.PENDING,
    },
  ];
  getAllTasks() {
    return this.tasks;
  }

  createTasks(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push();

    return task;
  }
  updateTasks() {}
  deleteTasks() {}
}

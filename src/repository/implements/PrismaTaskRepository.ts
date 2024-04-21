import { ITaskRequest } from "@/models/ITask";
import { ITaskRepository } from "../ITaskRepository";
import { prisma } from "@/lib/prisma";


export class PrismaTaskRepository implements ITaskRepository {
    async remove(id: string) {
        await prisma.task.delete({ where: { id } })
    }
    async updateToComplete(id: string) {
        await prisma.task.update({ where: { id }, data: { is_complete: true } })
    }
    async findAll() {
        const tasks = await prisma.task.findMany()
        return tasks
    }
    async create(data: ITaskRequest) {
        const task = await prisma.task.create({ data: { description: data.description } })
        return task
    }
}
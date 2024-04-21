import { ITaskRepository } from "@/repository/ITaskRepository";

export class FindAllUseCase {
    constructor(private taskRepository: ITaskRepository) { }

    async execute() {
        const tasks = await this.taskRepository.findAll()
        return tasks
    }
}
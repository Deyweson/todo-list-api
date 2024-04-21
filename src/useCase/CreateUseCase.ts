import { ITaskRepository } from "@/repository/ITaskRepository";

export class CreateUseCase {
    constructor(private taskRepository: ITaskRepository) { }

    async execute(description: string) {
        this.taskRepository.create({ description })
    }
}
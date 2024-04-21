import { ITaskRepository } from "@/repository/ITaskRepository";

export class RemoveUseCase {
    constructor(private taskRepository: ITaskRepository) { }

    async execute(id:string) {
        await this.taskRepository.remove(id)
    }
}
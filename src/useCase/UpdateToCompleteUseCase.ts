import { ITaskRepository } from "@/repository/ITaskRepository";

export class UpdateToCompleteUseCase {
    constructor(private taskRepository: ITaskRepository) { }

    async execute(id:string) {
        await this.taskRepository.updateToComplete(id)
    }
}
import { ITaskRequest, ITaskResponse } from '@/models/ITask'

export interface ITaskRepository {
    create(data:ITaskRequest): Promise<ITaskResponse | null>
    findAll(): Promise<ITaskResponse[] | null>
    updateToComplete(id: string): Promise<void>
    remove(id: string): Promise<void>
}
export interface ITaskRequest{
    id?: string
    description: string
    is_complete?: boolean
    create_at?: Date
}

export interface ITaskResponse{
    id: string
    description: string
    is_complete: boolean
    create_at: Date
}
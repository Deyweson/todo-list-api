import { taskRepository } from "@/repository/repository";
import { CreateUseCase } from "@/useCase/CreateUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const descriptionSchema = z.object({
        description: z.string({
            required_error: 'Description is required', 
            invalid_type_error: 'Description need to a string'
        }).min(3).max(50)
    })

    const { description } = descriptionSchema.parse(request.body)

    const createUseCase = new CreateUseCase(taskRepository)

    await createUseCase.execute(description)

    return reply.status(201).send()
}
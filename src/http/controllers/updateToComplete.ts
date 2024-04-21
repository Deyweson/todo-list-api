import { taskRepository } from "@/repository/repository";
import { UpdateToCompleteUseCase } from "@/useCase/UpdateToCompleteUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateToComplete(request: FastifyRequest, reply: FastifyReply) {

    const idSchema = z.object({
        id: z.string().uuid()
    })

    const { id } = idSchema.parse(request.params)

    const updateToCompleteUseCase = new UpdateToCompleteUseCase(taskRepository)
    await updateToCompleteUseCase.execute(id)

    return reply.status(200).send()
}
import { taskRepository } from "@/repository/repository";
import { RemoveUseCase } from "@/useCase/RemoveUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function remove(request: FastifyRequest, reply: FastifyReply) {

    const idSchema = z.object({
        id: z.string().uuid()
    })

    const { id } = idSchema.parse(request.params)

    const removeUseCase = new RemoveUseCase(taskRepository)
    await removeUseCase.execute(id)

    return reply.status(200).send()
}
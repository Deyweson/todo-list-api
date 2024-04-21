import { taskRepository } from "@/repository/repository";
import { FindAllUseCase } from "@/useCase/FindAllUseCase";
import { FastifyReply, FastifyRequest } from "fastify";

export async function findAll(request: FastifyRequest, reply: FastifyReply) {

    const findAllUseCase = new FindAllUseCase(taskRepository)
    const tasks = await findAllUseCase.execute()

    return reply.status(200).send(tasks)
}
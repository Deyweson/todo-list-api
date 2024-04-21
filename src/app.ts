import fastify from 'fastify'
import { taskRoutes } from '@/http/taskRoutes'
import { env } from './env'
import { ZodError } from 'zod'

export const app = fastify()

app.register(taskRoutes)


app.setErrorHandler((error, _request, reply) => {
    if (error instanceof ZodError) {
        return reply
            .status(400)
            .send({ message: 'Validation error.', issues: error.format() })
    }

    if (env.NODE_ENV !== 'prod') {
        console.log(error)
    }

    return reply.status(500).send({ message: 'Internal server error' })
})
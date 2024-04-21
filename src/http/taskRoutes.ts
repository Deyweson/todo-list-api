import { FastifyInstance } from "fastify";
import { create } from "./controllers/create";
import { findAll } from "./controllers/findAll";
import { updateToComplete } from "./controllers/updateToComplete";
import { remove } from "./controllers/delete";

export async function taskRoutes(app: FastifyInstance) {
    app.post('/tasks', create)
    app.get('/tasks', findAll)
    app.put('/tasks/:id', updateToComplete)
    app.delete('/tasks/:id', remove)
}
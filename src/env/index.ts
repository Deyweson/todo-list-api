import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'prod', 'test']).default('dev'),
    PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false){
    // create a error here
    throw new Error('Invalid enviroment variables')

}

export const env = _env.data
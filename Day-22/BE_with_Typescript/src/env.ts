import { z } from "zod";

const envSchema = z.object({
    PORT: z.string().optional(),
    // put all the env's here for validation
})

function createEnv(env: NodeJS.ProcessEnv) {
    const validationResult = envSchema.safeParse(env)
    if (!validationResult.success) {
        throw new Error(validationResult.error.message)
    }
    return validationResult.data
}

export const env = createEnv(process.env)
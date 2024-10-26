import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_API_URL: z.string().min(1),
    NEXT_PUBLIC_API_VERSION: z.string().min(1),
    NEXT_PUBLIC_HOME_URL: z.string().min(1)
  },
  // You need to destructure all the keys of CLIENT manually
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_VERSION: process.env.NEXT_PUBLIC_API_VERSION,
    NEXT_PUBLIC_HOME_URL: process.env.NEXT_PUBLIC_HOME_URL
  }
})

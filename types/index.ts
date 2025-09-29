import { ZCCategory } from '@/validators/category';
import { getCategories } from "@/server/category";
import { z } from 'zod';
import { adminLoginSchema } from '@/validators/login';

export type TCategoris = Awaited<ReturnType<typeof getCategories>>
export type TCCategory = z.infer<typeof ZCCategory>
export type TAdminLogin = z.infer<typeof adminLoginSchema>
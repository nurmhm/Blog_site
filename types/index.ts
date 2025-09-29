import { ZCCategory } from '@/validators/category';
import { getCategories } from "@/server/category";
import { z } from 'zod';

export type TCategoris = Awaited<ReturnType<typeof getCategories>>
export type TCCategory = z.infer<typeof ZCCategory>
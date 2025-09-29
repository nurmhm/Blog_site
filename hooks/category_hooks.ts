import { createCategory } from "@/server/category";
import { useMutation } from "@tanstack/react-query";
import { TCCategory } from '@/types';
 export const useCreateCategory = () => {
    return useMutation({
        mutationFn: async (data: TCCategory) => {
            const res = await createCategory(data);
            return res;
        }
    })
}
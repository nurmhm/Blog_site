import { TAdminLogin } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { api } from "./use-api";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (credentials: TAdminLogin) => {
      const response = await api.post("/login", credentials);
      return response.data;
    },
  });
};

"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TAdminLogin } from "@/types";
import { adminLoginSchema } from "@/validators/login";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useLoginMutation } from "@/hooks/use-login";

export function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const loginMutation = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { isValid },
    setError: setFormError,
    reset,
  } = useForm<TAdminLogin>({
    resolver: zodResolver(adminLoginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: TAdminLogin) => {
    try {
      loginMutation.mutate(data, {
        onSuccess: () => {
          toast.success("লগইন সফল হয়েছে");
          router.push("/admin/dashboard");
          reset();
        },
        onError: (error: any) => {
          console.error("Error during login:", error);
          let errorMessage =
            "লগইন ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।";

          if (axios.isAxiosError(error)) {
            const responseMessage = error.response?.data?.message;
            errorMessage = responseMessage || errorMessage;

            if (error.response?.status === 401) {
              errorMessage = "আপনার ইমেইল বা পাসওয়ার্ড সঠিক নয়।";
            }

            if (error.response?.data?.field) {
              setFormError(error.response.data.field, {
                type: "manual",
                message: responseMessage,
              });
            }
          } else if (error instanceof Error) {
            errorMessage = error.message;
          }

          toast.error(errorMessage);
        },
      });
    } catch (error) {
      toast.error("একটি অজানা ত্রুটি হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
      console.error("Unexpected error during login:", error);
    }
  };

  useEffect(() => {
    if (loginMutation.isSuccess) reset();
  }, [loginMutation.isSuccess, reset]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-4">
            <Lock className="h-6 w-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">অ্যাডমিন লগইন</CardTitle>
          <p className="text-black">আপনার ড্যাশবোর্ডে প্রবেশ করুন</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">ইমেইল</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@islamicknowledge.com"
                  {...register("email")}
                  className="pl-10 placeholder:text-black"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">পাসওয়ার্ড</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="আপনার পাসওয়ার্ড"
                  {...register("password")}
                  className="pl-10 pr-10 placeholder:text-black"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {loginMutation.isError && (
              <Alert variant="destructive">
                <AlertDescription>
                  {loginMutation.error?.message || "একটি অজানা ত্রুটি হয়েছে।"}
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={loginMutation.isPending || !isValid}
            >
              {loginMutation.isPending ? "লগইন করা হচ্ছে..." : "লগইন করুন"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

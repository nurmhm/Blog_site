import z from "zod";


export const adminLoginSchema = z.object({
  email: z.string().min(1, "ইমেইল আবশ্যক").email("সঠিক ইমেইল প্রদান করুন"),
  password: z
    .string()
    .min(6, "পাসওয়ার্ড আবশ্যক")
    .max(100, "পাসওয়ার্ড 100 অক্ষরের মধ্যে হতে হবে"),
});
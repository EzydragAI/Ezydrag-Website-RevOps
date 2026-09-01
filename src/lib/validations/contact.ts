import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(80),
  email: z.string().trim().email("Enter a valid email address."),
  issue: z
    .string()
    .trim()
    .min(12, "Tell us a little more about the loop you want to automate.")
    .max(2000),
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

import { z } from "zod";

export const partnerSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.string().trim().email("Enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "One or two lines is enough — who could you introduce us to?")
    .max(1000),
  // Honeypot field: must stay empty. Bots that fill it get a silent OK.
  company: z.string().max(0).optional(),
});

export type PartnerInput = z.infer<typeof partnerSchema>;

import { z } from "zod";

import {
  budgetRanges,
  serviceNeeds,
  specificInterests,
  timelines,
} from "@/content/contact-options";

/**
 * Shared contact form schema, used by both the client form (react-hook-form)
 * and the server API route so validation stays consistent on both sides.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "That name looks a little long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .email("Please enter a valid email address."),
  businessName: z
    .string()
    .trim()
    .min(1, "Please enter your business name.")
    .max(120),
  website: z
    .string()
    .trim()
    .max(200)
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .or(z.literal("")),
  serviceNeeds: z
    .array(z.enum(serviceNeeds))
    .default([]),
  specificInterests: z
    .array(z.enum(specificInterests))
    .default([]),
  budget: z.enum(budgetRanges).optional().or(z.literal("")),
  timeline: z.enum(timelines).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .max(4000, "That message is a bit long — please trim it down.")
    .optional()
    .or(z.literal("")),
  // Honeypot: must stay empty. Bots tend to fill every field.
  company_website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

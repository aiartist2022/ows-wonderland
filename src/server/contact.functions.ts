import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Invalid email").max(320),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(5000),
  source_page: z.string().trim().max(200).optional().or(z.literal("")),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      phone: data.phone || null,
      message: data.message,
      source_page: data.source_page || null,
    });

    if (error) {
      console.error("Contact submission failed:", error);
      return { ok: false as const, error: "Could not submit your message. Please try again." };
    }

    return { ok: true as const };
  });

"use client";

import { useMutation } from "@tanstack/react-query";
import type { PartnerInput } from "@/lib/validations/contact";

type PartnerResponse = { ok: true } | { ok: false; error: string };

async function submitPartnerRequest(payload: PartnerInput): Promise<PartnerResponse> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await res.json()) as { error?: string };

  if (!res.ok) {
    return { ok: false, error: data.error ?? "Something went wrong. Please try again." };
  }

  return { ok: true };
}

export function usePartnerMutation() {
  return useMutation({ mutationFn: submitPartnerRequest });
}

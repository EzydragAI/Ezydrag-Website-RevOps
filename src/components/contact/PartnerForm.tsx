"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { partnerSchema, type PartnerInput } from "@/lib/validations/contact";
import { usePartnerMutation } from "@/hooks/useContactMutation";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const fieldClass =
  "mt-3 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[17px] leading-6 text-ink outline-none transition-[border-color] placeholder:text-muted/70 focus:border-ink";

export function PartnerForm() {
  const mutation = usePartnerMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PartnerInput>({
    resolver: zodResolver(partnerSchema),
    defaultValues: { name: "", email: "", message: "", company: "" },
  });

  async function onSubmit(values: PartnerInput) {
    try {
      const result = await mutation.mutateAsync(values);
      if (result.ok) {
        reset();
      }
    } catch {
      // Network errors surface via mutation.isError
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7" noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
        {...register("company")}
      />

      <label className="block">
        <span className="font-display text-[11px] uppercase tracking-[0.22em] text-muted">
          Name
        </span>
        <input
          className={fieldClass}
          placeholder="Priya Sharma"
          autoComplete="name"
          {...register("name")}
        />
        {errors.name && <p className="mt-2 text-sm text-error">{errors.name.message}</p>}
      </label>

      <label className="block">
        <span className="font-display text-[11px] uppercase tracking-[0.22em] text-muted">
          Email
        </span>
        <input
          type="email"
          className={fieldClass}
          placeholder="you@company.com"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && <p className="mt-2 text-sm text-error">{errors.email.message}</p>}
      </label>

      <label className="block">
        <span className="font-display text-[11px] uppercase tracking-[0.22em] text-muted">
          A short note
        </span>
        <textarea
          rows={3}
          className={cn(fieldClass, "min-h-24 resize-y")}
          placeholder="Who are you connected to, and how would you like to work together?"
          {...register("message")}
        />
        {errors.message && <p className="mt-2 text-sm text-error">{errors.message.message}</p>}
      </label>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={mutation.isPending}
          className="btn-fill inline-flex h-12 items-center justify-center px-8 font-display text-[11px] uppercase tracking-[0.22em] disabled:opacity-50"
        >
          <span>{mutation.isPending ? "Sending…" : "Send partner request"}</span>
        </button>
        <p className="text-xs leading-5 text-muted sm:text-right">
          Lands in our inbox. We reply from {site.email}.
        </p>
      </div>

      {mutation.data?.ok && (
        <p className="text-sm text-teal">
          Received — thank you. We&apos;ll reply from {site.email} within two working days.
        </p>
      )}
      {mutation.data && !mutation.data.ok && (
        <p className="text-sm text-error">{mutation.data.error}</p>
      )}
      {mutation.isError && (
        <p className="text-sm text-error">Network error. Please email us directly.</p>
      )}
    </form>
  );
}

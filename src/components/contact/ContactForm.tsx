"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validations/contact";
import { useContactMutation } from "@/hooks/useContactMutation";
import { cn } from "@/lib/cn";

type Props = {
  compact?: boolean;
  onSuccess?: () => void;
};

const fieldClass =
  "mt-3 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[17px] leading-6 text-ink outline-none transition-[border-color] placeholder:text-muted/70 focus:border-ink";

export function ContactForm({ compact = false, onSuccess }: Props) {
  const mutation = useContactMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", issue: "", company: "" },
  });

  async function onSubmit(values: ContactInput) {
    try {
      const result = await mutation.mutateAsync(values);
      if (result.ok) {
        reset();
        onSuccess?.();
      }
    } catch {
      // Network errors surface via mutation.error
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8" noValidate>
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
        <input className={fieldClass} placeholder="Priya Sharma" autoComplete="name" {...register("name")} />
        {errors.name && <p className="mt-2 text-sm text-error">{errors.name.message}</p>}
      </label>

      <label className="block">
        <span className="font-display text-[11px] uppercase tracking-[0.22em] text-muted">
          Email
        </span>
        <input
          type="email"
          className={fieldClass}
          placeholder="you@brand.com"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && <p className="mt-2 text-sm text-error">{errors.email.message}</p>}
      </label>

      <label className="block">
        <span className="font-display text-[11px] uppercase tracking-[0.22em] text-muted">
          The loop
        </span>
        <textarea
          rows={compact ? 4 : 5}
          className={cn(fieldClass, "min-h-35 resize-y")}
          placeholder="Campaigns, routing, content, attribution…"
          {...register("issue")}
        />
        {errors.issue && <p className="mt-2 text-sm text-error">{errors.issue.message}</p>}
      </label>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={mutation.isPending}
          className="btn-fill inline-flex h-12 items-center justify-center px-8 font-display text-[11px] uppercase tracking-[0.22em] disabled:opacity-50"
        >
          <span>{mutation.isPending ? "Sending…" : "Send the brief"}</span>
        </button>
        <p className="text-xs leading-5 text-muted sm:text-right">
          We reply from hello@ezydrag.in.
        </p>
      </div>

      {mutation.data?.ok && (
        <p className="text-sm text-teal">Received. We will reply from hello@ezydrag.in.</p>
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

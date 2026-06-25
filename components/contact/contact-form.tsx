"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertTriangle, ArrowRight } from "lucide-react";

import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import {
  serviceNeeds,
  specificInterests,
  budgetRanges,
  timelines,
} from "@/content/contact-options";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/60 focus:border-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-[invalid=true]:border-destructive";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      website: "",
      phone: "",
      serviceNeeds: [],
      specificInterests: [],
      budget: "",
      timeline: "",
      message: "",
      company_website: "",
    },
  });

  const selectedNeeds = watch("serviceNeeds") ?? [];
  const selectedInterests = watch("specificInterests") ?? [];
  const selectedBudget = watch("budget");
  const selectedTimeline = watch("timeline");

  function toggleArrayValue(
    field: "serviceNeeds" | "specificInterests",
    value: string
  ) {
    const current = (getValues(field) as string[]) ?? [];
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setValue(field, next as never, { shouldDirty: true });
  }

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold/30 bg-gold-soft p-8 text-center sm:p-10">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <CheckCircle2 className="h-7 w-7" aria-hidden />
        </span>
        <h2 className="mt-5 text-2xl font-semibold">Thanks — we got it.</h2>
        <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-foreground/80">
          We received your request and will review what you shared. If it looks
          like a fit, we will follow up to schedule your free audit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
      {/* Contact details */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            className={inputClass}
            {...register("name")}
          />
        </Field>
        <Field label="Email" required error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            className={inputClass}
            {...register("email")}
          />
        </Field>
        <Field label="Business name" required error={errors.businessName?.message}>
          <input
            type="text"
            autoComplete="organization"
            className={inputClass}
            {...register("businessName")}
          />
        </Field>
        <Field label="Current website" hint="Optional" error={errors.website?.message}>
          <input
            type="text"
            inputMode="url"
            placeholder="yourbusiness.com"
            autoComplete="url"
            className={inputClass}
            {...register("website")}
          />
        </Field>
        <Field label="Phone" hint="Optional" error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            className={inputClass}
            {...register("phone")}
          />
        </Field>
      </div>

      {/* Service needs */}
      <fieldset>
        <Legend label="What do you want to clean up?" hint="Select any that apply" />
        <div className="mt-3 flex flex-wrap gap-2.5">
          {serviceNeeds.map((option) => (
            <Chip
              key={option}
              label={option}
              selected={selectedNeeds.includes(option)}
              onClick={() => toggleArrayValue("serviceNeeds", option)}
            />
          ))}
        </div>
      </fieldset>

      {/* Specific interests */}
      <fieldset>
        <Legend
          label="Specific interests"
          hint="Optional — pick anything that's on your mind"
        />
        <div className="mt-3 flex flex-wrap gap-2.5">
          {specificInterests.map((option) => (
            <Chip
              key={option}
              label={option}
              selected={selectedInterests.includes(option)}
              onClick={() => toggleArrayValue("specificInterests", option)}
            />
          ))}
        </div>
      </fieldset>

      {/* Budget */}
      <fieldset>
        <Legend
          label="Budget range"
          hint="Just a rough sense — this is not a filter"
        />
        <div className="mt-3 flex flex-wrap gap-2.5">
          {budgetRanges.map((option) => (
            <Chip
              key={option}
              label={option}
              selected={selectedBudget === option}
              onClick={() =>
                setValue("budget", selectedBudget === option ? "" : option, {
                  shouldDirty: true,
                })
              }
            />
          ))}
        </div>
      </fieldset>

      {/* Timeline */}
      <fieldset>
        <Legend label="Timeline" />
        <div className="mt-3 flex flex-wrap gap-2.5">
          {timelines.map((option) => (
            <Chip
              key={option}
              label={option}
              selected={selectedTimeline === option}
              onClick={() =>
                setValue(
                  "timeline",
                  selectedTimeline === option ? "" : option,
                  { shouldDirty: true }
                )
              }
            />
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <Field
        label="Anything else?"
        hint="Optional"
        error={errors.message?.message}
      >
        <textarea
          rows={5}
          className={cn(inputClass, "resize-y")}
          placeholder="Tell us what is messy, slow, outdated, or unclear right now."
          {...register("message")}
        />
      </Field>

      {/* Honeypot — hidden from users, catches bots. */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_website")}
        />
      </div>

      {status === "error" ? (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <p>
            Something went wrong sending your request. Please try again, or email
            us directly at{" "}
            <a href="mailto:hello@harborlinesystems.com" className="font-medium underline">
              hello@harborlinesystems.com
            </a>
            .
          </p>
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={buttonVariants({ variant: "primary", size: "lg" })}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Request Free Audit
              <ArrowRight className="h-4 w-4" aria-hidden />
            </>
          )}
        </button>
        <p className="text-xs text-muted-foreground">
          No pressure. The first audit is free — no obligation.
        </p>
      </div>
    </form>
  );
}

/* --------------------------------- helpers -------------------------------- */

function Field({
  label,
  hint,
  required,
  error,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  const id = React.useId();
  const errorId = `${id}-error`;
  return (
    <label className="flex flex-col gap-1.5" htmlFor={id}>
      <span className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-medium text-foreground">
          {label}
          {required ? (
            <>
              <span className="ml-0.5 text-gold" aria-hidden>
                *
              </span>
              <span className="sr-only"> (required)</span>
            </>
          ) : null}
        </span>
        {hint ? (
          <span className="text-xs text-muted-foreground">{hint}</span>
        ) : null}
      </span>
      {/* Clone child to attach the id + validation aria for accessibility. */}
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement, {
            id,
            required: required || undefined,
            "aria-required": required || undefined,
            "aria-invalid": error ? true : undefined,
            "aria-describedby": error ? errorId : undefined,
          })
        : children}
      {error ? (
        <span
          id={errorId}
          role="alert"
          className="text-xs font-medium text-destructive"
        >
          {error}
        </span>
      ) : null}
    </label>
  );
}

function Legend({ label, hint }: { label: string; hint?: string }) {
  return (
    <legend className="flex flex-wrap items-baseline gap-x-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {hint ? <span className="text-xs text-muted-foreground">{hint}</span> : null}
    </legend>
  );
}

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-150 hover:-translate-y-px active:translate-y-0 active:scale-95 motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
        selected
          ? "border-primary bg-primary text-primary-foreground shadow-soft"
          : "border-border bg-card text-muted-foreground hover:border-gold/40 hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}

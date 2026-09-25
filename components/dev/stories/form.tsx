"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  email: z.string().min(1, "E-posta zorunludur").email("Geçerli bir e-posta girin"),
  company: z.string().min(2, "Şirket adı en az 2 karakter olmalı"),
});

type FormValues = z.infer<typeof schema>;

export default function FormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  function onSubmit(values: FormValues) {
    toast.success(`Gönderildi: ${values.email}`);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="form-email">E-posta</Label>
        <Input id="form-email" aria-invalid={!!errors.email} {...register("email")} />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="form-company">Şirket</Label>
        <Input id="form-company" aria-invalid={!!errors.company} {...register("company")} />
        {errors.company && <p className="text-xs text-destructive">{errors.company.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-fit">
        Gönder
      </Button>
    </form>
  );
}

export const code = `const schema = z.object({
  email: z.string().email(),
  company: z.string().min(2),
});

const { register, handleSubmit, formState } = useForm({
  resolver: zodResolver(schema),
});`;

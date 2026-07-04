"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, MapPin, Sparkles, User, CalendarDays, Phone, X } from "lucide-react";
import { branches } from "@/lib/data/branches";
import { services } from "@/lib/data/services";
import { doctors } from "@/lib/data/doctors";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { useBookingModal } from "./BookingModalContext";
import { serviceIcons } from "@/components/ui/ServiceIcon";

const schema = z.object({
  branch: z.string().min(1, "Выберите филиал"),
  service: z.string().min(1, "Выберите услугу"),
  doctor: z.string().min(1, "Выберите врача"),
  date: z.string().min(1, "Выберите дату"),
  time: z.string().min(1, "Выберите время"),
  name: z.string().min(2, "Введите имя"),
  phone: z
    .string()
    .regex(/^\+?[\d\s()-]{10,18}$/, "Введите корректный номер"),
  consent: z.literal(true, { errorMap: () => ({ message: "Требуется согласие" }) }),
});

type FormValues = z.infer<typeof schema>;

const steps = [
  { id: 1, label: "Филиал", icon: MapPin },
  { id: 2, label: "Услуга", icon: Sparkles },
  { id: 3, label: "Врач", icon: User },
  { id: 4, label: "Время", icon: CalendarDays },
  { id: 5, label: "Контакты", icon: Phone },
];

const timeSlots = ["09:30", "11:00", "12:30", "14:00", "15:30", "17:00", "18:30", "20:00"];

function getNextDays(n: number) {
  const days: { iso: string; label: string; weekday: string }[] = [];
  const today = new Date();
  const wkd = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  for (let i = 0; i < n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      iso: d.toISOString().slice(0, 10),
      label: i === 0 ? "Сегодня" : i === 1 ? "Завтра" : `${d.getDate()} ${["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"][d.getMonth()]}`,
      weekday: wkd[d.getDay()],
    });
  }
  return days;
}

export function BookingModal() {
  const { isOpen, closeBooking, preset } = useBookingModal();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    trigger,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      branch: preset.branchSlug ?? "",
      service: preset.serviceSlug ?? "",
      doctor: preset.doctorSlug ?? "",
      date: "",
      time: "",
      name: "",
      phone: "",
      consent: undefined as unknown as true,
    },
  });

  useEffect(() => {
    if (isOpen) {
      setValue("branch", preset.branchSlug ?? "");
      setValue("service", preset.serviceSlug ?? "");
      setValue("doctor", preset.doctorSlug ?? "");
      setStep(1);
      setSubmitted(false);
    }
  }, [isOpen, preset, setValue]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const watched = watch();
  const days = useMemo(() => getNextDays(7), []);

  const filteredDoctors = useMemo(() => {
    const svc = services.find((s) => s.slug === watched.service);
    if (!svc) return doctors;
    const map: Record<string, string[]> = {
      implantatsiya: ["Имплантация", "Хирургия"],
      "lechenie-zubov": ["Терапия", "Эндодонтия"],
      hirurgiya: ["Хирургия"],
      protezirovanie: ["Протезирование"],
      "gigiena-otbelivanie": ["Гигиена", "Терапия"],
      diagnostika: ["Терапия", "Имплантация"],
    };
    const need = map[svc.slug] ?? [];
    return doctors.filter((d) => d.specialty.some((s) => need.includes(s)));
  }, [watched.service]);

  const canProceed = (s: number) => {
    if (s === 1) return !!watched.branch;
    if (s === 2) return !!watched.service;
    if (s === 3) return !!watched.doctor;
    if (s === 4) return !!watched.date && !!watched.time;
    return true;
  };

  const next = async () => {
    if (step < 5) setStep(step + 1);
  };
  const back = () => setStep((s) => Math.max(1, s - 1));

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const close = () => {
    closeBooking();
    setTimeout(() => {
      reset();
      setStep(1);
      setSubmitted(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      >
        <button
          type="button"
          aria-label="Закрыть"
          onClick={close}
          className="absolute inset-0 bg-brand-deep/60 backdrop-blur-sm cursor-pointer"
        />

        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.97 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0, scale: 0.97 }}
          transition={{ type: "spring", damping: 22, stiffness: 200 }}
          className="relative w-full max-w-2xl glass-strong rounded-t-3xl sm:rounded-3xl shadow-[var(--shadow-glass-xl)] max-h-[92vh] overflow-hidden flex flex-col"
        >
          <div className="flex items-center justify-between border-b border-[rgba(38,128,179,0.08)] px-5 py-4 sm:px-7">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
                Шаг {step} из 5
              </div>
              <div className="font-display text-lg font-bold text-brand-deep">
                {submitted ? "Заявка принята" : steps[step - 1].label}
              </div>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Закрыть"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-text-muted hover:text-brand-deep border border-[rgba(38,128,179,0.12)] cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {!submitted && (
            <div className="flex gap-1.5 px-5 pt-4 sm:px-7">
              {steps.map((s) => (
                <div
                  key={s.id}
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-all duration-500",
                    s.id <= step
                      ? "bg-gradient-to-r from-[#4BA9D9] to-[#2680B3]"
                      : "bg-[rgba(38,128,179,0.12)]"
                  )}
                />
              ))}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 overflow-y-auto px-5 py-6 sm:px-7"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#4BA9D9] to-[#2680B3] text-white shadow-[0_12px_32px_rgba(38,128,179,0.3)]">
                    <Check className="h-10 w-10" strokeWidth={3} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-deep">
                    Спасибо, {watched.name}!
                  </h3>
                  <p className="mt-3 text-text-muted max-w-md mx-auto">
                    Администратор свяжется с вами в течение 15 минут для подтверждения записи на{" "}
                    <span className="font-semibold text-brand-deep">
                      {days.find((d) => d.iso === watched.date)?.label}, {watched.time}
                    </span>
                    .
                  </p>
                  <div className="mt-6 inline-flex flex-col gap-1 rounded-2xl bg-white border border-[rgba(38,128,179,0.12)] p-5 text-left text-sm">
                    <div><span className="text-text-muted">Филиал:</span> <span className="font-semibold text-brand-deep">м. {branches.find((b) => b.slug === watched.branch)?.metro}</span></div>
                    <div><span className="text-text-muted">Услуга:</span> <span className="font-semibold text-brand-deep">{services.find((s) => s.slug === watched.service)?.title}</span></div>
                    <div><span className="text-text-muted">Врач:</span> <span className="font-semibold text-brand-deep">{watched.doctor === "any" ? "Любой свободный" : doctors.find((d) => d.slug === watched.doctor)?.name}</span></div>
                  </div>
                  <Button variant="primary" size="md" className="mt-6" onClick={close} type="button">
                    Закрыть
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {step === 1 && (
                    <Controller
                      control={control}
                      name="branch"
                      render={({ field }) => (
                        <div>
                          <p className="text-sm text-text-muted mb-4">Выберите ближайший филиал.</p>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {branches.map((b) => (
                              <button
                                type="button"
                                key={b.slug}
                                onClick={() => field.onChange(b.slug)}
                                className={cn(
                                  "group relative overflow-hidden rounded-2xl border-2 p-5 text-left transition-all duration-200 cursor-pointer",
                                  field.value === b.slug
                                    ? "border-brand-primary bg-white shadow-[var(--shadow-glass-md)]"
                                    : "border-[rgba(38,128,179,0.12)] bg-white/60 hover:border-brand-primary/50 hover:bg-white"
                                )}
                              >
                                <div className={cn("absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-br opacity-15", b.gradient)} />
                                <div className="relative">
                                  <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-brand-primary" />
                                    <span className="font-display font-bold text-brand-deep">м. {b.metro}</span>
                                  </div>
                                  <div className="mt-2 text-sm text-text-body">{b.address}</div>
                                  <div className="mt-3 text-xs text-text-soft">{b.hours.weekdays}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    />
                  )}

                  {step === 2 && (
                    <Controller
                      control={control}
                      name="service"
                      render={({ field }) => (
                        <div>
                          <p className="text-sm text-text-muted mb-4">Что вас интересует?</p>
                          <div className="grid gap-2.5 sm:grid-cols-2">
                            {services.map((s) => {
                              const Icon = serviceIcons[s.icon];
                              return (
                                <button
                                  type="button"
                                  key={s.slug}
                                  onClick={() => field.onChange(s.slug)}
                                  className={cn(
                                    "flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all cursor-pointer",
                                    field.value === s.slug
                                      ? "border-brand-primary bg-white shadow-[var(--shadow-glass-sm)]"
                                      : "border-[rgba(38,128,179,0.12)] bg-white/60 hover:border-brand-primary/50"
                                  )}
                                >
                                  <div className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-brand-primary", s.gradient)}>
                                    {Icon && <Icon className="h-6 w-6" />}
                                  </div>
                                  <div className="min-w-0">
                                    <div className="font-semibold text-brand-deep text-sm leading-tight">{s.title}</div>
                                    <div className="mt-0.5 text-xs text-text-muted">{s.short}</div>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    />
                  )}

                  {step === 3 && (
                    <Controller
                      control={control}
                      name="doctor"
                      render={({ field }) => (
                        <div>
                          <p className="text-sm text-text-muted mb-4">Выберите врача или оставьте на наше усмотрение.</p>
                          <button
                            type="button"
                            onClick={() => field.onChange("any")}
                            className={cn(
                              "mb-3 flex w-full items-center justify-between rounded-2xl border-2 p-4 text-left cursor-pointer transition-all",
                              field.value === "any"
                                ? "border-brand-primary bg-white shadow-[var(--shadow-glass-sm)]"
                                : "border-[rgba(38,128,179,0.12)] bg-white/60 hover:border-brand-primary/50"
                            )}
                          >
                            <div>
                              <div className="font-semibold text-brand-deep">Любой свободный врач</div>
                              <div className="mt-0.5 text-xs text-text-muted">Подберём врача по вашему графику</div>
                            </div>
                            <Sparkles className="h-5 w-5 text-brand-primary" />
                          </button>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {filteredDoctors.map((d) => (
                              <button
                                type="button"
                                key={d.slug}
                                onClick={() => field.onChange(d.slug)}
                                className={cn(
                                  "flex items-center gap-3 rounded-2xl border-2 p-3 text-left cursor-pointer transition-all",
                                  field.value === d.slug
                                    ? "border-brand-primary bg-white shadow-[var(--shadow-glass-sm)]"
                                    : "border-[rgba(38,128,179,0.12)] bg-white/60 hover:border-brand-primary/50"
                                )}
                              >
                                <div className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white font-display font-bold text-sm", d.accent)}>
                                  {d.initials}
                                </div>
                                <div className="min-w-0">
                                  <div className="font-semibold text-brand-deep text-sm leading-tight truncate">{d.name}</div>
                                  <div className="mt-0.5 text-xs text-text-muted truncate">{d.role}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    />
                  )}

                  {step === 4 && (
                    <div className="space-y-5">
                      <Controller
                        control={control}
                        name="date"
                        render={({ field }) => (
                          <div>
                            <div className="mb-3 text-sm font-semibold text-brand-deep">Выберите день</div>
                            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                              {days.map((d) => (
                                <button
                                  type="button"
                                  key={d.iso}
                                  onClick={() => field.onChange(d.iso)}
                                  className={cn(
                                    "flex shrink-0 flex-col items-center rounded-2xl border-2 px-4 py-3 text-center transition-all cursor-pointer min-w-[78px]",
                                    field.value === d.iso
                                      ? "border-brand-primary bg-white shadow-[var(--shadow-glass-sm)]"
                                      : "border-[rgba(38,128,179,0.12)] bg-white/60 hover:border-brand-primary/50"
                                  )}
                                >
                                  <span className="text-[11px] uppercase tracking-wide text-text-muted">{d.weekday}</span>
                                  <span className="mt-0.5 font-display font-bold text-brand-deep text-sm leading-tight">{d.label}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      />

                      <Controller
                        control={control}
                        name="time"
                        render={({ field }) => (
                          <div>
                            <div className="mb-3 text-sm font-semibold text-brand-deep">Выберите время</div>
                            <div className="grid grid-cols-4 gap-2">
                              {timeSlots.map((t) => (
                                <button
                                  type="button"
                                  key={t}
                                  onClick={() => field.onChange(t)}
                                  className={cn(
                                    "rounded-xl border-2 px-3 py-2.5 text-sm font-semibold cursor-pointer transition-all",
                                    field.value === t
                                      ? "border-brand-primary bg-gradient-to-br from-[#4BA9D9] to-[#2680B3] text-white"
                                      : "border-[rgba(38,128,179,0.12)] bg-white/60 text-brand-deep hover:border-brand-primary/50"
                                  )}
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      />
                    </div>
                  )}

                  {step === 5 && (
                    <div className="space-y-4">
                      <Controller
                        control={control}
                        name="name"
                        render={({ field, fieldState }) => (
                          <div>
                            <label className="text-sm font-semibold text-brand-deep">Как вас зовут?</label>
                            <input
                              {...field}
                              type="text"
                              placeholder="Иван Иванов"
                              className="mt-1.5 w-full rounded-xl border-2 border-[rgba(38,128,179,0.16)] bg-white px-4 py-3 text-base text-brand-deep placeholder:text-text-soft focus:border-brand-primary focus:outline-none transition-colors"
                            />
                            {fieldState.error && <p className="mt-1 text-xs text-rose-500">{fieldState.error.message}</p>}
                          </div>
                        )}
                      />

                      <Controller
                        control={control}
                        name="phone"
                        render={({ field, fieldState }) => (
                          <div>
                            <label className="text-sm font-semibold text-brand-deep">Телефон</label>
                            <input
                              {...field}
                              type="tel"
                              placeholder="+7 (___) ___-__-__"
                              inputMode="tel"
                              className="mt-1.5 w-full rounded-xl border-2 border-[rgba(38,128,179,0.16)] bg-white px-4 py-3 text-base text-brand-deep placeholder:text-text-soft focus:border-brand-primary focus:outline-none transition-colors"
                            />
                            {fieldState.error && <p className="mt-1 text-xs text-rose-500">{fieldState.error.message}</p>}
                          </div>
                        )}
                      />

                      <Controller
                        control={control}
                        name="consent"
                        render={({ field, fieldState }) => (
                          <div>
                            <label className="flex items-start gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={!!field.value}
                                onChange={(e) => field.onChange(e.target.checked || undefined)}
                                className="mt-0.5 h-5 w-5 rounded-md border-2 border-brand-primary/40 text-brand-primary cursor-pointer"
                              />
                              <span className="text-xs text-text-muted leading-relaxed">
                                Я согласен с{" "}
                                <a href="/politika" className="text-brand-primary underline">
                                  обработкой персональных данных
                                </a>{" "}
                                и получением сообщений о записи в WhatsApp / по SMS.
                              </span>
                            </label>
                            {fieldState.error && <p className="mt-1 text-xs text-rose-500">{fieldState.error.message}</p>}
                          </div>
                        )}
                      />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {!submitted && (
            <div className="flex items-center justify-between gap-3 border-t border-[rgba(38,128,179,0.08)] bg-white/40 px-5 py-4 sm:px-7">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={back}
                disabled={step === 1}
                className={cn(step === 1 && "opacity-0 pointer-events-none")}
              >
                <ArrowLeft className="h-4 w-4" />
                Назад
              </Button>

              {step < 5 ? (
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  onClick={async () => {
                    const fields: (keyof FormValues)[] =
                      step === 1 ? ["branch"]
                      : step === 2 ? ["service"]
                      : step === 3 ? ["doctor"]
                      : ["date", "time"];
                    const ok = await trigger(fields);
                    if (ok) next();
                  }}
                  disabled={!canProceed(step)}
                >
                  Далее
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="accent"
                  size="md"
                  disabled={submitting}
                  onClick={handleSubmit(onSubmit)}
                >
                  {submitting ? "Отправляем…" : "Записаться"}
                  <Check className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}

          {errors.root && <p className="px-7 pb-4 text-sm text-rose-500">{errors.root.message}</p>}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

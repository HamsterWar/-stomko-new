import Image from "next/image";

type LogoProps = { className?: string; variant?: "default" | "onDark" | "compact" };

export function Logo({ className, variant = "default" }: LogoProps) {
  if (variant === "compact") {
    return (
      <Image
        src="/brand/logo-icon.png"
        alt="Стоматология «Оптимальный выбор»"
        width={676}
        height={380}
        priority
        className={`h-10 w-auto ${className ?? ""}`}
      />
    );
  }

  if (variant === "onDark") {
    return (
      <div className={`inline-flex items-center gap-3 ${className ?? ""}`}>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-1.5">
          <Image
            src="/brand/logo-icon.png"
            alt="Стоматология «Оптимальный выбор»"
            width={676}
            height={380}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex flex-col leading-[1.05]">
          <span className="font-display text-base font-extrabold tracking-tight text-white">
            ОПТИМАЛЬНЫЙ
          </span>
          <span className="font-display text-base font-extrabold tracking-tight text-white">
            ВЫБОР
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <Image
        src="/brand/logo-icon.png"
        alt="Стоматология «Оптимальный выбор»"
        width={676}
        height={380}
        priority
        sizes="56px"
        className="h-11 w-auto sm:h-12"
      />
      <div className="flex flex-col leading-[1.05]">
        <span className="font-display text-[15px] font-extrabold tracking-tight text-brand-primary sm:text-base">
          ОПТИМАЛЬНЫЙ
        </span>
        <span className="font-display text-[15px] font-extrabold tracking-tight text-brand-primary sm:text-base">
          ВЫБОР
        </span>
      </div>
    </div>
  );
}

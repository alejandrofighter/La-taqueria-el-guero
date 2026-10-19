import { useState, type FC, type FormEvent } from "react";
import { KeyIcon, LockIcon } from "./icons";

export type AccessKind = "key" | "password";

export interface AccessControlProps {
  kind: AccessKind;
  placeholder: string;
  /** Devuelve true si la credencial es válida. */
  onSubmit: (value: string) => boolean;
  onGranted?: () => void;
}

type Status = "idle" | "checking" | "granted" | "denied";

const statusRing: Record<Status, string> = {
  idle: "border-borde",
  checking: "border-borde opacity-70",
  granted: "border-emerald-500",
  denied: "border-chile-oscuro animate-shake",
};

const AccessControl: FC<AccessControlProps> = ({
  kind,
  placeholder,
  onSubmit,
  onGranted,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const Icon = kind === "key" ? KeyIcon : LockIcon;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    setStatus("checking");
    // Simula una verificación breve, como lo haría una llamada a un backend real.
    window.setTimeout(() => {
      const ok = onSubmit(value);
      setStatus(ok ? "granted" : "denied");
      if (ok) {
        onGranted?.();
      } else {
        window.setTimeout(() => setStatus("idle"), 900);
      }
    }, 350);
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={placeholder}
        className="inline-flex h-[38px] items-center gap-2 rounded-full border border-borde bg-masa px-4 font-sans text-[13px] text-tinta-suave transition hover:border-chile hover:text-tinta active:scale-[0.98]"
      >
        <Icon size={15} />
        <span>{placeholder}</span>
      </button>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`inline-flex h-[38px] items-center gap-2 rounded-full border bg-white pl-3.5 pr-4 transition ${statusRing[status]}`}
    >
      <Icon size={15} className="text-tinta-suave" />
      <input
        autoFocus
        type={kind === "password" ? "password" : "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        disabled={status === "checking" || status === "granted"}
        className="w-[130px] border-none bg-transparent font-sans text-[13px] text-tinta outline-none placeholder:text-tinta-suave"
      />
      {status === "granted" && (
        <span className="text-sm font-bold text-emerald-600">✓</span>
      )}
      {status === "denied" && (
        <span className="text-sm font-bold text-chile-oscuro">✕</span>
      )}
    </form>
  );
};

export default AccessControl;

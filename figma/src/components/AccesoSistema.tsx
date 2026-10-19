import type { FC } from "react";
import { iconMap, type IconKind } from "./icons";
import AccessControl, { type AccessKind } from "./AccessControl";

export type Accent = "chile" | "oro" | "dia" | "noche";

export interface AccessSection {
  id: string;
  icon: IconKind;
  title: string;
  eyebrow?: string;
  caption?: string;
  action: {
    kind: AccessKind;
    placeholder: string;
  };
  accent: Accent;
}

export interface AccesoSistemaProps {
  businessName: string;
  sections: AccessSection[];
  /** Valida la credencial de una sección. Por defecto siempre concede acceso. */
  validate?: (sectionId: string, value: string) => boolean;
  onGranted?: (sectionId: string) => void;
}

const accentBg: Record<Accent, string> = {
  chile: "bg-[radial-gradient(circle_at_0%_50%,_#c1440e,_transparent_60%)]",
  oro: "bg-[radial-gradient(circle_at_0%_50%,_#b8873a,_transparent_60%)]",
  dia: "bg-[radial-gradient(circle_at_0%_50%,_#2f7fb8,_transparent_60%)]",
  noche: "bg-[radial-gradient(circle_at_0%_50%,_#313a63,_transparent_60%)]",
};

const AccesoSistema: FC<AccesoSistemaProps> = ({
  businessName,
  sections,
  validate,
  onGranted,
}) => {
  return (
    <div className="min-h-full flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-3xl rounded-2xl border border-borde bg-tarjeta shadow-[0_1px_2px_rgba(43,27,18,0.06),0_24px_48px_-24px_rgba(43,27,18,0.25)] overflow-hidden">
        <header className="border-b border-borde bg-gradient-to-b from-white to-tarjeta px-9 py-7 text-center">
          <h1 className="m-0 font-display text-3xl font-bold tracking-tight text-tinta">
            Acceso al Sistema
          </h1>
          <p className="m-0 mt-1 font-mono text-xs uppercase tracking-[0.14em] text-tinta-suave">
            {businessName}
          </p>
        </header>

        <ul className="m-0 list-none p-0">
          {sections.map((section) => {
            const Icon = iconMap[section.icon];
            return (
              <li
                key={section.id}
                className="relative grid grid-cols-[56px_1fr_auto] items-center gap-5 border-b border-borde px-8 py-6 last:border-b-0"
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-[0.06] ${accentBg[section.accent]}`}
                />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-borde bg-masa">
                  <Icon size={40} />
                </div>

                <div className="relative flex min-w-0 flex-col gap-0.5">
                  {section.eyebrow && (
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-chile">
                      {section.eyebrow}
                    </span>
                  )}
                  <h2 className="m-0 font-display text-xl font-semibold text-tinta">
                    {section.title}
                  </h2>
                  {section.caption && (
                    <span className="text-sm text-tinta-suave">{section.caption}</span>
                  )}
                </div>

                <div className="relative col-span-2 justify-self-stretch sm:col-span-1 sm:justify-self-end">
                  <AccessControl
                    kind={section.action.kind}
                    placeholder={section.action.placeholder}
                    onSubmit={(value) =>
                      validate ? validate(section.id, value) : value.length > 0
                    }
                    onGranted={() => onGranted?.(section.id)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AccesoSistema;

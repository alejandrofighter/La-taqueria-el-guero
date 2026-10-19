import type { FC } from "react";
import { dashboardIconMap, GearIcon, MoneyBagIcon, type DashboardIconKind } from "./dashboardIcons";

export interface DashboardItem {
  id: string;
  icon: DashboardIconKind;
  label: string;
}

export interface DashboardProps {
  businessName: string;
  onAction?: (id: string) => void;
  onLogout?: () => void;
}

const topItems: DashboardItem[] = [
  { id: "operaciones", icon: "briefcase", label: "Operaciones" },
  { id: "facturas", icon: "invoice", label: "Facturas" },
  { id: "abrir-turno", icon: "bookOpen", label: "Abrir Turno" },
  { id: "cerrar-turno", icon: "booksStack", label: "Cerrar Turno" },
  { id: "cuentas", icon: "cash", label: "Cuentas" },
];

const sidebarItems: DashboardItem[] = [
  { id: "ventas", icon: "barChart", label: "Ventas" },
  { id: "productos", icon: "taco", label: "Productos" },
  { id: "presentaciones", icon: "easel", label: "Presentaciones" },
  { id: "punto-de-venta", icon: "register", label: "Punto de venta" },
];

const Dashboard: FC<DashboardProps> = ({ businessName, onAction, onLogout }) => {
  const [primero, segundo] = businessName.split(/\s+(?=el\s)/i).length > 1
    ? businessName.split(/\s+(?=el\s)/i)
    : [businessName, ""];

  return (
    <div className="min-h-full flex items-center justify-center bg-gradient-to-b from-teal-50 to-teal-100 px-4 py-8">
      <div className="w-full max-w-5xl overflow-hidden rounded-xl border border-teal-900/20 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08),0_30px_60px_-30px_rgba(0,0,0,0.35)]">
        {/* Barra de título de la ventana */}
        <div className="flex items-center justify-between bg-gradient-to-b from-teal-100 to-teal-200 px-4 py-1.5 text-center">
          <span className="w-16" />
          <span className="flex-1 font-mono text-[13px] tracking-wide text-teal-950/70">
            Bienvenido al panel de control
          </span>
          <div className="flex items-center gap-2 text-teal-900/60">
            <span className="text-xs">—</span>
            <span className="text-xs">▢</span>
            {onLogout && (
              <button
                onClick={onLogout}
                aria-label="Cerrar sesión"
                className="text-sm hover:text-chile"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Barra superior de navegación */}
        <nav className="grid grid-cols-5 border-b border-teal-900/15 bg-gradient-to-b from-teal-200 to-teal-300/70">
          {topItems.map((item) => {
            const Icon = dashboardIconMap[item.icon];
            return (
              <button
                key={item.id}
                onClick={() => onAction?.(item.id)}
                className="flex items-center gap-3 border-r border-teal-900/10 px-4 py-6 text-left transition last:border-r-0 hover:bg-white/40"
              >
                <Icon size={38} />
                <span className="font-serif text-[15px] italic text-teal-950">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="grid grid-cols-[210px_1fr]">
          {/* Barra lateral de sesión */}
          <aside className="border-r border-teal-900/15">
            <div className="bg-teal-600/80 py-2 text-center font-mono text-xs font-semibold tracking-[0.15em] text-white">
              SESION
            </div>
            <ul className="m-0 list-none p-0">
              {sidebarItems.map((item) => {
                const Icon = dashboardIconMap[item.icon];
                return (
                  <li key={item.id} className="border-b border-teal-900/10 bg-teal-50/60 last:border-b-0">
                    <button
                      onClick={() => onAction?.(item.id)}
                      className="flex w-full items-center gap-3 px-4 py-6 text-left transition hover:bg-teal-100"
                    >
                      <Icon size={34} />
                      <span className="font-serif text-sm italic text-teal-950">
                        {item.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Contenido principal */}
          <main className="relative flex min-h-[420px] flex-col justify-between bg-gradient-to-br from-teal-50 to-white px-10 py-10">
            <div>
              <h1 className="m-0 font-display text-6xl font-extrabold italic text-teal-950">
                {primero}
              </h1>
              {segundo && (
                <h1 className="m-0 mt-6 font-display text-6xl font-extrabold italic text-teal-950">
                  {segundo}
                </h1>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => onAction?.("ajustes")}
                className="flex w-28 flex-col items-center gap-2 rounded-lg border border-teal-900/15 bg-white/70 py-4 transition hover:bg-white"
              >
                <GearIcon size={40} />
                <span className="font-serif text-sm italic text-teal-950">Ajustes</span>
              </button>
              <button
                onClick={() => onAction?.("gastos")}
                className="flex w-28 flex-col items-center gap-2 rounded-lg border border-teal-900/15 bg-white/70 py-4 transition hover:bg-white"
              >
                <MoneyBagIcon size={40} />
                <span className="font-serif text-sm italic text-teal-950">Gastos</span>
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

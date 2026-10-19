import type { FC } from "react";
import { menu } from "../data/menu";

export interface ProductosProps {
  businessName: string;
  onBack?: () => void;
}

const formatoMXN = (valor: number) =>
  valor.toLocaleString("es-MX", { style: "currency", currency: "MXN" });

const Productos: FC<ProductosProps> = ({ businessName, onBack }) => {
  return (
    <div className="min-h-full bg-gradient-to-b from-teal-50 to-teal-100 px-4 py-8">
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-teal-900/20 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08),0_30px_60px_-30px_rgba(0,0,0,0.35)]">
        {/* Barra de título */}
        <div className="flex items-center justify-between bg-gradient-to-b from-teal-100 to-teal-200 px-4 py-1.5">
          <button
            onClick={onBack}
            className="font-mono text-xs text-teal-950/60 hover:text-chile"
          >
            ← Panel
          </button>
          <span className="font-mono text-[13px] tracking-wide text-teal-950/70">
            Productos — {businessName}
          </span>
          <span className="w-16" />
        </div>

        <div className="bg-gradient-to-b from-teal-500 to-teal-600 px-6 py-5">
          <h1 className="m-0 font-display text-2xl italic text-white">Menú</h1>
          <p className="m-0 text-sm text-white/80">
            {menu.length} platillos disponibles
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 bg-gradient-to-b from-teal-50/60 to-white p-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((producto) => (
            <div
              key={producto.id}
              className="flex flex-col overflow-hidden rounded-xl border border-teal-900/15 bg-white shadow-sm transition hover:shadow-md"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="h-36 w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-1 p-4">
                <h2 className="m-0 font-display text-lg italic text-teal-950">
                  {producto.nombre}
                </h2>
                <p className="m-0 flex-1 text-sm text-teal-900/60">
                  {producto.descripcion}
                </p>
                <span className="mt-2 self-start rounded-full bg-teal-600/10 px-3 py-1 text-sm font-semibold text-teal-800">
                  {formatoMXN(producto.precio)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;

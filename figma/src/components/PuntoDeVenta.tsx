import { useMemo, useState, type FC } from "react";
import { catalogo, categoriaLabel, type Categoria, type Producto } from "../data/catalogo";

export interface LineaPedido {
  productoId: string;
  nombre: string;
  precio: number;
  cantidad: number;
  descripcion: string;
}

export interface PuntoDeVentaProps {
  businessName: string;
  onBack?: () => void;
}

const categorias: Categoria[] = ["alimentos", "bebidas"];

const formatoMXN = (valor: number) =>
  valor.toLocaleString("es-MX", { style: "currency", currency: "MXN" });

const PuntoDeVenta: FC<PuntoDeVentaProps> = ({ businessName, onBack }) => {
  const [mesa, setMesa] = useState("1");
  const [personas, setPersonas] = useState("1");
  const [categoriaAbierta, setCategoriaAbierta] = useState<Categoria | null>(null);
  const [pedido, setPedido] = useState<LineaPedido[]>([]);
  const [descuentoPct, setDescuentoPct] = useState(0);
  const [mostrarDescuento, setMostrarDescuento] = useState(false);
  const [mostrarNota, setMostrarNota] = useState(false);
  const [nota, setNota] = useState("");
  const [pagado, setPagado] = useState(false);

  const agregarProducto = (p: Producto) => {
    setPagado(false);
    setPedido((prev) => {
      const existente = prev.find((l) => l.productoId === p.id);
      if (existente) {
        return prev.map((l) =>
          l.productoId === p.id ? { ...l, cantidad: l.cantidad + 1 } : l
        );
      }
      return [
        ...prev,
        { productoId: p.id, nombre: p.nombre, precio: p.precio, cantidad: 1, descripcion: "" },
      ];
    });
  };

  const cambiarCantidad = (productoId: string, delta: number) => {
    setPedido((prev) =>
      prev
        .map((l) =>
          l.productoId === productoId ? { ...l, cantidad: l.cantidad + delta } : l
        )
        .filter((l) => l.cantidad > 0)
    );
  };

  const cambiarDescripcion = (productoId: string, descripcion: string) => {
    setPedido((prev) =>
      prev.map((l) => (l.productoId === productoId ? { ...l, descripcion } : l))
    );
  };

  const subtotal = useMemo(
    () => pedido.reduce((sum, l) => sum + l.precio * l.cantidad, 0),
    [pedido]
  );
  const total = subtotal * (1 - descuentoPct / 100);

  const handlePagar = () => {
    if (pedido.length === 0) return;
    setPagado(true);
    // Aquí conectarías con tu backend/API de cobro real.
    console.log("Cobro registrado", { mesa, personas, pedido, descuentoPct, total });
  };

  const handleImprimir = () => {
    window.print();
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-teal-50 to-teal-100 px-4 py-8">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-xl border border-teal-900/20 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08),0_30px_60px_-30px_rgba(0,0,0,0.35)]">
        {/* Barra de título */}
        <div className="flex items-center justify-between bg-gradient-to-b from-teal-100 to-teal-200 px-4 py-1.5">
          <button
            onClick={onBack}
            className="font-mono text-xs text-teal-950/60 hover:text-chile"
          >
            ← Panel
          </button>
          <span className="font-mono text-[13px] tracking-wide text-teal-950/70">
            Punto de venta — {businessName}
          </span>
          <span className="w-16" />
        </div>

        {/* Barra superior: mesa / categorías / personas */}
        <div className="relative grid grid-cols-5 border-b border-teal-900/15 bg-gradient-to-b from-teal-500 to-teal-600 text-white">
          <div className="flex flex-col justify-center gap-1 border-r border-white/15 px-4 py-4">
            <span className="font-display text-sm italic">Numero de Mesa</span>
            <input
              type="number"
              min={1}
              value={mesa}
              onChange={(e) => setMesa(e.target.value)}
              className="w-16 rounded border border-white/30 bg-white/15 px-2 py-1 text-sm text-white outline-none placeholder:text-white/60 focus:bg-white/25"
            />
          </div>

          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setCategoriaAbierta((prev) => (prev === cat ? null : cat))
              }
              className={`flex items-center justify-center border-r border-white/15 px-4 py-4 font-display text-lg italic transition ${
                categoriaAbierta === cat ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              {categoriaLabel[cat]}
            </button>
          ))}

          <div className="flex flex-col justify-center gap-1 px-4 py-4 text-right">
            <span className="font-display text-sm italic">Numero de Personas</span>
            <input
              type="number"
              min={1}
              value={personas}
              onChange={(e) => setPersonas(e.target.value)}
              className="ml-auto w-16 rounded border border-white/30 bg-white/15 px-2 py-1 text-right text-sm text-white outline-none placeholder:text-white/60 focus:bg-white/25"
            />
          </div>

          {/* Panel desplegable de productos de la categoría activa */}
          {categoriaAbierta && (
            <div className="absolute left-0 right-0 top-full z-10 flex flex-wrap gap-2 border-b border-teal-900/15 bg-teal-50 p-4 shadow-lg">
              {catalogo
                .filter((p) => p.categoria === categoriaAbierta)
                .map((p) => (
                  <button
                    key={p.id}
                    onClick={() => agregarProducto(p)}
                    className="rounded-lg border border-teal-900/15 bg-white px-3 py-2 text-left text-sm text-teal-950 shadow-sm transition hover:border-teal-500 hover:shadow"
                  >
                    <div className="font-medium">{p.nombre}</div>
                    <div className="text-xs text-teal-700">{formatoMXN(p.precio)}</div>
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* Encabezado de la tabla de pedido */}
        <div className="grid grid-cols-[110px_1fr_1fr_160px] border-b border-teal-900/15 bg-teal-100/70">
          <div className="px-4 py-4 font-display text-lg italic text-teal-950">Cantidad</div>
          <div className="px-4 py-4 text-center font-display text-lg italic text-teal-950">
            Pedido
          </div>
          <div className="px-4 py-4 text-center font-display text-lg italic text-teal-950">
            Descripcion
          </div>
          <div className="px-4 py-4 text-center font-display text-lg italic text-teal-950">
            Cuentas Activas
          </div>
        </div>

        {/* Cuerpo del pedido */}
        <div className="min-h-[340px] bg-gradient-to-b from-teal-50/60 to-white">
          {pedido.length === 0 ? (
            <div className="flex h-[340px] items-center justify-center px-6 text-center font-sans text-sm text-teal-900/50">
              Selecciona Paquetes, Alimentos o Bebidas arriba para agregar
              productos al pedido.
            </div>
          ) : (
            <ul className="m-0 list-none p-0">
              {pedido.map((linea) => (
                <li
                  key={linea.productoId}
                  className="grid grid-cols-[110px_1fr_1fr_160px] items-center border-b border-teal-900/10 px-1 py-3"
                >
                  <div className="flex items-center gap-2 px-3">
                    <button
                      onClick={() => cambiarCantidad(linea.productoId, -1)}
                      className="h-7 w-7 rounded-full border border-teal-900/20 text-teal-950 hover:bg-teal-100"
                      aria-label={`Quitar ${linea.nombre}`}
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-sm font-semibold text-teal-950">
                      {linea.cantidad}
                    </span>
                    <button
                      onClick={() => cambiarCantidad(linea.productoId, 1)}
                      className="h-7 w-7 rounded-full border border-teal-900/20 text-teal-950 hover:bg-teal-100"
                      aria-label={`Agregar ${linea.nombre}`}
                    >
                      +
                    </button>
                  </div>

                  <div className="px-3">
                    <div className="text-sm font-medium text-teal-950">{linea.nombre}</div>
                    <div className="text-xs text-teal-700">
                      {formatoMXN(linea.precio)} c/u · {formatoMXN(linea.precio * linea.cantidad)}
                    </div>
                  </div>

                  <div className="px-3">
                    <input
                      type="text"
                      value={linea.descripcion}
                      onChange={(e) => cambiarDescripcion(linea.productoId, e.target.value)}
                      placeholder="Sin cebolla, extra salsa..."
                      className="w-full rounded border border-teal-900/15 bg-white px-2 py-1 text-sm text-teal-950 outline-none focus:border-teal-500"
                    />
                  </div>

                  <div className="px-3 text-center">
                    <span className="inline-block rounded-full bg-teal-600/10 px-3 py-1 text-xs font-medium text-teal-800">
                      Mesa {mesa || "—"}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Barra de acciones */}
        <div className="grid grid-cols-5 gap-3 border-t border-teal-900/15 bg-teal-50 p-4">
          <div className="relative">
            <button
              onClick={() => setMostrarDescuento((v) => !v)}
              className="w-full rounded-md border border-teal-900/15 bg-white py-3 text-center font-display text-base italic text-teal-950 shadow-sm transition hover:border-teal-500"
            >
              Descuento{descuentoPct > 0 ? ` (${descuentoPct}%)` : ""}
            </button>
            {mostrarDescuento && (
              <div className="absolute bottom-full left-0 z-10 mb-2 w-48 rounded-md border border-teal-900/15 bg-white p-3 shadow-lg">
                <label className="mb-1 block text-xs text-teal-900/70">
                  Porcentaje de descuento
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={descuentoPct}
                  onChange={(e) => setDescuentoPct(Number(e.target.value))}
                  className="w-full rounded border border-teal-900/20 px-2 py-1 text-sm outline-none focus:border-teal-500"
                />
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setMostrarNota((v) => !v)}
              className="w-full rounded-md border border-teal-900/15 bg-white py-3 text-center font-display text-base italic text-teal-950 shadow-sm transition hover:border-teal-500"
            >
              Descripcion
            </button>
            {mostrarNota && (
              <div className="absolute bottom-full left-0 z-10 mb-2 w-64 rounded-md border border-teal-900/15 bg-white p-3 shadow-lg">
                <label className="mb-1 block text-xs text-teal-900/70">
                  Nota general de la cuenta
                </label>
                <textarea
                  value={nota}
                  onChange={(e) => setNota(e.target.value)}
                  rows={3}
                  className="w-full resize-none rounded border border-teal-900/20 px-2 py-1 text-sm outline-none focus:border-teal-500"
                />
              </div>
            )}
          </div>

          <button
            onClick={handleImprimir}
            className="rounded-md border border-teal-900/15 bg-white py-3 text-center font-display text-base italic leading-tight text-teal-950 shadow-sm transition hover:border-teal-500"
          >
            Imprimir
            <br />
            cuenta
          </button>

          <div className="flex flex-col items-center justify-center rounded-md border border-teal-900/15 bg-white py-3 shadow-sm">
            <span className="font-display text-base italic text-teal-950">Total</span>
            <span className="text-sm font-semibold text-teal-800">{formatoMXN(total)}</span>
          </div>

          <button
            onClick={handlePagar}
            disabled={pedido.length === 0}
            className={`rounded-md py-3 text-center font-display text-base italic shadow-sm transition ${
              pagado
                ? "border border-emerald-600 bg-emerald-50 text-emerald-700"
                : "border border-teal-900/15 bg-white text-teal-950 hover:border-teal-500 disabled:cursor-not-allowed disabled:opacity-40"
            }`}
          >
            {pagado ? "Pagado ✓" : "Pagar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PuntoDeVenta;

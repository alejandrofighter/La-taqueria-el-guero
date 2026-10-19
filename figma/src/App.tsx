import { useState, type FC } from "react";
import AccesoSistema, { type AccessSection } from "./components/AccesoSistema";
import Dashboard from "./components/Dashboard";
import PuntoDeVenta from "./components/PuntoDeVenta";
import Productos from "./components/Productos";

// Credenciales de demostración. En producción esto debe validarse
// contra un backend, nunca en el cliente.
const CREDENCIALES: Record<string, string> = {
 negocio: "jaja",
  admin: "guero2026",
  matutino: "mañana",
  vespertino: "tarde",
};

const secciones: AccessSection[] = [
  {
    id: "negocio",
    icon: "house",
    title: "Taqueria el Guero",
    eyebrow: "Administracion y ventas",
    caption: "Turnos / Acceso",
    accent: "chile",
    action: { kind: "key", placeholder: "Llave de acceso" },
  },
  {
    id: "admin",
    icon: "crown",
    title: "Acceso del Administrador",
    accent: "oro",
    action: { kind: "key", placeholder: "Llave de acceso" },
  },
  {
    id: "matutino",
    icon: "sun",
    title: "Turno Matutino",
    accent: "dia",
    action: { kind: "password", placeholder: "Contraseña" },
  },
  {
    id: "vespertino",
    icon: "moon",
    title: "Turno Vespertino",
    accent: "noche",
    action: { kind: "password", placeholder: "Contraseña" },
  },
];

type View = "acceso" | "panel" | "punto-de-venta" | "productos";

const App: FC = () => {
  const [view, setView] = useState<View>("acceso");

  const validate = (sectionId: string, value: string): boolean => {
    const expected = CREDENCIALES[sectionId];
    if (!expected) return value.length > 0; // fila "negocio" solo abre
    return value === expected;
  };

  const handleGranted = (sectionId: string) => {
    console.log(`Acceso concedido: ${sectionId}`);
    // Cualquier fila desbloqueada te lleva al panel de control.
    setView("panel");
  };

  const handleAction = (id: string) => {
    console.log(`Acción del panel: ${id}`);
    if (id === "punto-de-venta") {
      setView("punto-de-venta");
      return;
    }
    if (id === "productos") {
      setView("productos");
      return;
    }
    // Aquí conectas el resto de botones (Operaciones, Ventas, etc.)
    // a su propia pantalla cuando las tengas listas.
  };

  if (view === "punto-de-venta") {
    return (
      <PuntoDeVenta businessName="Taqueria el Guero" onBack={() => setView("panel")} />
    );
  }

  if (view === "productos") {
    return (
      <Productos businessName="Taqueria el Guero" onBack={() => setView("panel")} />
    );
  }

  if (view === "panel") {
    return (
      <Dashboard
        businessName="Taqueria el Guero"
        onAction={handleAction}
        onLogout={() => setView("acceso")}
      />
    );
  }

  return (
    <AccesoSistema
      businessName="Taqueria el Guero"
      sections={secciones}
      validate={validate}
      onGranted={handleGranted}
    />
  );
};

export default App;

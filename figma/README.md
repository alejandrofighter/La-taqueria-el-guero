# Acceso al Sistema — Taquería el Guero

Réplica en React + TypeScript de la pantalla de Figma "Acceso al Sistema"
(Taquería el Guero, Acceso del Administrador, Turno Matutino, Turno Vespertino).

## Requisitos

- Node.js 18 o superior (incluye npm). Descárgalo de https://nodejs.org si no lo tienes.
- Git Bash (Windows) o cualquier terminal.

## Cómo correrlo (Git Bash)

Descomprime el proyecto y desde Git Bash entra a la carpeta:

```bash
cd acceso-sistema
npm install
npm run dev
```

Verás algo como:

```
  VITE vX.X.X  ready in XXX ms
  ➜  Local:   http://localhost:5173/
```

Abre esa URL en tu navegador.

## Flujo de pantallas

1. **Acceso al Sistema** — la pantalla de login (Taquería el Guero, Acceso del
   Administrador, Turno Matutino, Turno Vespertino).
2. **Panel de Control** — al validar cualquier llave/contraseña, `App.tsx`
   cambia automáticamente a esta pantalla: barra superior (Operaciones,
   Facturas, Abrir Turno, Cerrar Turno, Cuentas), barra lateral "SESION"
   (Ventas, Productos, Presentaciones, Punto de venta), título "Taqueria el
   Guero" y los botones de Ajustes / Gastos abajo a la derecha.
3. **Punto de Venta** — se abre al pulsar "Punto de venta" en la barra
   lateral del panel. Incluye:
   - Mesa y número de personas (editables).
   - Pestañas **Paquetes / Alimentos / Bebidas** que despliegan un catálogo
     de productos de ejemplo (`src/data/catalogo.ts`); al hacer clic en uno
     se agrega al pedido.
   - Tabla de pedido con cantidad (+/−), nombre y precio, descripción por
     línea (para notas como "sin cebolla"), y la mesa asociada.
   - **Descuento** (define un % que se aplica al total), **Descripcion**
     (nota general de la cuenta), **Imprimir cuenta** (abre el diálogo de
     impresión del navegador), **Total** (calculado en tiempo real) y
     **Pagar** (marca la cuenta como pagada).
4. **Productos** — se abre al pulsar "Productos" en la barra lateral del
   panel. Muestra el menú (`src/data/menu.ts`) en tarjetas con imagen,
   nombre, descripción y precio: Quesabirrias, Tacos de Birria, Tacos de
   Carnitas, Caldo de Birria, Mondongo y Empanadas.

El botón **✕** en la barra de título del panel regresa a la pantalla de
acceso (`onLogout`), y **← Panel** en Punto de Venta regresa al panel de
control.

## Estructura

```
acceso-sistema/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js     # paleta de colores y tipografías (Tailwind)
├── postcss.config.js
└── src/
    ├── main.tsx              # punto de entrada
    ├── App.tsx                # navegación entre pantallas + datos/contraseñas
    ├── index.css              # directivas @tailwind + fondo punteado
    ├── data/
    │   ├── catalogo.ts        # productos del punto de venta (Paquetes/Alimentos/Bebidas)
    │   └── menu.ts             # menú mostrado en la pantalla "Productos" (con imágenes)
    └── components/
        ├── AccesoSistema.tsx  # pantalla 1: tarjeta de acceso
        ├── AccessControl.tsx  # campo de "llave de acceso" / "contraseña"
        ├── icons.tsx           # iconos de la pantalla de acceso
        ├── Dashboard.tsx       # pantalla 2: panel de control
        ├── dashboardIcons.tsx  # iconos del panel de control
        ├── PuntoDeVenta.tsx    # pantalla 3: punto de venta
        └── Productos.tsx       # pantalla 4: menú de productos
```

Las imágenes del menú están en `src/assets/images/` como SVG (ilustraciones
de ejemplo). Puedes reemplazarlas por fotos reales (.png o .jpg) sin cambiar
el código — solo ajusta la extensión en los `import` de `menu.ts`.

Este proyecto usa **Tailwind CSS**: todo el estilo vive como clases
utilitarias directamente en el JSX/TSX, sin archivos `.css` por componente.

## Personalizar

- **Textos, orden de filas y contraseñas de prueba**: edita `src/App.tsx`
  (arreglo `secciones` y objeto `CREDENCIALES`).
- **Botones del panel de control**: arreglos `topItems` y `sidebarItems` en
  `src/components/Dashboard.tsx`.
- **Productos del punto de venta**: `src/data/catalogo.ts` — agrega, quita o
  cambia precios de Paquetes, Alimentos y Bebidas.
- **Menú de la pantalla Productos**: `src/data/menu.ts` — cada platillo tiene
  `id`, `imagen`, `nombre`, `descripcion` y `precio`. Para usar fotos reales,
  agrega el archivo en `src/assets/images/` e impórtalo igual que los demás.
- **Colores y tipografías**: `tailwind.config.js` → `theme.extend.colors`
  (`chile`, `oro`, `dia`, `noche`, `masa`, `tinta`, etc.) y `theme.extend.fontFamily`.
  Se usan como clases, por ejemplo `bg-chile`, `text-tinta-suave`, `font-display`.
- **Qué pasa al pulsar un botón del panel**: función `handleAction` en
  `src/App.tsx` — ahí conectas cada botón (Ventas, Productos, Ajustes,
  Gastos...) a su propia pantalla cuando las tengas listas.
- **Qué pasa al concederse el acceso**: función `handleGranted` en
  `src/App.tsx` (por ahora navega al panel de control).
- **Qué pasa al pagar**: función `handlePagar` en `PuntoDeVenta.tsx` — ahí
  conectarías tu backend/API de cobro real (por ahora solo marca la cuenta
  como pagada localmente).

Las contraseñas de demostración están en texto plano solo para pruebas locales;
en un sistema real la validación debe hacerse en un backend, no en el navegador.

## Construir para producción

```bash
npm run build
npm run preview
```

Esto genera una carpeta `dist/` lista para subir a cualquier hosting estático.

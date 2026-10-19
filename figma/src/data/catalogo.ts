export type Categoria =  "alimentos" | "bebidas";

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  categoria: Categoria;
}

export const catalogo: Producto[] = [

  // Alimentos
  { id: "a1", nombre: "Taco al Pastor", precio: 25, categoria: "alimentos" },
  { id: "a2", nombre: "Taco de Asada", precio: 25, categoria: "alimentos" },
  { id: "a3", nombre: "Quesadilla", precio: 28, categoria: "alimentos" },
  { id: "a4", nombre: "Gringa", precio: 45, categoria: "alimentos" },
  { id: "a6", nombre: "Quesabirrias", precio: 65, categoria: "alimentos" },
  { id: "a7", nombre: "Taco de Birria", precio: 25, categoria: "alimentos" },
  { id: "a8", nombre: "Taco de Carnitas", precio: 35, categoria: "alimentos" },
  { id: "a9", nombre: "Caldo de Birria (medio litro)", precio: 50, categoria: "alimentos" },
  { id: "a12", nombre: "Caldo de Birria (litro)", precio: 100, categoria: "alimentos" },
  { id: "a10", nombre: "Mondongo (medio litro)", precio: 50, categoria: "alimentos" },
  { id: "a13", nombre: "Mondongo (litro)", precio: 100, categoria: "alimentos" },
  { id: "a11", nombre: "Empanadas", precio: 50, categoria: "alimentos" },

  // Bebidas
  { id: "b1", nombre: "Refresco", precio: 25, categoria: "bebidas" },
  { id: "b2", nombre: "Agua Fresca", precio: 20, categoria: "bebidas" },
  { id: "b3", nombre: "Cerveza", precio: 40, categoria: "bebidas" },
  { id: "b4", nombre: "Agua Embotellada", precio: 15, categoria: "bebidas" },
];

export const categoriaLabel: Record<Categoria, string> = {
  alimentos: "Alimentos",
  bebidas: "Bebidas",
};

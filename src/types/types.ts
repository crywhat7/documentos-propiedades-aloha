export interface PropiedadBase {
  codigo: string;
  nombre: string;
  tipoDePropiedad: "Terreno" | "Casa" | "Edificio" | "Apartamento";
  compartidaODirecta: "Compartida" | "Directa" | "";
  ubicacionGoogleMaps: string;
  direccion: string;
  ciudad: string;
  precioDolares: number;
  precioLempiras: number;
  oferta: "Venta" | "Alquiler";
  observaciones: string;
  imagenes: string[];
}

export interface Casa extends PropiedadBase {
  nPlantas: number;
  nHabitaciones: number;
  nBanios: number;
  nEstacionamientos: number;
  tienePatio: boolean;
  estaAmueblada: boolean;
}

export interface Terreno extends PropiedadBase {
  varas2: number;
  metros2: number;
}

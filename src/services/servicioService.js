import api from "./api";

// Obtener todos los servicios
export const obtenerServicios = async () => {
  try {
    const response = await api.get("/reserva/servicios");
    return response.data;
  } catch (error) {
    console.error("Error al obtener servicios:", error);
    return [];
  }
};

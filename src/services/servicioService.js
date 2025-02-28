import api from "./api";

export const obtenerServicios = async () => {
  try {
    const response = await api.get("/reserva/servicios");
    return response.data;
  } catch (error) {
    console.error("Error al obtener servicios:", error);
    return [];
  }
};

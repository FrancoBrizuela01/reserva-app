import api from "./api";

// Obtener todas las reservas
export const obtenerReservas = async () => {
  try {
    const response = await api.get("/reserva");
    return response.data;
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    return [];
  }
};

// Crear una nueva reserva
export const crearReserva = async (reserva) => {
  try {
    const response = await api.post("/reserva", reserva);
    return response.data;
  } catch (error) {
    console.error("Error al crear reserva:", error.response?.data || error);
    throw error;
  }
};

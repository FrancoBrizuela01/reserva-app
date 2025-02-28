import api from "./api";

export const obtenerReservas = async () => {
  try {
    const response = await api.get("/reserva");
    return response.data;
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    return [];
  }
};

export const crearReserva = async (reserva) => {
  try {
    const response = await api.post("/reserva", reserva);
    return response.data;
  } catch (error) {
    console.error("Error al crear reserva:", error.response?.data || error);
    throw error;
  }
};

import { useState, useEffect } from "react";
import { Paper, Typography, Box } from "@mui/material";
import ReservaForm from "./ReservaForm";
import ReservaList from "./ReservaList";
import { obtenerReservas, crearReserva } from "../services/reservaService";

const ReservaApp = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    cargarReservas();
  }, []);

  const cargarReservas = async () => {
    const data = await obtenerReservas();
    setReservas(data);
  };

  const handleReservar = async (nuevaReserva) => {
    try {
      await crearReserva(nuevaReserva);
      cargarReservas(); // Refrescar la lista de reservas después de crear una nueva
    } catch (error) {
      alert(error.response?.data || "Error al crear la reserva");
    }
  };

  return (
    <Paper elevation={6} sx={{ p: 4, borderRadius: 4, backgroundColor: "background.paper" }}>
      <Typography variant="h4" align="center" gutterBottom color="primary">
        📅 Gestión de Reservas
      </Typography>
      <Box sx={{ mb: 3 }}>
        <ReservaForm onReservar={handleReservar} reservas={reservas} />
      </Box>
      <ReservaList reservas={reservas} />
    </Paper>
  );
};

export default ReservaApp;

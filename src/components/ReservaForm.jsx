import { useState } from "react";
import { TextField, Button, Paper, Stack, Typography } from "@mui/material";
import ServiceSelector from "./ServiceSelector";
import TimeSelector from "./TimeSelector";

const ReservaForm = ({ onReservar, reservas }) => {
  const [cliente, setCliente] = useState("");
  const [servicio, setServicio] = useState("");
  const [horario, setHorario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!cliente || !servicio || !horario) {
      alert("Por favor, completa todos los campos");
      return;
    }
  
    if (reservas.some((res) => res.horario === horario && res.servicio === servicio)) {
      alert("Ese horario ya está reservado para este servicio");
      return;
    }
  
    onReservar({ cliente, servicio, horario });
  
    setCliente("");
    setServicio("");
    setHorario("");
  };
  

  return (
    <Paper elevation={4} sx={{ p: 3, backgroundColor: "background.default", borderRadius: 3 }}>
      <Typography variant="h6" color="secondary" align="center" gutterBottom>
        Completa los datos para reservar
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="Nombre del Cliente"
          fullWidth
          variant="filled"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />
        <ServiceSelector servicio={servicio} setServicio={setServicio} />
        <TimeSelector horario={horario} setHorario={setHorario} reservas={reservas} servicio={servicio} />
        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Confirmar Reserva
        </Button>
      </Stack>
    </Paper>
  );
};

export default ReservaForm;

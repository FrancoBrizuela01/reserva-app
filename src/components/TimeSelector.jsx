import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const horariosDisponibles = ["10:00", "12:00", "14:00", "16:00", "18:00"];

const TimeSelector = ({ horario, setHorario, reservas, servicio }) => {
  const horariosFiltrados = horariosDisponibles.filter(
    (h) => !reservas.some((res) => res.horario === h && res.servicio === servicio)
  );

  return (
    <FormControl fullWidth variant="filled">
      <InputLabel>Selecciona un horario</InputLabel>
      <Select value={horario} onChange={(e) => setHorario(e.target.value)}>
        {horariosFiltrados.map((h, index) => (
          <MenuItem key={index} value={h}>
            {h}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TimeSelector;

import { useEffect, useState } from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { obtenerServicios } from "../services/servicioService";

const ServiceSelector = ({ servicio, setServicio }) => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    cargarServicios();
  }, []);

  const cargarServicios = async () => {
    const data = await obtenerServicios();
    setServicios(data);
  };

  return (
    <FormControl fullWidth variant="filled">
      <InputLabel>Selecciona un servicio</InputLabel>
      <Select value={servicio} onChange={(e) => setServicio(e.target.value)}>
        {servicios.map((s) => (
          <MenuItem key={s.id} value={s.nombre}>
            {s.nombre}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ServiceSelector;

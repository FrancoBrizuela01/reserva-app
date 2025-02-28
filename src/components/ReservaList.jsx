import { Card, CardContent, Typography, Box } from "@mui/material";

const ReservaList = ({ reservas }) => {
  return (
    <Box>
      <Typography variant="h6" color="primary" gutterBottom>
        Reservas Generadas
      </Typography>
      {reservas.length === 0 ? (
        <Typography color="textSecondary">No hay reservas aún.</Typography>
      ) : (
        reservas.map((res, index) => (
          <Card key={index} sx={{ mb: 2, borderRadius: 3, backgroundColor: "background.default" }}>
            <CardContent>
              <Typography variant="subtitle1" color="secondary">
                {res.cliente}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {res.servicio} - {res.horario}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default ReservaList;

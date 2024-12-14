import { Google } from "@mui/icons-material";
import { Grid, TextField, Button, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
export const LoginPage = () => {
  return (
    <AuthLayout title="LOGIN" >
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                LOGIN
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 2 }}>GOOGLE</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="end"
            sx={{ TextDecoder: "none" }}
          >
            <Link
              component={RouterLink}
              to="/auth/register"
              sx={{
                mt: 2,
                textDecoration: "none",
              }}
            >
              Create account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

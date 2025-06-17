import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function NavigationBar() {
    const location = useLocation();
    return (
        <AppBar
            position="sticky"
            elevation={2}
            sx={{
                background: "#1B1033",
                color: "#fff",
                borderRadius: 0,
                boxShadow: "0 2px 8px 0 rgba(40, 216, 196, 0.08)",
            }}
        >
            <Toolbar sx={{ py: 1, px: 3, display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "Exo 2" }}>
                    Digital Dicebound
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button
                        component={Link}
                        to="/adventures"
                        color="inherit"
                        sx={{
                            fontWeight: 600,
                            color: location.pathname === "/adventures" ? "#28D8C4" : "#fff",
                            textTransform: "none",
                            borderBottom: location.pathname === "/adventures" ? "2px solid #28D8C4" : "none"
                        }}
                    >
                        Приключения
                    </Button>
                    <Button
                        component={Link}
                        to="/schedule"
                        color="inherit"
                        sx={{
                            fontWeight: 600,
                            color: location.pathname === "/schedule" ? "#28D8C4" : "#fff",
                            textTransform: "none",
                            borderBottom: location.pathname === "/schedule" ? "2px solid #28D8C4" : "none"
                        }}
                    >
                        Расписание
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

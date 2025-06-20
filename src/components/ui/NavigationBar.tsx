import {AppBar, Button, Stack, Toolbar} from "@mui/material";
import {Link, useLocation} from "react-router-dom";

export default function NavigationBar() {
    const location = useLocation();
    return (
        <AppBar
            position="sticky"
            elevation={2}
            sx={{
                backgroundColor: "#00000030",
                backdropFilter: "blur(4px)",
                color: "#fff",
                borderRadius: 0,
                boxShadow: "0 2px 8px 0 rgba(40, 216, 196, 0.08)",
            }}
        >
            <Toolbar sx={{ py: 1, px: 3, display: "flex", justifyContent: "space-between" }}>
                <Link to="/" style={{ padding: 0, display: "inline-flex" }}>
                    <img alt="Digital Dicebound Logo" src={"/assets/white-letter-logo.png"} style={{ margin: 0, padding: 0, height: 64}} />
                </Link>
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

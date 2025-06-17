import { useEffect, useState } from "react";
import { Container, Typography, Box, CircularProgress, Alert } from "@mui/material";
import ScheduleList from "./ScheduleList";
import { fetchSchedule } from "../api/schedule";
import type { ScheduleSessionDto } from "../types/ScheduleSessionDto";

export default function SchedulePage() {
    const [sessions, setSessions] = useState<ScheduleSessionDto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchSchedule()
            .then((data) => {
                setSessions(data);
                setLoading(false);
            })
            .catch((e) => {
                setError(e.message ?? "Не удалось загрузить расписание");
                setLoading(false);
            });
    }, []);

    return (
        <Box sx={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #1B1033 0%, #003A41 100%)",
            py: 5,
        }}>
            <Container maxWidth="lg">
                <Typography variant="h1" color="accentLavender.main" gutterBottom>
                    Расписание игр
                </Typography>
                <Typography variant="h4" color="text.secondary" sx={{ mb: 3 }}>
                    Присоединяйся к приключению!
                </Typography>

                {loading && (
                    <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
                        <CircularProgress color="secondary" />
                    </Box>
                )}

                {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {error}
                    </Alert>
                )}

                {!loading && !error && <ScheduleList sessions={sessions} />}
            </Container>
        </Box>
    );
}

import {useEffect, useState} from "react";
import {Alert, Box, Button, CircularProgress, Container, Stack, Typography} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, {Dayjs} from "dayjs";
import ScheduleList from "./ScheduleList";
import {fetchSchedule} from "../api/schedule";
import type {ScheduleSessionDto} from "../types/ScheduleSessionDto";

export default function SchedulePage() {
    const [sessions, setSessions] = useState<ScheduleSessionDto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Новые состояния для фильтров
    const [from, setFrom] = useState<Dayjs>(dayjs().startOf("day"));
    const [to, setTo] = useState<Dayjs | null>(null);

    // загрузка данных
    const loadData = () => {
        setLoading(true);
        setError(null);
        fetchSchedule({
            from: from ? from.toISOString() : undefined,
            to: to ? to.toISOString() : undefined,
        })
            .then((data) => {
                setSessions(data);
                setLoading(false);
            })
            .catch((e) => {
                setError(e.message ?? "Не удалось загрузить расписание");
                setLoading(false);
            });
    };

    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, []);

    // обработка по кнопке "Показать"
    const handleApply = () => {
        loadData();
    };

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

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
                        <DatePicker
                            label="С"
                            value={from}
                            onChange={(newValue) => setFrom(newValue ?? dayjs().startOf("day"))}
                            format="DD.MM.YYYY"
                            slotProps={{
                                textField: {
                                    size: "small",
                                    variant: "outlined",
                                },
                            }}
                            maxDate={to ?? undefined}
                        />
                        <DatePicker
                            label="По"
                            value={to}
                            onChange={(newValue) => setTo(newValue?.endOf("day") ?? null)}
                            format="DD.MM.YYYY"
                            slotProps={{
                                field: { clearable: true, onClear: () => setTo(null) },
                                textField: {
                                    size: "small",
                                    variant: "outlined"
                                },
                            }}
                            minDate={from}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ minWidth: 120, fontWeight: 700 }}
                            onClick={handleApply}
                        >
                            Показать
                        </Button>
                    </Stack>
                </LocalizationProvider>

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

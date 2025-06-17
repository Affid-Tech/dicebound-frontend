import { useEffect, useState } from "react";
import { Grid, Box, Typography, Stack, CircularProgress, Alert, Container } from "@mui/material";
import { CurrencySelector } from "../components/ui/CurrencySelector";
import type { AdventureAvailableDto } from "../types/AdventureAvailableDto";
import AdventureCard from "../components/Adventures/AdventureCard";
import { fetchCurrencyRates } from "../api/currencyRate";
import { fetchAvailableAdventures } from "../api/adventure";
import type { CurrencyRateDto } from "../types/CurrencyRateDto";

export default function AvailableAdventuresPage() {
    const [adventures, setAdventures] = useState<AdventureAvailableDto[]>([]);
    const [currencyRates, setCurrencyRates] = useState<CurrencyRateDto[]>([]);
    const [selectedCurrency, setSelectedCurrency] = useState("RUB");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        Promise.all([fetchAvailableAdventures(), fetchCurrencyRates()])
            .then(([advs, rates]) => {
                setAdventures(advs);
                setCurrencyRates(rates);
                setLoading(false);
            })
            .catch(e => {
                setError(e.message ?? "Ошибка загрузки данных");
                setLoading(false);
            });
    }, []);

    const ratio = currencyRates.find(r => r.currency === selectedCurrency)?.ratio ?? 1;

    return (
        <Box
            sx={{
                py: { xs: 3, md: 5 },
            }}
        >
            <Container maxWidth="lg">
                {/* Hero-блок */}
                <Typography variant="h1" color="accentLavender.main" gutterBottom sx={{ mb: 1 }}>
                    Активные приключения
                </Typography>
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    justifyContent="space-between"
                    spacing={2}
                    sx={{ mb: 2 }}
                >
                    <Typography variant="h4" color="text.secondary" sx={{ maxWidth: 700 }}>
                        Запишись на одно из приключений Digital Dicebound — выбери игру, DM и подходящее время.
                    </Typography>
                    <CurrencySelector
                        value={selectedCurrency}
                        onChange={setSelectedCurrency}
                        options={currencyRates.map(r => r.currency)}
                    />
                </Stack>

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

                {!loading && !error && (
                    adventures.length === 0 ? (
                        <Alert severity="info" sx={{ mt: 4 }}>
                            Пока нет активных приключений с доступными местами.
                        </Alert>
                    ) : (
                        <Grid container spacing={3} justifyContent={"center"}>
                            {adventures.map(adv => (
                                <Grid
                                    size={{ xs: 12, sm: 6, md: 4 }}
                                    key={adv.adventureId}
                                    sx={{ height: "100%", display: "flex" }}
                                >
                                    <AdventureCard
                                        adventure={adv}
                                        currency={selectedCurrency}
                                        ratio={ratio}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )
                )}
            </Container>
        </Box>
    );
}

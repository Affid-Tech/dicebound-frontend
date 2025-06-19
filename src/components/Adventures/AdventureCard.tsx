import {Card, CardContent, Typography, Stack, Box, Button, CardMedia, Chip} from "@mui/material";
import type { AdventureAvailableDto } from "../../types/AdventureAvailableDto.ts";
import ExpandableDescription from "../ui/ExpandableDescription.tsx";
import {typeColor, typeLabel, typeSx} from "./AdventureTypeUtils.ts";

type Props = {
    adventure: AdventureAvailableDto;
    currency: string;
    ratio: number;
};

export default function AdventureCard({ adventure, currency, ratio }: Props) {
    const priceTokens = adventure.priceTokens ?? 0;
    const priceInCurrency = priceTokens ? priceTokens * ratio : null;

    return (
        <Card
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                minHeight: 350,
            }}
        >
            {adventure.coverUrl && (<CardMedia component="img" image={adventure.coverUrl}/>)}
            <CardContent sx={{ flexGrow: 1, pb: 1.5 }}>
                <Stack spacing={1.2}>
                    <Typography variant="h3" color="accentLavender.main">
                        {adventure.title}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" color="text.secondary" sx={{fontWeight: 700}}>
                            {adventure.gameSystem} · DM: {adventure.dm.name}
                        </Typography>
                        <Chip
                            size="small"
                            label={typeLabel(adventure.type)}
                            color={typeColor(adventure.type)}
                            sx={{ ml: 1, fontWeight: 600, ...typeSx(adventure.type) }}
                        />
                    </Stack>
                    <ExpandableDescription description={adventure.description} />
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        <b>Цена: </b>
                        {priceInCurrency && (
                            <b>{priceInCurrency} {currency}</b>
                        )}
                    </Typography>
                    <Typography variant="body2">
                        <b>Свободно мест:</b> {adventure.freeSeats} / {adventure.maxPlayers}
                    </Typography>
                </Stack>
            </CardContent>
            <Box sx={{ px: 2, pb: 2, mt: "auto" }}>
                {adventure.signupLink && (
                    <Button
                        variant="contained"
                        color="primary"
                        href={adventure.signupLink}
                        target="_blank"
                        sx={{ width: "100%", fontWeight: 600, borderRadius: 12 }}
                    >
                        Записаться
                    </Button>
                )}
            </Box>
        </Card>
    );
}

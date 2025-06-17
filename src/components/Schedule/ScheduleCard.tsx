import {Card, CardContent, Chip, Link, Stack, Tooltip, Typography} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import CasinoIcon from "@mui/icons-material/Casino";
import type {ScheduleSessionDto} from "../../types/ScheduleSessionDto.ts";
import ExpandableDescription from "../ui/ExpandableDescription.tsx";

type Props = { session: ScheduleSessionDto };

const formatDateTime = (iso: string) => {
    const date = new Date(iso);
    return date.toLocaleString("ru-RU", {
        day: "2-digit", month: "2-digit", year: "numeric",
        hour: "2-digit", minute: "2-digit",
    });
};

function getTimeAndDateLink(
    title: string,
    startIso: string, // формат: 2025-06-21T10:00:00+02:00
    durationHours?: number
) {
    // msg: текст заголовка
    // iso: в формате YYYYMMDDTHHmm
    // ah: duration (optional)
    const start = new Date(startIso);
    const isoDate = start
        .toISOString()
        .replace(/[-:]/g, "")
        .slice(0, 13); // YYYYMMDDTHHMM

    const msg = encodeURIComponent(title);
    const iso = isoDate; // уже формат YYYYMMDDTHHMM
    const ah = durationHours ? `&ah=${durationHours}` : "";

    return `https://www.timeanddate.com/worldclock/fixedtime.html?msg=${msg}&iso=${iso}${ah}`;
}


const typeLabel = (type: string) =>
    type === "ONESHOT"
        ? "Oneshot"
        : type === "MULTISHOT"
            ? "Multishot"
            : "Campaign";

const typeColor = (type: string) =>
    type === "ONESHOT"
        ? "secondary"
        : type === "MULTISHOT"
            ? "warning"
            : "primary";

const typeSx = (type: string) =>
    type === "MULTISHOT"
        ? { background: "#FFA857", color: "#1B1033" }
        : {};

export default function ScheduleCard({ session }: Props) {
    return (
        <Card
            sx={{
                minWidth: 340,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
                boxShadow: "0 2px 12px 0 rgba(12, 8, 21, 0.15)",
                background: "#1B1033",
            }}
        >
            <CardContent sx={{ flexGrow: 1, pb: 1.5 }}>
                <Stack spacing={1.2}>
                    <Typography
                        variant="h3"
                        color="accentTurquoise.main"
                        sx={{ lineHeight: 1.1 }}
                    >
                        {session.adventureTitle}
                    </Typography>

                    <Stack direction="row" alignItems="center" spacing={1}>
                        <CasinoIcon fontSize="small" color="secondary" />
                        <Typography variant="body2">{session.gameSystem}</Typography>
                        <Chip
                            size="small"
                            label={typeLabel(session.type)}
                            color={typeColor(session.type)}
                            sx={{ ml: 1, fontWeight: 600, ...typeSx(session.type) }}
                        />

                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1}>
                        <AccessTimeIcon fontSize="small" />
                        <Typography variant="body2">
                            <Link href={getTimeAndDateLink(session.adventureTitle, session.startTime, session.durationHours)} color="text.primary" underline="hover" target="_blank" sx={{ fontWeight: 600 }}>{formatDateTime(session.startTime)} · {session.durationHours} ч.</Link>
                        </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1}>
                        <PersonIcon fontSize="small" />
                        <Tooltip title={session.dm.bio} arrow sx={{whiteSpace: "pre-line"}}>
                            <Typography variant="body2" sx={{ fontWeight: 700 }}>
                                DM: {session.dm.name}
                            </Typography>
                        </Tooltip>
                    </Stack>

                    {/* Описание с кнопкой "развернуть" */}
                    <ExpandableDescription description={session.description} keyVal={session.sessionId}/>
                </Stack>
            </CardContent>
        </Card>
    );
}

import { Box, Grid } from "@mui/material";
import type { ScheduleSessionDto } from "../types/ScheduleSessionDto";
import ScheduleCard from "./ScheduleCard";

type Props = { sessions: ScheduleSessionDto[] };

export default function ScheduleList({ sessions }: Props) {
    return (
        <Box sx={{ mt: 3 }}>
            <Grid container spacing={3}>
                {sessions.map((session) => (
                    <Grid size={{ xs: 12, md: 6, lg: 4 }} key={session.sessionId}>
                        <ScheduleCard session={session} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

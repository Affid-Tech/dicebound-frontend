import { Box, Grid } from "@mui/material";
import type { ScheduleSessionDto } from "../../types/ScheduleSessionDto.ts";
import ScheduleCard from "./ScheduleCard.tsx";

type Props = { sessions: ScheduleSessionDto[] };

export default function ScheduleList({ sessions }: Props) {
    return (
        <Box sx={{ mt: 3 }}>
            <Grid container spacing={3} justifyContent={"center"}>
                {sessions.map((session) => (
                    <Grid size={{ xs: 12, md: 6, lg: 4 }} key={session.sessionId}>
                        <ScheduleCard session={session} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

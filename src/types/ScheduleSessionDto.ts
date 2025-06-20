import type {DmShortDto} from "./DmShortDto.ts";

export interface ScheduleSessionDto {
    sessionId: string;
    adventureId: string;
    adventureTitle: string;
    type: string;
    gameSystem: string;
    dm: DmShortDto;
    startTime: string;
    durationHours: number;
    minPlayers: number;
    maxPlayers: number;
    description?: string;
    signupLink?: string | null;
}
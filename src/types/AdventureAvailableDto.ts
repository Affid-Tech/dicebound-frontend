import type {DmShortDto} from "./DmShortDto.ts";

export interface AdventureAvailableDto {
    adventureId: string;
    title: string;
    coverUrl: string;
    gameSystem: string;
    dm: DmShortDto;
    description?: string | null;
    priceTokens?: number | null;
    freeSeats: number;
    minPlayers: number;
    maxPlayers: number;
    signupLink?: string | null;
}
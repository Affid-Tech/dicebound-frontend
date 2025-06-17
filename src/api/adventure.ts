import type {AdventureAvailableDto} from "../types/AdventureAvailableDto.ts";

export async function fetchAvailableAdventures(): Promise<AdventureAvailableDto[]> {
    const response = await fetch("/api/v1/available-adventures");
    if (!response.ok) throw new Error("Ошибка загрузки списка приключений");
    return await response.json();
}

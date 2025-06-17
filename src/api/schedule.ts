import type { ScheduleSessionDto } from "../types/ScheduleSessionDto";

export async function fetchSchedule(): Promise<ScheduleSessionDto[]> {
    const response = await fetch("/api/v1/schedule");
    if (!response.ok) throw new Error("Ошибка загрузки расписания");
    return await response.json();
}

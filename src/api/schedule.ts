import type { ScheduleSessionDto } from "../types/ScheduleSessionDto";

export async function fetchSchedule(params?: { from?: string; to?: string }): Promise<ScheduleSessionDto[]> {
    const search = new URLSearchParams();
    if (params?.from) search.set("from", params.from);
    if (params?.to) search.set("to", params.to);

    const response = await fetch("/api/v1/schedule?" + search.toString());
    if (!response.ok) throw new Error("Ошибка загрузки расписания");
    return await response.json();
}

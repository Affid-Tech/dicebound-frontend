import type {CurrencyRateDto} from "../types/CurrencyRateDto.ts";

export async function fetchCurrencyRates(): Promise<CurrencyRateDto[]> {
    const response = await fetch("/api/v1/currency-rates");
    if (!response.ok) throw new Error("Ошибка загрузки курсов валют");
    return await response.json();
}

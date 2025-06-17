export interface CurrencyRateDto {
    currency: string; // "RUB", "EUR", "USD"
    ratio: number;    // сколько валюты за 1 токен (например, 150)
}
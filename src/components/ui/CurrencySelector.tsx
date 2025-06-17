import {FormControl, MenuItem, Select, Typography} from "@mui/material";

type Props = {
    value: string;
    onChange: (currency: string) => void;
    options: string[];
};

export function CurrencySelector({ value, onChange, options }: Props) {
    return (
        <FormControl size="small" sx={{ minWidth: 100 }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700 }}>Валюта</Typography>
            <Select
                value={value}
                onChange={e => onChange(e.target.value)}

            >
                {options.map(curr => (
                    <MenuItem value={curr} key={curr}>{curr}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

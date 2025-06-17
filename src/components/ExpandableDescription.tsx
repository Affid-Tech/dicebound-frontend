import { useState } from "react";
import { Box, Typography, IconButton, Collapse, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DESCRIPTION_PREVIEW_LENGTH = 90;

type Props = { description?: string | null };

export default function ExpandableDescription({ description }: Props) {
    const [expanded, setExpanded] = useState(false);

    if (!description) return null;
    const hasLongDescription = description.length > DESCRIPTION_PREVIEW_LENGTH;
    const preview = hasLongDescription ? description.slice(0, DESCRIPTION_PREVIEW_LENGTH) + "…" : description;

    return (
        <Box>
            <Typography
                variant="body1"
                color="text.primary"
                sx={{ mt: 1, mb: hasLongDescription ? 0.5 : 1.5, minHeight: 44, whiteSpace: 'pre-line' }}
            >
                {(!expanded || !hasLongDescription) ? preview : description}
            </Typography>

            {hasLongDescription && (
                <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                    <IconButton
                        size="small"
                        aria-label={expanded ? "Скрыть описание" : "Показать полностью"}
                        onClick={() => setExpanded((prev) => !prev)}
                        sx={{
                            color: "accentLavender.main",
                            transition: "transform 0.2s",
                            transform: expanded ? "rotate(180deg)" : "rotate(0)",
                        }}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "accentLavender.main",
                            ml: 0.5,
                            cursor: "pointer",
                            userSelect: "none",
                        }}
                        onClick={() => setExpanded((prev) => !prev)}
                    >
                        {expanded ? "Скрыть" : "Подробнее"}
                    </Typography>
                </Stack>
            )}

            {/* Анимация будет мягкой, но цвет и стиль всегда одинаковые */}
            {hasLongDescription && (
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    {/* ничего не нужно: уже показан полный текст выше */}
                </Collapse>
            )}
        </Box>
    );
}

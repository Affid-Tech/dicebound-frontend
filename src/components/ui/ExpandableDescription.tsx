import { useState, useRef, useEffect } from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// How many lines to show when collapsed
const MAX_LINES = 3;

type Props = { description?: string | null };

export default function ExpandableDescription({ description }: Props) {
    const [expanded, setExpanded] = useState(false);
    const [clampedText, setClampedText] = useState<string | null>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!description) {
            setClampedText(null);
            return;
        }

        // Create a dummy div to measure lines
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.visibility = 'hidden';
        div.style.pointerEvents = 'none';
        div.style.whiteSpace = 'pre-line';
        div.style.width = textRef.current?.offsetWidth ? `${textRef.current.offsetWidth}px` : '400px';
        div.style.fontSize = '1rem';
        div.style.lineHeight = '1.5';
        div.style.fontFamily = 'inherit';
        div.innerText = description;
        document.body.appendChild(div);

        const lineHeight = parseFloat(getComputedStyle(div).lineHeight || "20");
        const totalLines = Math.round(div.scrollHeight / lineHeight);

        // Only clamp if more lines than allowed
        if (totalLines > MAX_LINES) {
            // To clamp, need to find out where the cutoff is
            let low = 0, high = description.length, mid, result = "";
            while (low <= high) {
                mid = Math.floor((low + high) / 2);
                div.innerText = description.slice(0, mid) + "…";
                const lines = Math.round(div.scrollHeight / lineHeight);
                if (lines <= MAX_LINES) {
                    result = description.slice(0, mid) + "…";
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            setClampedText(result);
        } else {
            setClampedText(null);
        }

        document.body.removeChild(div);

    }, [description]);

    if (!description) return null;

    const isClamped = clampedText !== null;

    return (
        <Box>
            <Typography
                variant="body1"
                color="text.primary"
                sx={{
                    mt: 1,
                    mb: isClamped ? 0.5 : 1.5,
                    minHeight: 44,
                    whiteSpace: 'pre-line',
                    transition: "max-height 0.2s",
                    overflow: "hidden",
                }}
                ref={textRef}
            >
                {(!isClamped || expanded) ? description : clampedText}
            </Typography>

            {isClamped && (
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
        </Box>
    );
}

import React from "react";
import Button from "@mui/material/Button";
import TelegramIcon from "@mui/icons-material/Telegram";

type SignUpButtonProps = {
    signupLink?: string | null;
};

const SignUpButton: React.FC<SignUpButtonProps> = ({ signupLink }) => {
    if (signupLink) {
        return (
            <Button
                variant="contained"
                color="primary"
                endIcon={<TelegramIcon />}
                href={signupLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    minWidth: 150,
                    borderRadius: 12,
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #28D8C4 0%, #B79FFF 100%)",
                    color: "#1B1033",
                    boxShadow: "0 2px 6px 0 rgba(12, 8, 21, 0.15)",
                    textTransform: "none",
                    "&:hover": {
                        filter: "brightness(1.08)",
                        boxShadow: "0 4px 16px 0 rgba(12, 8, 21, 0.18)",
                        background: "linear-gradient(135deg, #28D8C4 20%, #B79FFF 100%)",
                    },
                }}
            >
                Записаться
            </Button>
        );
    }

    return (
        <Button
            variant="outlined"
            color="secondary"
            disabled
            sx={{
                minWidth: 150,
                borderRadius: 12,
                fontWeight: 600,
                borderWidth: 2,
                textTransform: "none",
            }}
        >
            Нет мест
        </Button>
    );
};

export default SignUpButton;

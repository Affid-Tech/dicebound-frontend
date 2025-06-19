export const typeLabel = (type: string) =>
    type === "ONESHOT"
        ? "Oneshot"
        : type === "MULTISHOT"
            ? "Multishot"
            : "Campaign";

export const typeColor = (type: string) =>
    type === "ONESHOT"
        ? "secondary"
        : type === "MULTISHOT"
            ? "warning"
            : "info";

export const typeSx = (type: string) =>
    type === "MULTISHOT"
        ? { background: "#FFA857", color: "#1B1033" }
        : {};
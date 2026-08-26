export const COLOR_SWATCH: Record<string, string> = {
    "Black": "#1a1a1a", "Graphite": "#4b4b4b", "Grey": "#9e9e9e", "Silver": "#c0c0c0",
    "Dark Champagne": "#c8a97e", "Pearl White": "#f5f0e8", "Fine Gold": "#d4af37",
    "Deep Brown": "#4e2c0e", "Sandy Brown": "#c2956c", "Rose Gold": "#e8b4a0",
    "Beige": "#e8dcc8", "Cosmic Blue": "#2a3f7e", "Snow White": "#f9f9f9",
    "Snow White Gloss": "#ffffff", "Black Gloss": "#0d0d0d", "Mocha": "#6b4226", "Brown": "#795548",
};

const NAMED_HEX_MAP: Record<string, string> = {
    "black": "#1a1a1a", "black gloss": "#0d0d0d", "graphite": "#4b4b4b", "grey": "#9e9e9e", "gray": "#9e9e9e",
    "silver": "#c0c0c0", "dark champagne": "#c8a97e", "champagne": "#c8a97e", "pearl white": "#f5f0e8",
    "pearl": "#f5f0e8", "gold": "#d4af37", "fine gold": "#d4af37", "deep brown": "#4e2c0e", "sandy brown": "#c2956c",
    "rose gold": "#e8b4a0", "rose": "#e8b4a0", "beige": "#e8dcc8", "cosmic blue": "#2a3f7e", "navy": "#1e3a8a",
    "navy blue": "#1e3a8a", "blue": "#3b82f6", "sky blue": "#0ea5e9", "snow white": "#f9f9f9",
    "snow white gloss": "#ffffff", "white": "#ffffff", "mocha": "#6b4226", "brown": "#795548",
    "red": "#dc2626", "dark red": "#991b1b", "crimson": "#dc2626", "pink": "#ec4899",
    "purple": "#a855f7", "violet": "#8b5cf6", "indigo": "#6366f1", "green": "#16a34a",
    "dark green": "#14532d", "emerald": "#10b981", "lime": "#84cc16", "yellow": "#eab308",
    "amber": "#f59e0b", "orange": "#f97316", "bronze": "#cd7f32", "copper": "#b87333",
};

export function findHexForName(name: string): string | null {
    if (!name || typeof name !== "string" || !name.trim()) return null;
    const hexMatch = name.match(/#(?:[0-9a-fA-F]{3}){1,2}\b/);
    if (hexMatch) return hexMatch[0];

    const clean = name.trim().toLowerCase();
    if (NAMED_HEX_MAP[clean]) return NAMED_HEX_MAP[clean];

    for (const key of Object.keys(NAMED_HEX_MAP)) {
        if (clean.includes(key)) return NAMED_HEX_MAP[key];
    }
    return null;
}

export function findNameForHex(hex: string): string | null {
    if (!hex || typeof hex !== "string") return null;
    const target = hex.toLowerCase();
    for (const [name, h] of Object.entries(NAMED_HEX_MAP)) {
        if (h.toLowerCase() === target) {
            return name.replace(/\b\w/g, (l) => l.toUpperCase());
        }
    }
    return null;
}

export function getSwatchColor(color: string): string {
    if (!color || typeof color !== "string") return "#94a3b8";
    if (COLOR_SWATCH[color]) return COLOR_SWATCH[color];

    const matchedHex = findHexForName(color);
    if (matchedHex) return matchedHex;

    return "#94a3b8";
}

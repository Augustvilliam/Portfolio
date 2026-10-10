export const aiCategories = {
    "AI Powered": "Huvudsakligen byggt med AI-agenter och promptstyrd utveckling, det vill säga vibekodat.",
    "AI Assisted": "Utvecklarstyrt arbete där AI har använts som stöd, för att effektivisera och finslipa delar av processen.",
    "Pure Code": "Handskriven kod utifrån egen problemlösning, riktlinjer och dokumentation, utan AI-agenter i implementationen.",
} as const;

export type AiCategory = keyof typeof aiCategories;

import type { AiCategory } from "../../data/aiCategories";

export default function AiTag({ category }: { category: AiCategory }) {
    return <span className="ai-tag">{category}</span>;
}

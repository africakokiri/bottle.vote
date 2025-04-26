export const categories = [
  { value: "society", name: "사회" },
  { value: "culture", name: "문화" },
  { value: "life", name: "일상" },
  { value: "technology", name: "기술" },
  { value: "entertainment", name: "연예" },
  { value: "sports", name: "스포츠" },
  { value: "politics", name: "정치" },
  { value: "food", name: "음식" },
  { value: "travel", name: "여행" },
  { value: "gaming", name: "게임" },
  { value: "music", name: "음악" },
  { value: "education", name: "교육" },
  { value: "business", name: "경제" },
  { value: "health", name: "건강" },
  { value: "relationships", name: "연애·인간관계" },
  { value: "fashion", name: "패션·뷰티" },
  { value: "random", name: "아무 말" },
  { value: "others", name: "기타" }
] as const;

export type Categories = (typeof categories)[number];
export type CategoriesValue = (typeof categories)[number]["value"];
export type CategoriesName = (typeof categories)[number]["name"];

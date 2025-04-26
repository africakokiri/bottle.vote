export const categories = [
  { value: "technology", name: "기술" },
  { value: "entertainment", name: "엔터테인먼트" },
  { value: "sports", name: "스포츠" },
  { value: "politics", name: "정치" },
  { value: "food", name: "음식" },
  { value: "travel", name: "여행" },
  { value: "gaming", name: "게임" },
  { value: "music", name: "음악" },
  { value: "education", name: "교육" },
  { value: "business", name: "비즈니스" },
  { value: "science", name: "과학" },
  { value: "health", name: "건강" },
  { value: "life", name: "생활" },
  { value: "others", name: "기타" }
] as const;

export type Categories = (typeof categories)[number];
export type CategoriesValue = (typeof categories)[number]["value"];
export type CategoriesName = (typeof categories)[number]["name"];

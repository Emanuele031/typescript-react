

// src/types.ts

export interface Article {
  id: string;
  title: string;
  publishedAt: string;
  summary: string;
  imageUrl: string;
  url: string;
}

export interface ArticlesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Article[];  // Assicurati che 'results' contenga l'array di articoli
}

  
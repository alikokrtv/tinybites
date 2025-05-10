export interface Variant {
  name: string;
  color?: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  image: string;
  colors?: string[];
  featured?: boolean;
  galleryImages?: string[];
  code?: string;
  description?: {
    en: string;
    tr: string;
  };
  specifications?: {
    en: string[];
    tr: string[];
  };
  price?: string;
  variants?: Variant[];
}
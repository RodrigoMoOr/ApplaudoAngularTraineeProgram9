export interface IProduct {
  id: number;
  slug: string;
  name: string;
  description: string;
  likes_up_count: number;
  likes_down_count: number;
  published_at: string;
  category: {
    id: number;
    slug: string;
    name: string;
  };
  image: {
    id: number;
    url: string;
  };
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: {
    node: {
      name: string;
    };
  };
  categories: {
    nodes: Array<{
      name: string;
    }>;
  };
  featuredImage?: {
    node?: {
      sourceUrl: string;
    } | null;
  } | null;
}

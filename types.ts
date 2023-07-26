export interface Product {
  id: string;
  sellerId: string;
  name: string;
  price: string;
  category: Category;
  description: string;
  isFeatured: boolean;
  model3d: model3d;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface model3d {
  id: string;
  url: string;
  iframeUrl: string;
  sellerId: string;
}

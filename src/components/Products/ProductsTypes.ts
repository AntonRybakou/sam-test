export type ProductsType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}[];

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  addItem: (id: string) => void;
};

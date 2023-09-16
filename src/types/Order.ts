export type Order = {
  id: number;
  userId: number;
  productIds?: { id: number }[];
};

export type OrderWithProductIds = {
  id: number;
  userId: number;
};
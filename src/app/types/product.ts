export const PRODUCT_STATUS = {
  AVAILABLE: 'Còn hàng',
  OUT_OF_STOCK: 'Hết hàng',
  NEW: 'Mới',
  ON_SALE: 'Giảm giá',
  COMING_SOON: 'Sắp có hàng',
  BESTSELLER: 'Bán chạy',
  SPECIAL: 'Đặc biệt',
  DAMAGED: 'Hỏng',
  USED: 'Đã qua sử dụng',
  ORDERED: 'Đã đặt hàng',
} as const;

export type ProductStatusCode = keyof typeof PRODUCT_STATUS;

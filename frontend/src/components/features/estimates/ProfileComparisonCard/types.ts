export type InventoryProfile = {
  ASIN: string;
  Title?: string;
  Brand?: string;
  Manifacturer?: string;
  LastUpdate?: string;
  // 他プリミティブなフィールドもここに
};
export type PeepaProfile = {
  ASIN: string;
  Title?: string;
  Brand?: string;
  Manifacturer?: string;
  LastUpdate?: string;
  // 他プリミティブなフィールドもここに
};
export type MergedProfile = InventoryProfile & {
  _sourceMap: Record<keyof InventoryProfile, 'inventory' | 'peepa'>;
};


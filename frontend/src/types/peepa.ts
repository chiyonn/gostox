export type InventoryProfile = {
  ASIN: string;
  Title?: string;
  Brand?: string;
  Manifacturer?: string;
  LastUpdate?: string;
};

type Offer = {
  LastSeen: number;
  SellerID: string;
  OfferCSV: number[];
  Condition: number;
  IsPrime: boolean;
  IsMAP: boolean;
  IsShippable: boolean;
  IsAddonItem: boolean;
  IsPreorder: boolean;
  IsWarehouseDeal: boolean;
  IsScam: boolean;
  IsAmazon: boolean;
  IsPrimeExcl: boolean;
  OfferID: number;
  IsFBA: boolean;
  ShipsFromChina: boolean;
  MinOrderQty: number;
  CouponHistory: number[];
  LastStockUpdate: number;
};

export type Stats = {
  BuyBoxPrice: number;
  SalesRankDrops30: number;
  SalesRankDrops90: number;
  SalesRankDrops180: number;
  SalesRankDrops365: number;
}

export type PeepaProfile = {
  ASIN: string;
  Title: string;
  RootCategory: number;
  Categories: number[];
  Images: string[];
  Brand: string;
  Manifacturer: string;
  Offers: Offer[];
  Stats: Stats;
  LastPriceChange: number;
  LastUpdate: number;
};

export type MergedProfile = InventoryProfile & {
  _sourceMap: Record<keyof InventoryProfile, 'inventory' | 'peepa'>;
};



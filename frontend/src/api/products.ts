import peepaClient from './client';
import type { InventoryProfile, PeepaProfile } from '../types';

export async function fetchPeepa(asin: string): Promise<PeepaProfile> {
  const res = await peepaClient.get(`/products/${asin}`);
  return res.data;
}

// This mock is better off in a separate test/mock file
export async function fetchInventory(asin: string): Promise<InventoryProfile> {
  // This is mock data. Please, for the love of all that is typed, don’t put this in production.
  return {
    ASIN: "B086GVHJBL",
    Title: "レディース 花魁系 ロング 着物ドレス シフォン 桜 和風 浴衣 コスチューム コスプレ衣装 帯付き (04# ピンク)",
    RootCategory: 2277721051,
    Categories: [10345693051, 2313660051],
    Images: [
      "61eF9DFCu+L.jpg", "61AKVNfb8DL.jpg", "51vhgAhJXbL.jpg",
      "615s1GOMiOL.jpg", "61amGjZ3OOL.jpg", "716EiYLR4fL.jpg",
      "71WZuOWzSgL.jpg", "61gpBg+PKRL.jpg", "61EyQI0ohgL.jpg"
    ],
    Brand: "YAYAYA",
    Manifacturer: "",
    Offers: [
      {
        LastSeen: 0,
        SellerID: "A35RI25N9A8PP3",
        OfferCSV: [6631246, 2600, 0],
        Condition: 1,
        IsPrime: true,
        IsMAP: false,
        IsShippable: true,
        IsAddonItem: false,
        IsPreorder: false,
        IsWarehouseDeal: false,
        IsScam: false,
        IsAmazon: false,
        IsPrimeExcl: false,
        OfferID: 1,
        IsFBA: true,
        ShipsFromChina: false,
        MinOrderQty: 1,
        CouponHistory: [6964898, 0],
        LastStockUpdate: 7582378,
      },
      {
        LastSeen: 0,
        SellerID: "A35KS9JQHFH6BS",
        OfferCSV: [6676632, 2500, 0],
        Condition: 1,
        IsPrime: false,
        IsMAP: false,
        IsShippable: true,
        IsAddonItem: false,
        IsPreorder: false,
        IsWarehouseDeal: false,
        IsScam: false,
        IsAmazon: false,
        IsPrimeExcl: false,
        OfferID: 7,
        IsFBA: false,
        ShipsFromChina: true,
        MinOrderQty: 1,
        CouponHistory: [6858196, 0],
        LastStockUpdate: 7499800,
      },
    ],
    LastPriceChange: "1970-03-29T00:55:48Z",
    LastUpdated: "1970-01-01T00:00:00Z",
  };
}

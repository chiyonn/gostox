import peepaClient from '@/api/client';
import type { InventoryProfile, PeepaProfile } from '@/types';

export async function fetchServerHealth(hostname: string): Promise<boolean> {
  try {
    const url = `http://${hostname}/health`;
    const res = await fetch(url);
    return res.status === 200;
  } catch (err) {
    return false;
  }
}

export async function fetchPeepa(asin: string): Promise<PeepaProfile> {
  const res = await peepaClient.get(`/products/${asin}`);
  return res.data;
}

export async function fetchInventory(asin: string): Promise<InventoryProfile> {
  return {
    ASIN: asin,
  };
}

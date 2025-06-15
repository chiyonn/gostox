import { useEffect, useState } from 'react';
import AsinTip from '@/components/atomics/atoms/AsinTip';
import peepaClient from '@/utils/peepa';
import styles from './PeepaProfileCard.module.css';

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

type PeepaProfile = {
  ASIN: string;
  Title: string;
  RootCategory: number;
  Categories: number[];
  Images: string[];
  Brand: string;
  Manifacturer: string;
  Offers: Offer[];
  LastPriceChange: string; // ISO date string expected from API
  LastUpdate: string;
};

const PeepaProfileCard = ({ asin }: { asin: string }) => {
  const [profile, setProfile] = useState<PeepaProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await peepaClient.get(`/products/${asin}`);
        const detail = res.data as PeepaProfile;
        setProfile(detail);
      } catch (err: any) {
        if (err.response?.status === 404) {
          setNotFound(true);
        } else {
          console.warn('取得失敗:', err);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [asin]);

  if (loading) {
    return <div className={styles.container}>読み込み中...</div>;
  }

  if (notFound || !profile) {
    return <div className={styles.container}>指定されたASINの商品が見つかりません。</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <AsinTip asin={profile.ASIN} />
        <h1 className={styles.title}>{profile.Title}</h1>
        <div className={styles.meta}>
          <p><strong>ブランド:</strong> {profile.Brand}</p>
          <p><strong>メーカー:</strong> {profile.Manifacturer}</p>
          <p><strong>最終価格変更:</strong> {new Date(profile.LastPriceChange).toLocaleString()}</p>
          <p><strong>最終更新:</strong> {new Date(profile.LastUpdate).toLocaleString()}</p>
        </div>

        <div className={styles.imageGallery}>
          {profile.Images.map((filename, index) => (
            <img
              key={index}
              alt={`商品画像 ${index + 1}`}
              src={`https://images-na.ssl-images-amazon.com/images/I/${filename}`}
              className={styles.image}
            />
          ))}
        </div>

        <div className={styles.section}>
          <h2>カテゴリ</h2>
          <ul className={styles.categoryList}>
            {profile.Categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>出品情報 ({profile.Offers.length}件)</h2>
          <div className={styles.offerList}>
            {profile.Offers.map((offer, index) => (
              <div key={index} className={styles.offerCard}>
                <p><strong>出品者ID:</strong> {offer.SellerID}</p>
                <p><strong>FBA:</strong> {offer.IsFBA ? '✓' : '×'}</p>
                <p><strong>プライム:</strong> {offer.IsPrime ? '✓' : '×'}</p>
                <p><strong>価格履歴:</strong> {offer.OfferCSV.join(', ')}</p>
                <p><strong>最終在庫更新:</strong> {offer.LastStockUpdate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeepaProfileCard;

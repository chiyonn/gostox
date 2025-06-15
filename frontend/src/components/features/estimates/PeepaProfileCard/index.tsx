import { useEffect, useState } from 'react';
import AsinTip from '@/components/atomics/atoms/AsinTip';
import peepaClient from '@/utils/peepa';

import styles from './PeepaProfileCard.module.css';

type PeepaProfile = {
  ASIN: string;
  Title: string;
  Categories: number[];
  Images: string[];
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
      <AsinTip asin={profile.ASIN} />
      <h1>{profile.Title}</h1>
      <h2>カテゴリ</h2>
      <ul>
        {profile.Categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      {profile.Images.map((filename, index) => (
        <img
          key={index}
          alt={`商品画像 ${index + 1}`}
          src={`https://images-na.ssl-images-amazon.com/images/I/${filename}`}
        />
      ))}
    </div>
  );
};

export default PeepaProfileCard;

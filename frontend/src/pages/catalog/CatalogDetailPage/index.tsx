import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AsinTip from '@/components/atomics/atoms/AsinTip';
import peepaClient from '@/utils/peepa';
import styles from './CatalogDetailPage.module.css';

type RouteParams = {
  asin: string;
};

const CatalogDetailPage = () => {
  const { asin } = useParams<RouteParams>();
  const navigate = useNavigate();
  const [peepaDetail, setPeepaDetail] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!asin) {
      navigate('/404');
      return;
    }

    (async () => {
      try {
        const res = await peepaClient.get(`/products/${asin}`);
        console.log(res.data);
        setPeepaDetail(res.data);
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
  }, [asin, navigate]);

  if (notFound) {
    return <div className={styles.container}>指定されたASINが存在しません。</div>;
  }

  if (loading) {
    return <div className={styles.container}>読み込み中...</div>;
  }

  return (
    <div className={styles.container}>
      <AsinTip asin={asin!} />
    </div>
  );
};

export default CatalogDetailPage;

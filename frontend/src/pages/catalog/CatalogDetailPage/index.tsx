import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PeepaProfileCard from '@/components/features/estimates/PeepaProfileCard';
import styles from './CatalogDetailPage.module.css';

type RouteParams = {
  asin: string;
};

const CatalogDetailPage = () => {
  const { asin } = useParams<RouteParams>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!asin) {
      navigate('/404');
      return;
    }
  }, [asin, navigate]);

  return (
    <div className={styles.container}>
      <PeepaProfileCard asin={asin} />
    </div>
  );
};

export default CatalogDetailPage;

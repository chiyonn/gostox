import { useParams } from 'react-router-dom';
import styles from './CatalogDetailPage.module.css';

type RouteParams = {
  asin: string;
};

const CatalogDetailPage = () => {
  const { asin } = useParams<RouteParams>();

  if (!asin) {
    return <div className={styles.container}>ASINが指定されていません。</div>;
  }

  return (
    <div className={styles.container}>
      ASIN: {asin}
    </div>
  );
};

export default CatalogDetailPage;

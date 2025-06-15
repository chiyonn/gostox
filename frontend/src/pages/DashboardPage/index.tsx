import styles from './DashboardPage.module.css';
import AsinSearch from '@/components/features/global/AsinSearch';
import EstimatesSheet from '@/components/features/estimates/EstimatesSheet';

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <AsinSearch />
      <EstimatesSheet />
    </div>
  );
};

export default DashboardPage;

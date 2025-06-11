import styles from './DashboardPage.module.css';
import EstimatesSheet from '@/components/features/estimates/EstimatesSheet';

const DashboardPage = () => {
    return (
        <div className={styles.container}>
            <EstimatesSheet />
        </div>
    );
};

export default DashboardPage;

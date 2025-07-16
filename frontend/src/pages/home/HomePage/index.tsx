import styles from './HomePage.module.css';
import MapView from '@components/organisms/MapView';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div>
        maybe some menu here
      </div>
      <MapView />
    </div>
  );
};

export default HomePage;

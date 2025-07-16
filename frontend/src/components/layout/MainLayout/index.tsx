import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <header>header</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import type { FC } from 'react';
import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import AsinSearch from '@/components/features/global/AsinSearch';
import ServerStatusTip from '@/components/atomics/organisms/ServerStatusTip';

const MainLayout: FC = () => {
  const [isOpenLeftSidebar, setIsOpenLeftSidebar] = useState(false);

  const toggleLeftSidebar = () => {
    setIsOpenLeftSidebar(prev => !prev);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.leftMenuBtn} onClick={toggleLeftSidebar}>
          {isOpenLeftSidebar ? <MenuIcon /> : <MenuOpenIcon />}
        </button>
        <AsinSearch />
        <ServerStatusTip hostname="peepa" />
      </header>
      <div className={styles.contentWrapper}>
        {isOpenLeftSidebar && (
          <aside className={styles.sidebarLeft}>
            <p>menu</p>
            <p>menu</p>
            <p>menu</p>
            <p>menu</p>
            <p>menu</p>
            <p>menu</p>
            <p>menu</p>
            <p>menu</p>
          </aside>
        )}
        <main className={styles.main}>
          <Outlet />
        </main>
        <aside className={styles.sidebarRight}>
          {/* 右サイドバーの内容 */}
        </aside>
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default MainLayout;

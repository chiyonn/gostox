import { useEffect, useState } from 'react';
import styles from './ServerStatusTip.module.css';
import { fetchServerHealth } from '@/api/products';

const ServerStatusTip = ({ hostname }: { hostname: string }) => {
  const [isHealthy, setIsHealthy] = useState<boolean | null>(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const healthy = await fetchServerHealth(hostname);
        console.log(healthy);
        setIsHealthy(healthy);
      } catch {
        setIsHealthy(false);
      }
    };

    checkHealth();
  }, [hostname]);

  const statusClass = isHealthy === null
    ? styles.statusUnknown
    : isHealthy
      ? styles.statusHealthy
      : styles.statusUnhealthy;

  return (
    <div className={styles.container}>
      {hostname}: <span className={`${styles.statusDot} ${statusClass}`}>●</span>
    </div>
  );
};

export default ServerStatusTip;

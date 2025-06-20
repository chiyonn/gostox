import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import Tip from '@/components/atomics/atoms/Tip';
import styles from './AsinTip.module.css';

type Props = {
  asin: string;
};

const AsinTip = ({ asin }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.container} ref={ref}>
      <Tip className={styles.asinBtn} label={asin} onClick={() => setOpen(!open)} />

      {open && (
        <div className={styles.menu}>
          <Link
            to={`/catalog/${asin}`}
            className={styles.menuItem}
          >
            詳細を開く
          </Link>
          <a
            href={`https://amazon.co.jp/dp/${asin}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.menuItem}
          >
            Amazonで開く
          </a>
        </div>
      )}
    </div>
  );
};

export default AsinTip;

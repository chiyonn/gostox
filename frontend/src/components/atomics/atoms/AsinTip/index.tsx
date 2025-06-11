import { useState, useRef, useEffect } from 'react';
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
            <button className={styles.asinBtn} onClick={() => setOpen(!open)}>
                {asin}
            </button>

            {open && (
                <div className={styles.menu}>
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

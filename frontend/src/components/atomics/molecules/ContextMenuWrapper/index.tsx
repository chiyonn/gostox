import { useState, useRef, useEffect, ReactNode } from 'react';
import styles from './ContextMenuWrapper.module.css';

interface ContextMenuWrapperProps {
  trigger: ReactNode;
  children: ReactNode;
}

const ContextMenuWrapper = ({ trigger, children }: ContextMenuWrapperProps) => {
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
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div className={styles.menu}>
          {children}
        </div>
      )}
    </div>
  );
};

export default ContextMenuWrapper;


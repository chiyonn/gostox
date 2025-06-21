import styles from './Tip.module.css';

type TipProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

const Tip = ({ label, onClick, className }: TipProps) => {
  return (
    <button
      className={`${styles.container} ${className || ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tip;

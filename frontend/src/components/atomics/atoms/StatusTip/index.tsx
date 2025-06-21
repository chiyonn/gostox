import styles from './StatusTip.module.css';

type Props = {
  label: string;
  value: string | number;
  status: boolean;
};

const StatusTip = ({ label, value, status }: Props) => {
  const statusClass = status ? styles.true : styles.false;

  return (
    <div className={`${styles.container} ${statusClass}`}>
      {label}: {value}
    </div>
  );
};

export default StatusTip;

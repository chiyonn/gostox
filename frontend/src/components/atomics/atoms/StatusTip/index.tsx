import styles from './StatusTip.module.css';

type StatusTipProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const StatusTip = ({ value = '', onChange }: StatusTipProps) => {
  return (
    <select
      className={styles.container}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    >
      <option value=""></option>
      <option value="trademark">商標あり</option>
      <option value="size-unknown">サイズ不明</option>
      <option value="other">その他</option>
    </select>
  );
};

export default StatusTip;

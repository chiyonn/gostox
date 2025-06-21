import styles from './EstimateStatusTip.module.css';

type EstimateStatusTipProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const EstimateStatusTip = ({ value = '', onChange }: EstimateStatusTipProps) => {
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

export default EstimateStatusTip;

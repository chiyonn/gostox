import type { InventoryProfile } from '@/components/features/estimates/ProfileComparisonCard/types.ts';
import styles from './MergedProfileField.module.css';

type Props = {
  label: string;
  field: keyof InventoryProfile;
  value: any;
  originalValue: any;
  sourceValue: any;
  source: 'original' | 'source';
  onMerge: (field: keyof InventoryProfile) => void;
};

const MergedProfileField = ({
  label,
  field,
  value,
  originalValue,
  sourceValue,
  source,
  onMerge
}: Props) => {
  const isMerged = source === 'source';
  const isDifferent = value !== sourceValue && value != null && sourceValue != null;
  const canMerge = value !== sourceValue;
  const disableButton = !canMerge;

  const rowClass = [
    styles.row,
    isMerged ? styles.merged : '',
    !isMerged && isDifferent ? styles.diff : ''
  ].join(' ').trim();

  const originalClass = [
    styles.value,
    isDifferent && !isMerged ? styles.diffText : ''
  ].join(' ').trim();

  const sourceClass = [
    styles.value,
    isDifferent ? styles.peepa : ''
  ].join(' ').trim();

  return (
    <div className={rowClass}>
      <div className={styles.label}>{label}</div>

      <div className={originalClass}>
        {value ?? '-'}
      </div>

      <button
        onClick={() => onMerge(field)}
        className={styles.button}
        disabled={disableButton}
      >
        適用
      </button>

      <div className={sourceClass}>
        {sourceValue ?? '-'}
      </div>
    </div>
  );
};

export default MergedProfileField;

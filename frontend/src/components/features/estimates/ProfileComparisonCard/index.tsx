import MergedProfileField from "@/components/features/estimates/MergedProfileField";
import type { InventoryProfile, PeepaProfile, MergedProfile } from '@/types';
import styles from './ProfileComparisionCard.module.css';

type Props = {
  original: InventoryProfile;
  source: PeepaProfile;
  merged: MergedProfile;
  onMergeField: (field: keyof InventoryProfile) => void;
  onMergeAll: () => void;
};

const fields: { field: keyof InventoryProfile; label: string }[] = [
  { field: 'Title', label: '商品名' },
  { field: 'Brand', label: 'ブランド' },
  { field: 'Manifacturer', label: 'メーカー' },
  { field: 'RootCategory', label: 'カテゴリ' },
];

const ProfileComparisonCard = ({
  original,
  source,
  merged,
  onMergeField,
  onMergeAll
}: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <div>ASIN: {source.ASIN}</div>
        <button onClick={onMergeAll}>すべて適用</button>
      </div>
      {fields.map(({ field, label }) => (
        <MergedProfileField
          key={field}
          label={label}
          field={field}
          value={merged[field]}
          originalValue={original[field]}
          sourceValue={source[field]}
          source={merged._sourceMap?.[field]}
          onMerge={onMergeField}
        />
      ))}
    </div>
  );
};

export default ProfileComparisonCard;

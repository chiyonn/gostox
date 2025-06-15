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
  { field: 'Brand', label: 'ブランド' },
  { field: 'Manifacturer', label: 'メーカー' },
  { field: 'Title', label: '商品名' },
  { field: 'LastUpdate', label: '更新日時' },
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

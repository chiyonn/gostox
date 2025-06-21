import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProfileComparisonCard from '@/components/features/estimates/ProfileComparisonCard';
import { fetchInventory, fetchPeepa } from '@/api';
import type {
  InventoryProfile,
  PeepaProfile,
  MergedProfile
} from '@/components/features/estimates/ProfileComparisonCard/types.ts';
import styles from './CatalogDetailPage.module.css';

const CatalogDetailPage = () => {
  const { asin } = useParams<{ asin: string }>();
  const navigate = useNavigate();

  const [original, setOriginal] = useState<InventoryProfile | null>(null);
  const [source, setSource] = useState<PeepaProfile | null>(null);
  const [merged, setMerged] = useState<MergedProfile | null>(null);

  useEffect(() => {
    if (!asin) {
      navigate('/404');
      return;
    }

    const fetchAll = async () => {
      const orig = await fetchInventory(asin);
      const src = await fetchPeepa(asin);
      setOriginal(orig);
      setSource(src);
      setMerged({
        ...orig,
        _sourceMap: Object.keys(orig).reduce((acc, k) => {
          acc[k as keyof InventoryProfile] = 'original';
          return acc;
        }, {} as Record<keyof InventoryProfile, 'original' | 'source'>)
      });
    };

    fetchAll();
  }, [asin]);

  const handleMergeField = (field: keyof InventoryProfile) => {
    if (!original || !source || !merged) return;
    setMerged({
      ...merged,
      [field]: source[field],
      _sourceMap: {
        ...merged._sourceMap,
        [field]: 'source'
      }
    });
  };

  const handleMergeAll = () => {
    if (!original || !source || !merged) return;

    const result: any = { ...original, _sourceMap: { ...merged._sourceMap } };

    for (const key in source) {
      if (source[key] != null) {
        result[key] = source[key];
        result._sourceMap[key] = 'source';
      }
    }

    setMerged(result);
  };

  if (!original || !source || !merged) return <div>読み込み中…</div>;

  return (
    <div className={styles.container}>
      <ProfileComparisonCard
        original={original}
        source={source}
        merged={merged}
        onMergeField={handleMergeField}
        onMergeAll={handleMergeAll}
      />
    </div>
  );
};

export default CatalogDetailPage;

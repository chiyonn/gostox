import React from 'react';
import Tip from '@/components/atomics/atoms/Tip';
import styles from './FBATip.module.css';

const FBATip = () => {
  return (
    <Tip className={styles.container} label="FBA" />
  );
};

export default FBATip;

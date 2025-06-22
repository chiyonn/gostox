import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import Tip from '@/components/atomics/atoms/Tip';
import ContextMenuWrapper from '@/components/atomics/molecules/ContextMenuWrapper';
import styles from './AsinTip.module.css';

type Props = {
  asin: string;
};

const AsinTip = ({ asin }: Props) => {
  return (
    <ContextMenuWrapper
      trigger={
        <Tip className={styles.asinBtn} label={asin} />
      }
    >
      <>
        <Link
          to={`/catalog/${asin}`}
        >
          詳細を開く
        </Link>
        <a
          href={`https://amazon.co.jp/dp/${asin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazonで開く
        </a>
      </>
    </ContextMenuWrapper>
  );
};

export default AsinTip;

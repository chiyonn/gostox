import Tip from '@/components/atomics/atoms/Tip';
import ContextMenuWrapper from '@/components/atomics/molecules/ContextMenuWrapper';
import styles from './SellerTip.module.css';

const SellerTip = ({ sellerId }: { sellerId: string }) => {
  return (
    <ContextMenuWrapper
      trigger={
        <Tip className={styles.sellerBtn} label={sellerId} />
      }
    >
      <a
        href={`https://www.amazon.co.jp/s?me=${sellerId}&marketplaceID=A1VC38T7YXB528`}
        target="_blank"
        rel="noopener noreferrer"
      >
        このセラーの出品商品一覧をAmazonで見る
      </a>
    </ContextMenuWrapper>
  );
};

export default SellerTip;

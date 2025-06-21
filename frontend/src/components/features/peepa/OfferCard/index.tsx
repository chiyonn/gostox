import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import FBATip from '@/components/atomics/molecules/FBATip';
import PrimeTip from '@/components/atomics/molecules/PrimeTip';
import { keepaMinutesToDate } from '@/utils/peepa';
import type { Offer } from '@/types/peepa';
import styles from './OfferCard.module.css';

const OfferCard = ({ offer }: { offer: Offer }) => {
  const raw = offer.OfferCSV.map(Number);
  const data = [];
  for (let i = 0; i < raw.length; i += 3) {
    const keepaTime = raw[i];
    const price = raw[i + 1];
    const date = keepaMinutesToDate(keepaTime);
    data.push({ date, price });
  }

  return (
    <div className={styles.container}>
      <div className={styles.statusContainer}>
        <p><strong>出品者ID:</strong> {offer.SellerID}</p>
        <p><strong>最終在庫更新:</strong> {keepaMinutesToDate(offer.LastStockUpdate)}</p>
        {offer.IsFBA && <FBATip />}
        {offer.IsPrime && <PrimeTip />}
      </div>

      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OfferCard;

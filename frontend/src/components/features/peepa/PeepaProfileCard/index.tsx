import ImageSmall from '@/components/atomics/atoms/ImageSmall';
import AsinTip from '@/components/atomics/organisms/AsinTip';
import OffersStatus from "@/components/atomics/organisms/OfferStatus";
import OfferCard from '@/components/features/peepa/OfferCard';
import Tip from "@/components/atomics/atoms/Tip";
import { keepaMinutesToDate } from '@/utils/peepa';
import styles from './PeepaProfileCard.module.css';
import type {
  Offer,
  PeepaProfile,
} from '@/types/peepa';

const PeepaProfileCard = ({ profile }: { profile: PeepaProfile }) => {
  return (
    <div className={styles.container}>
      <AsinTip asin={profile.ASIN} />
      <h1 className={styles.title}>{profile.Title}</h1>

      <div className={styles.screenings}>
        <OffersStatus offers={profile?.Offers?.length} />
      </div>

      <div className={styles.meta}>
        <div className={styles.imageGallery}>
          {profile.Images.map((filename: string, index: number) => (
            <ImageSmall
              key={index}
              src={`https://images-na.ssl-images-amazon.com/images/I/${filename}`}
            />
          ))}
        </div>

        <div className={styles.basicInfo}>
          <p>基本情報</p>
          <table>
            <tbody>
              <tr>
                <th>ブランド:</th>
                <td>{profile.Brand}</td>
              </tr>
              <tr>
                <th>メーカー:</th>
                <td>{profile.Manifacturer}</td>
              </tr>
              <tr>
                <th>最終価格変更:</th>
                <td>{profile.LastPriceChange && keepaMinutesToDate(profile.LastPriceChange)}</td>
              </tr>
              <tr>
                <th>最終更新:</th>
                <td>{profile.LastUpdate && keepaMinutesToDate(profile.LastUpdate)}</td>
              </tr>
            </tbody>
          </table>

          <p>カテゴリ</p>
          <table>
            <thead>
              <tr>
                <th>カテゴリ</th>
              </tr>
            </thead>
            <tbody>
              {profile.Categories.map((category: string, index: number) => (
                <tr key={index}>
                  <td>{category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.offers}>
          <h2>出品情報 ({profile?.Offers?.length ?? 0}件)</h2>
          <div className={styles.offerList}>
            {profile.Offers && profile.Offers.map((offer: Offer, index: number) => (
              <OfferCard key={index} offer={offer} />
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default PeepaProfileCard;

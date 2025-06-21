import { useEffect, useState } from 'react';
import { validateStatus, validateZeroOrMore, validateDateISO } from "@/utils/validator";
import Sheet from '@/components/atomics/organisms/Sheet';
import AsinTip from '@/components/atomics/organisms/AsinTip';
import EstimateStatusTip from '@/components/atomics/atoms/EstimateStatusTip';

const dummyData = [
  {
    asin: 'B0C16WKKPN',
    title: 'ELEZAY クローゼット 収納ボックス 吊り下げ収納 スーツケースインナーバック 衣装ケース トラベルポーチ 圧縮バック 衣類ラック 4段 ファスナー付き折り畳み式 大容量 収納 旅行 出張 省スペース X-Large_45*30*50cm, ブラック',
    titleZh: null,
    materialZh: null,
    titleEn: null,
    materialEn: null,
    amazonUrl: 'https://www.amazon.co.jp/dp/B0C16WKKPN',
    salesRankDrops30: 3,
    salesRankDrops90: 6,
    salesRankDrops180: 12,
    salesRankDrops365: 173,
    offers: 2,
    buyBoxPrice: 1818,
    pickAndPackFee: 675,
    referalFee: 218,
    aribabaUrl: 'https://detail.1688.com/offer/784971539221.html',
    costCny: 29.0,
    quantity: 1,
    costTotalCny: 29.0,
    costTotalJpy: 584.92,
    profitRatio: '18.70%',
    minPrice: null,
    maxPrice: null,
    updatedAt: '2025-05-24',
    status: '登録不可',
    note: 'サイズ要確認',
  },
  {
    asin: 'B0CF53Q3C5',
    title: 'ZZBUY 対応',
    titleZh: null,
    materialZh: null,
    titleEn: null,
    materialEn: null,
    amazonUrl: 'https://www.amazon.co.jp/dp/B0CF53Q3C5',
    salesRankDrops30: 5,
    salesRankDrops90: 7,
    salesRankDrops180: 7,
    salesRankDrops365: 34,
    offers: 12,
    buyBoxPrice: 999,
    pickAndPackFee: 419,
    referalFee: 100,
    aribabaUrl: 'https://detail.1688.com/offer/713299810137.html',
    costCny: 37.0,
    quantity: 1,
    costTotalCny: 37.0,
    costTotalJpy: 746.28,
    profitRatio: '-26.64%',
    minPrice: null,
    maxPrice: null,
    updatedAt: '2025-05-24',
    status: '登録不可',
    note: null,
  },
  {
    asin: 'B093B8BZWM',
    title: 'ADASMILE A & S 毛布 ブランケット 大判 シングル ニット 夏用冬用ひざ掛け おしゃれ ニット かわいい 北欧 掛け毛布 暖かい ふわふわ毛布 防寒 ハーフケット 洗える 洗濯OK オールシーズン フリンジ付き ホワイト 127*153cm',
    titleZh: null,
    materialZh: null,
    titleEn: null,
    materialEn: null,
    amazonUrl: 'https://www.amazon.co.jp/dp/B093B8BZWM',
    salesRankDrops30: 18,
    salesRankDrops90: 54,
    salesRankDrops180: 119,
    salesRankDrops365: 393,
    offers: 7,
    buyBoxPrice: 1790,
    pickAndPackFee: 675,
    referalFee: 269,
    aribabaUrl: 'https://detail.1688.com/offer/719833840708.html',
    costCny: 28.8,
    quantity: 1,
    costTotalCny: 28.8,
    costTotalJpy: 580.89,
    profitRatio: '14.84%',
    minPrice: null,
    maxPrice: null,
    updatedAt: '2025-05-21',
    status: '登録不可',
    note: null,
  },
  {
    asin: 'B0BNPCPG76',
    title: 'KEVANCHO 磁気サングラスホルダー カーバイザークリップ用 レザーカーメガネホルダー バイザーアクセサリ 眼鏡ホルダー メガネ収納ケース (02-グレー)',
    titleZh: null,
    materialZh: null,
    titleEn: null,
    materialEn: null,
    amazonUrl: 'https://www.amazon.co.jp/dp/B0BNPCPG76',
    salesRankDrops30: 7,
    salesRankDrops90: 12,
    salesRankDrops180: 36,
    salesRankDrops365: 242,
    offers: 6,
    buyBoxPrice: 1348,
    pickAndPackFee: 465,
    referalFee: 162,
    aribabaUrl: 'https://detail.1688.com/offer/728012784135.html',
    costCny: 8.8,
    quantity: 1,
    costTotalCny: 8.8,
    costTotalJpy: 177.49,
    profitRatio: '40.34%',
    minPrice: null,
    maxPrice: null,
    updatedAt: '2025-05-21',
    status: null,
    note: null,
  },
  {
    asin: 'B099FH6BY9',
    title: 'Crean リングケース ミニ 指輪ケース 木製 プロポーズ シンプル 高級 おしゃれ ギフトボックス 小さい 持ち運び 携帯用 (ブラックチェリー, 1個用)',
    titleZh: null,
    materialZh: null,
    titleEn: null,
    materialEn: null,
    amazonUrl: 'https://www.amazon.co.jp/dp/B099FH6BY9',
    salesRankDrops30: 1,
    salesRankDrops90: 1,
    salesRankDrops180: 3,
    salesRankDrops365: 46,
    offers: 6,
    buyBoxPrice: 1311,
    pickAndPackFee: 413,
    referalFee: 197,
    aribabaUrl: 'https://detail.1688.com/offer/743679932688.html',
    costCny: 33.8,
    quantity: 1,
    costTotalCny: 33.8,
    costTotalJpy: 681.73,
    profitRatio: '1.50%',
    minPrice: null,
    maxPrice: null,
    updatedAt: '2025-05-21',
    status: null,
    note: null,
  },
];

const columns = [
  {
    key: 'asin',
    label: 'ASIN',
    editable: false,
    render: (value) => <AsinTip asin={String(value)} />
  },
  { key: 'title', label: '商品名', editable: false },
  { key: 'salesRankDrops30', label: '下降30', editable: false },
  { key: 'salesRankDrops90', label: '下降90', editable: false },
  { key: 'salesRankDrops180', label: '下降180', editable: false },
  { key: 'salesRankDrops365', label: '下降365', editable: false },
  { key: 'offers', label: '出品者数', editable: false },
  { key: 'buyBoxPrice', label: '販売価格', editable: false },
  { key: 'pickAndPackFee', label: 'FBA', editable: false },
  { key: 'referalFee', label: '販売', editable: false },
  { key: 'costCny', label: '単品原価', editable: false },
  { key: 'quantity', label: '内容量', editable: true, validate: validateZeroOrMore },
  { key: 'costTotalCny', label: '仕入(元)', editable: true, validate: validateZeroOrMore },
  { key: 'costTotalJpy', label: '仕入(円)', editable: false },
  { key: 'profitRatio', label: '利益率', editable: false },
  { key: 'updatedAt', label: '最終更新', editable: false, validate: validateDateISO },
  {
    key: 'status',
    label: 'ステータス',
    editable: true,
    validate: validateStatus,
    render: (value, onChange) => (
      <EstimateStatusTip value={String(value)} onChange={(v) => onChange?.(v)} />
    )
  },
  { key: 'note', label: '備考', editable: true },
];

const EstimatesSheet = () => {
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    const fetchEstimates = async () => {
      try {
        // 本来はAPI呼び出しなどを書くべき場所
        setData([]); // 仮置き: データクリア
      } catch (error) {
        console.warn(`failed to fetch estimates: ${error}`);
      }
    };

    fetchEstimates();
  }, []); // ← 依存配列を忘れずに

  const handleCellChange = (rowIndex: number, key: string, newValue: unknown) => {
    setData((prev) =>
      prev.map((row, i) =>
        i === rowIndex ? { ...row, [key]: newValue } : row
      )
    );
  };

  return (
    <Sheet
      columns={columns}
      data={data}
      onCellChange={handleCellChange}
    />
  );
};

export default EstimatesSheet;

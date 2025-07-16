import React from 'react';
import IsometricObject from '@components/molecules/IsometricObject';
import serversImg from '@assets/isometrics/servers.png';
import houseImg from '@assets/isometrics/house.png';
import warehouseImg from '@assets/isometrics/warehouse.png';
import warehouseLargeImg from '@assets/isometrics/warehouse-large.png';
import styles from './MapView.module.css';

// 傾き22.5度の等角投影に基づいたマップスケール
const TILE_SCALE = 64; // スケーリング係数（画像サイズに合わせて調整）
const ANGLE_DEG = 22.5;
const ANGLE_RAD = (ANGLE_DEG * Math.PI) / 180;
const COS = Math.cos(ANGLE_RAD); // ≈ 0.924
const SIN = Math.sin(ANGLE_RAD); // ≈ 0.383

type BubblePosition = 'top' | 'bottom' | 'left' | 'right';

type RenderObject = {
  x: number;
  y: number;
  img: string;
  size: number;
  label: string;
  position: BubblePosition;
  flip?: boolean;
};

const objects: RenderObject[] = [
  {
    x: -3,
    y: 5,
    img: warehouseImg,
    size: 300,
    label: '王さんの倉庫',
    position: 'bottom',
    flip: true
  },
  {
    x: 4,
    y: 4,
    img: serversImg,
    size: 100,
    label: 'リサーチプログラム',
    position: 'left'
  },
  {
    x: 5,
    y: 0,
    img: houseImg,
    size: 180,
    label: '宮内倉庫',
    position: 'right'
  },
  {
    x: 9,
    y: 8,
    img: warehouseLargeImg,
    size: 300,
    label: 'Amazon倉庫',
    position: 'left'
  },
];

// 中央座標のオフセットを計算
const centerX = (Math.min(...objects.map(o => o.x)) + Math.max(...objects.map(o => o.x))) / 2;
const centerY = (Math.min(...objects.map(o => o.y)) + Math.max(...objects.map(o => o.y))) / 2;

const MapView: React.FC = () => {
  return (
    <div className={styles.container}>
      {objects.map((obj, i) => {
        const relX = obj.x - centerX;
        const relY = obj.y - centerY;
        const isoX = (relX - relY) * TILE_SCALE * COS;
        const isoY = (relX + relY) * TILE_SCALE * SIN;

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `calc(50% + ${isoX}px)`,
              top: `${isoY + 150}px`,
            }}
          >
            <IsometricObject
              src={obj.img}
              size={obj.size}
              label={obj.label}
              bubbleContent={<div>詳細情報</div>}
              bubblePosition={obj.position}
              flip={obj.flip}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MapView;

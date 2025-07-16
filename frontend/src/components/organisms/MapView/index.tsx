import React from 'react';
import IsometricObject from '@components/molecules/IsometricObject';
import styles from './MapView.module.css';

// 傾き22.5度の等角投影に基づいたマップスケール
const TILE_SCALE = 64; // スケーリング係数（画像サイズに合わせて調整）
const ANGLE_DEG = 22.5;
const ANGLE_RAD = (ANGLE_DEG * Math.PI) / 180;
const COS = Math.cos(ANGLE_RAD); // ≈ 0.924
const SIN = Math.sin(ANGLE_RAD); // ≈ 0.383

type BubblePosition = 'top' | 'bottom' | 'left' | 'right';

export type RenderObject = {
  x: number;
  y: number;
  img: string;
  size: number;
  label: string;
  position: BubblePosition;
  flip?: boolean;
};

interface MapViewProps {
  objects: RenderObject[];
}

const MapView: React.FC<MapViewProps> = ({ objects }) => {
  // 中央座標のオフセットを計算
  const centerX = (Math.min(...objects.map(o => o.x)) + Math.max(...objects.map(o => o.x))) / 2;
  const centerY = (Math.min(...objects.map(o => o.y)) + Math.max(...objects.map(o => o.y))) / 2;

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

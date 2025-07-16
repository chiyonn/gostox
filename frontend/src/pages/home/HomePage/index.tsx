import MapView from '@components/organisms/MapView';
import type { RenderObject } from '@components/organisms/MapView';
import ResearchProgramStatusContent from '@components/molecules/ResearchProgramStatusContent';
import serversImg from '@assets/isometrics/servers.png';
import houseImg from '@assets/isometrics/house.png';
import warehouseImg from '@assets/isometrics/warehouse.png';
import warehouseLargeImg from '@assets/isometrics/warehouse-large.png';
import styles from './HomePage.module.css';

const objects: RenderObject[] = [
  {
    x: -3,
    y: 5,
    img: warehouseImg,
    size: 300,
    label: '王さんの倉庫',
    content: <div>準備中</div>,
    position: 'bottom',
    flip: true
  },
  {
    x: 4,
    y: 4,
    img: serversImg,
    size: 100,
    label: 'リサーチプログラム',
    content: <ResearchProgramStatusContent />,
    position: 'left'
  },
  {
    x: 5,
    y: 0,
    img: houseImg,
    size: 180,
    label: '宮内倉庫',
    content: <div>準備中</div>,
    position: 'left'
  },
  {
    x: 9,
    y: 8,
    img: warehouseLargeImg,
    size: 300,
    label: 'Amazon倉庫',
    content: <div>準備中</div>,
    position: 'left'
  },
];

const HomePage = () => {
  return (
    <div className={styles.container}>
      <MapView objects={objects} />
    </div>
  );
};

export default HomePage;

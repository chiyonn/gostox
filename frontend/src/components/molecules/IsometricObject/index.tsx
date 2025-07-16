import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import styles from './IsometricObject.module.css';

export type BubblePosition = 'top' | 'bottom' | 'left' | 'right';

interface Props {
  src: string;
  size?: number;
  flip?: boolean;
  label: string;
  content: ReactNode;
  position?: BubblePosition;
  onClick?: () => void;
}

const IsometricObject: FC<Props> = ({
  src,
  size = 100,
  flip = false,
  label,
  content,
  position = 'top',
  onClick,
}) => {
  const [isBubbleVisible, setBubbleVisible] = useState(false);

  const bubbleClass = [
    styles.bubble,
    styles[`bubble--${position}`],
    isBubbleVisible && styles.visible,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setBubbleVisible(true)}
      onMouseLeave={() => setBubbleVisible(false)}
      onClick={onClick}
    >
      <p className={styles.label}>{label}</p>
      <img
        className={styles.image}
        src={src}
        alt={label}
        style={{
          width: size,
          height: size,
          transform: flip ? 'scaleX(-1)' : 'scaleX(1)',
        }}
      />
      <div className={bubbleClass}>{content}</div>
    </div>
  );
};

export default IsometricObject;

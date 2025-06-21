import styles from './ImageSmall.module.css';

const ImageSmall = ({ src }: { src: string }) => {
  return (
    <img
      alt={src}
      src={src}
      className={styles.container}
    />
  );
};

export default ImageSmall;

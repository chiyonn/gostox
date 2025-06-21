import Tip from '@/components/atomics/atoms/Tip';
import styles from './PrimeTip.module.css';

const PrimeTip = ({ isPrime }: { isPrime: boolean }) => {
  const className = `${styles.container} ${!isPrime ? styles.notPrime : ''}`.trim();

  return (
    <Tip className={className} label="Prime" />
  );
};

export default PrimeTip;


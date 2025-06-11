import React from 'react';
import styles from './SheetCell.module.css';

type SheetCellProps = {
  row: number;
  col: number;
  value: unknown;
  editable: boolean;
  validate?: (value: unknown) => boolean;
  onChange?: (value: unknown) => void;
};

const SheetCell = ({ row, col, value, editable, validate, onChange }: SheetCellProps) => {
  if (React.isValidElement(value)) {
    return <div className={styles.cell}>{value}</div>;
  }

  const isNumber = typeof value === 'number';
  const inputValue = value ?? '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = isNumber ? Number(e.target.value) : e.target.value;
    const isValid = validate ? validate(newValue) : true;

    if (isValid) {
      onChange?.(newValue);
    } else {
      console.warn(`Invalid value at ${row},${col}:`, newValue);
    }
  };

  return (
    <div className={styles.cell}>
      <input
        className={`${styles.input} ${isNumber ? styles.alignRight : ''}`}
        type={isNumber ? 'number' : 'text'}
        value={String(inputValue)}
        onChange={handleChange}
        disabled={!editable}
      />
    </div>
  );
};

export default SheetCell;

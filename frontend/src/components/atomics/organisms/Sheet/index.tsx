import styles from './Sheet.module.css';
import React from 'react';

type ColumnDef = {
  key: string;
  label: string;
  editable: boolean;
  validate?: (value: unknown) => boolean;
  render?: (value: unknown, onChange?: (newValue: unknown) => void) => React.ReactNode;
};

type SheetCellProps = {
  row: number;
  col: number;
  value: unknown;
  editable: boolean;
  validate?: (value: unknown) => boolean;
  onChange?: (value: unknown) => void;
  render?: ColumnDef['render'];
};

type SheetRowProps = {
  rowIndex: number;
  rowData: Record<string, unknown>;
  columns: ColumnDef[];
  onCellChange: (rowIndex: number, key: string, newValue: unknown) => void;
};

type SheetProps = {
  columns: ColumnDef[];
  data: Record<string, unknown>[];
  onCellChange: (rowIndex: number, key: string, newValue: unknown) => void;
};

const SheetCell = ({ row, col, value, editable, validate, onChange, render }: SheetCellProps) => {
  if (render) {
    return <div className={styles.cell}>{render(value, onChange)}</div>;
  }

  if (React.isValidElement(value)) {
    return <div className={styles.cell}>{value}</div>;
  }

  const isNumber = typeof value === 'number';
  const isBoolean = typeof value === 'boolean';
  const inputValue = value ?? '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue: unknown;
    if (isBoolean) {
      newValue = e.target.checked;
    } else if (isNumber) {
      newValue = Number(e.target.value);
    } else {
      newValue = e.target.value;
    }

    const isValid = validate ? validate(newValue) : true;

    if (isValid) {
      onChange?.(newValue);
    } else {
      console.warn(`Invalid value at ${row},${col}:`, newValue);
    }
  };

  return (
    <div className={styles.cell} role="gridcell">
      {isBoolean ? (
        <input
          type="checkbox"
          checked={Boolean(inputValue)}
          onChange={handleChange}
          disabled={!editable}
        />
      ) : (
        <input
          className={`${styles.input} ${isNumber ? styles.alignRight : ''}`}
          type={isNumber ? 'number' : 'text'}
          value={String(inputValue)}
          onChange={handleChange}
          disabled={!editable}
        />
      )}
    </div>
  );
};

const SheetRow = ({ rowIndex, rowData, columns, onCellChange }: SheetRowProps) => {
  return (
    <React.Fragment>
      {columns.map((col, colIndex) => (
        <SheetCell
          key={`${col.key}-${rowIndex}`}
          row={rowIndex}
          col={colIndex}
          value={rowData[col.key]}
          editable={col.editable}
          validate={col.validate}
          render={col.render}
          onChange={(newValue) => onCellChange(rowIndex, col.key, newValue)}
        />
      ))}
    </React.Fragment>
  );
};

const Sheet = ({ columns, data, onCellChange }: SheetProps) => {
  return (
    <div
      className={styles.container}
      style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
      role="grid"
    >
      {/* Header */}
      {columns.map((col) => (
        <div key={`header-${col.key}`} className={styles.header} role="columnheader">
          {col.label}
        </div>
      ))}

      {/* Rows */}
      {data.map((rowData, rowIndex) => (
        <SheetRow
          key={`row-${rowIndex}`}
          rowIndex={rowIndex}
          rowData={rowData}
          columns={columns}
          onCellChange={onCellChange}
        />
      ))}
    </div>
  );
};

export default Sheet;

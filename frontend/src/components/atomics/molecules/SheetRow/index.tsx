import SheetCell from '@/components/atomics/atoms/SheetCell';

type ColumnDef = {
  key: string;
  label: string;
  editable: boolean;
  validate?: (value: unknown) => boolean;
};

type SheetRowProps = {
  rowIndex: number;
  rowData: Record<string, unknown>;
  columns: ColumnDef[];
  onCellChange: (rowIndex: number, key: string, newValue: unknown) => void;
};

const SheetRow = ({ rowIndex, rowData, columns, onCellChange }: SheetRowProps) => {
  return (
    <>
      {columns.map((col, colIndex) => (
        <SheetCell
          key={`${col.key}-${rowIndex}`}
          row={rowIndex}
          col={colIndex}
          value={rowData[col.key]}
          editable={col.editable}
          validate={col.validate}
          onChange={(newValue) => onCellChange(rowIndex, col.key, newValue)}
        />
      ))}
    </>
  );
};

export default SheetRow;

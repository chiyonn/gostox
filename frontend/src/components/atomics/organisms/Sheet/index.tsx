import SheetRow from '@/components/atomics/molecules/SheetRow';
import styles from './Sheet.module.css';

type ColumnDef = {
    key: string;
    label: string;
    editable: boolean;
    validate?: () => void;
};

type SheetProps = {
    columns: ColumnDef[];
    data: Record<string, unknown>[];
    onCellChange: () => void;
};

const Sheet = ({ columns, data, onCellChange }: SheetProps) => {
    return (
        <div
            className={styles.container}
            style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
        >
            {/* Header */}
            {columns.map((col) => (
                <div key={`header-${col.key}`} className={styles.header}>
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


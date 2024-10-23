import type { FC, ReactNode } from 'react';
import './Table.css';
interface TableCellProps {
    columns: ReactNode[];
    children: ReactNode[];
}
declare const TableCell: FC<TableCellProps>;
export default TableCell;

import type { FC, ReactNode } from 'react';
interface TableCellProps {
    children: ReactNode;
    emphasis?: boolean;
    to?: string;
    shrink?: boolean;
}
declare const TableCell: FC<TableCellProps>;
export default TableCell;

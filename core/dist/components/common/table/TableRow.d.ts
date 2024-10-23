import type { FC, ReactNode } from 'react';
interface TableRowProps {
    children: ReactNode;
    className?: string;
    to?: string;
}
declare const TableRow: FC<TableRowProps>;
export default TableRow;

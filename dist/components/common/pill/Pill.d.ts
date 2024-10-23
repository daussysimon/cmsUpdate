import type { FC, ReactNode } from 'react';
import './Pill.css';
export declare const classes: Record<"error" | "disabled" | "primary" | "warning" | "info" | "success" | "default" | "root" | "no-wrap", string>;
export interface PillProps {
    children: ReactNode | ReactNode[];
    noWrap?: boolean;
    className?: string;
    disabled?: boolean;
    color?: 'default' | 'primary' | 'info' | 'warning' | 'error' | 'success';
}
declare const Pill: FC<PillProps>;
export default Pill;

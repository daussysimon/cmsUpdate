import type { FC } from 'react';
import './CircularProgress.css';
export declare const classes: Record<"md" | "svg" | "root" | "sm" | "sr-label", string>;
export interface CircularProgressProps {
    className?: string;
    'data-testid'?: string;
    size?: 'small' | 'medium';
}
declare const CircularProgress: FC<CircularProgressProps>;
export default CircularProgress;

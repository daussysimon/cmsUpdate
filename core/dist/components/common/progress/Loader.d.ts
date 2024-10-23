import type { FC } from 'react';
import './Loader.css';
export declare const classes: Record<"root", string>;
export interface LoaderProps {
    children: string | string[] | undefined;
}
declare const Loader: FC<LoaderProps>;
export default Loader;

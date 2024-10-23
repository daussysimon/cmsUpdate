import type { ViewStyle } from '@staticcms/core/constants/views';
import type { FC } from 'react';
import './ViewStyleControl.css';
export declare const classes: Record<"icon" | "button" | "root", string>;
interface ViewStyleControlPros {
    viewStyle: ViewStyle;
    onChangeViewStyle: (viewStyle: ViewStyle) => void;
}
declare const ViewStyleControl: FC<ViewStyleControlPros>;
export default ViewStyleControl;

import React from 'react';
import type { SnackbarMessage } from '@staticcms/core/store/slices/snackbars';
import './SnackbarAlert.css';
export declare const classes: Record<"message" | "error" | "icon" | "warning" | "info" | "success" | "root" | "icon-wrapper" | "close-button" | "close-button-icon" | "close-button-sr-label", string>;
interface SnackbarAlertProps {
    data: SnackbarMessage;
    onClose: () => void;
}
declare const SnackbarAlert: React.ForwardRefExoticComponent<SnackbarAlertProps & React.RefAttributes<HTMLDivElement>>;
export default SnackbarAlert;

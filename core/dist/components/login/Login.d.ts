import type { FC, MouseEventHandler, ReactNode } from 'react';
import './Login.css';
export declare const classes: Record<"error" | "button" | "root" | "custom-logo" | "static-cms-logo" | "error-icon" | "error-sr-label", string>;
export interface LoginProps {
    inProgress?: boolean;
    login: MouseEventHandler;
    icon?: FC<{
        className?: string | undefined;
    }>;
    label?: string;
    error?: ReactNode;
    disabled?: boolean;
    buttonContent?: ReactNode;
}
declare const Login: FC<LoginProps>;
export default Login;

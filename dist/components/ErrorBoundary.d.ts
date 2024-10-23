import React, { Component } from 'react';
import type { Config, TranslatedProps } from '@staticcms/core';
import type { ReactNode } from 'react';
import './ErrorBoundary.css';
export declare const classes: Record<"title" | "header" | "content" | "root" | "report-link" | "details-title" | "error-line", string>;
interface ErrorBoundaryProps {
    children: ReactNode;
    config?: Config;
    showBackup?: boolean;
}
interface ErrorBoundaryState {
    hasError: boolean;
    errorMessage: string;
    errorTitle: string;
    backup: string;
}
declare class ErrorBoundary extends Component<TranslatedProps<ErrorBoundaryProps>, ErrorBoundaryState> {
    state: ErrorBoundaryState;
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
        errorMessage: string | undefined;
        errorTitle: string;
    };
    shouldComponentUpdate(_nextProps: TranslatedProps<ErrorBoundaryProps>, nextState: ErrorBoundaryState): boolean;
    componentDidUpdate(): Promise<void>;
    render(): string | number | boolean | React.JSX.Element | Iterable<React.ReactNode> | null | undefined;
}
export default ErrorBoundary;

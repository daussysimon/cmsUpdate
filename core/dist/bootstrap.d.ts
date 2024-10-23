import 'symbol-observable';
import './components/entry-editor/widgets';
import type { AnyAction } from '@reduxjs/toolkit';
import type { ConnectedProps } from 'react-redux';
import type { BaseField, Config, UnknownField } from './interface';
import './styles/main.css';
declare const connector: import("react-redux").InferableComponentEnhancerWithProps<{
    locale: string;
    config: import("./interface").ConfigWithDefaults<UnknownField> | undefined;
} & import("react-redux").DispatchProp<AnyAction>, {}>;
export type AppRootProps = ConnectedProps<typeof connector>;
declare function bootstrap<F extends BaseField = UnknownField>(opts?: {
    config?: Config<F>;
    autoInitialize?: boolean;
}): void;
export default bootstrap;

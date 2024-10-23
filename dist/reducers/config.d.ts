import type { ConfigAction } from '../actions/config';
import type { BaseField, Config, ConfigWithDefaults, UnknownField } from '../interface';
export interface ConfigState<EF extends BaseField = UnknownField> {
    config?: ConfigWithDefaults<EF>;
    originalConfig?: Config<EF>;
    isFetching: boolean;
    error?: string;
}
declare const config: (state: ConfigState<UnknownField> | undefined, action: ConfigAction) => ConfigState;
export default config;

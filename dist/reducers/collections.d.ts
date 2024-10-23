import type { ConfigAction } from '../actions/config';
import type { BaseField, CollectionsWithDefaults, UnknownField } from '../interface';
export type CollectionsState<EF extends BaseField = UnknownField> = CollectionsWithDefaults<EF>;
declare function collections(state: CollectionsState<UnknownField> | undefined, action: ConfigAction): CollectionsState;
export default collections;

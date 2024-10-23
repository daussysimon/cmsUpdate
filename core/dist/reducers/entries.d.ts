import type { ConfigAction } from '../actions/config';
import type { EntriesAction } from '../actions/entries';
import type { SearchAction } from '../actions/search';
import type { ViewStyle } from '../constants/views';
import type { Entries, Filter, Group, Pages, Sort } from '../interface';
export type EntriesState = {
    pages: Pages;
    entries: Entries;
    sort: Sort;
    filter?: Filter;
    group?: Group;
    viewStyle: ViewStyle;
};
declare function entries(state: EntriesState | undefined, action: EntriesAction | SearchAction | ConfigAction): EntriesState;
export default entries;

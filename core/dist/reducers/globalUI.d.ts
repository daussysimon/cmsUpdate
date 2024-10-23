import type { GlobalUIAction } from '../actions/globalUI';
export type GlobalUIState = {
    isFetching: boolean;
    useOpenAuthoring: boolean;
    theme: string;
};
/**
 * Reducer for some global UI state that we want to share between components
 */
declare const globalUI: (state: GlobalUIState | undefined, action: GlobalUIAction) => GlobalUIState;
export default globalUI;

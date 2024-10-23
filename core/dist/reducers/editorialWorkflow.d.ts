import type { EditorialWorkflowAction } from '../actions/editorialWorkflow';
import type { Entries } from '../interface';
export interface EditorialWorkflowState {
    isFetching: boolean;
    ids: string[];
    entries: Entries;
}
declare function unpublishedEntries(state: EditorialWorkflowState | undefined, action: EditorialWorkflowAction): EditorialWorkflowState;
export default unpublishedEntries;

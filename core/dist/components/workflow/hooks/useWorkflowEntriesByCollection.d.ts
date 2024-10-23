import type { WorkflowStatus } from '@staticcms/core/constants/publishModes';
import type { Entry } from '@staticcms/core';
export type BoardEntry = Entry & {
    boardStatus: WorkflowStatus;
};
export default function useWorkflowEntriesByCollection(status: WorkflowStatus): Entry<import("@staticcms/core").ObjectValue>[];

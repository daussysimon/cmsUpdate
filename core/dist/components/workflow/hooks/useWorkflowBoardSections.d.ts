/// <reference types="react" />
import { WorkflowStatus } from '@staticcms/core/constants/publishModes';
import type { Entry } from '@staticcms/core';
export type BoardEntry = Entry & {
    boardStatus: WorkflowStatus;
};
export default function useWorkflowBoardSections(): {
    boardSections: Record<WorkflowStatus, Entry<import("@staticcms/core").ObjectValue>[]>;
    entriesById: Record<string, BoardEntry>;
    setBoardSections: import("react").Dispatch<import("react").SetStateAction<Record<WorkflowStatus, Entry<import("@staticcms/core").ObjectValue>[]>>>;
};

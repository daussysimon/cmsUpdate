export declare const SIMPLE = "simple";
export declare const EDITORIAL_WORKFLOW = "editorial_workflow";
export type Workflow = typeof SIMPLE | typeof EDITORIAL_WORKFLOW;
export declare enum WorkflowStatus {
    DRAFT = "draft",
    PENDING_REVIEW = "pending_review",
    PENDING_PUBLISH = "pending_publish"
}
export declare const STATUS_DESCRIPTIONS: Record<WorkflowStatus, string>;
export declare function workflowStatusFromString(status: string): WorkflowStatus | undefined;

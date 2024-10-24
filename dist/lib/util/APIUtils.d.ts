import { WorkflowStatus } from '@staticcms/core/constants/publishModes';
export declare const CMS_BRANCH_PREFIX = "cms";
export declare const DEFAULT_STATIC_CMS_LABEL_PREFIX = "static-cms/";
export declare const DEFAULT_PR_BODY = "Automatically generated by Static CMS";
export declare const MERGE_COMMIT_MESSAGE = "Automatically generated. Merged on Static CMS.";
export declare function generateContentKey(collectionName: string, slug: string): string;
export declare function parseContentKey(contentKey: string): {
    collection: string;
    slug: string;
};
export declare function isCMSLabel(label: string, labelPrefix: string): boolean;
export declare function labelToStatus(label: string, labelPrefix: string): WorkflowStatus;
export declare function statusToLabel(status: WorkflowStatus, labelPrefix: string): string;
export declare function contentKeyFromBranch(branch: string): string;
export declare function branchFromContentKey(contentKey: string): string;

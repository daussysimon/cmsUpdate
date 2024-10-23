import { PreviewState } from '@staticcms/core/constants/enums';
import { Cursor } from '@staticcms/core/lib/util';
import type { DataFile, PersistOptions, UnpublishedEntry } from '@staticcms/core';
import type { WorkflowStatus } from '@staticcms/core/constants/publishModes';
import type { ApiRequest } from '@staticcms/core/lib/util';
import type AssetProxy from '@staticcms/core/valueObjects/AssetProxy';
interface Config {
    apiRoot?: string;
    token?: string;
    branch?: string;
    repo?: string;
    requestFunction?: (req: ApiRequest) => Promise<Response>;
    hasWriteAccess?: () => Promise<boolean>;
    squashMerges: boolean;
    initialWorkflowStatus: WorkflowStatus;
    cmsLabelPrefix: string;
}
interface CommitAuthor {
    name: string;
    email: string;
}
declare enum BitBucketPullRequestState {
    MERGED = "MERGED",
    SUPERSEDED = "SUPERSEDED",
    OPEN = "OPEN",
    DECLINED = "DECLINED"
}
type BitBucketPullRequest = {
    description: string;
    id: number;
    title: string;
    state: BitBucketPullRequestState;
    updated_on: string;
    summary: {
        raw: string;
    };
    source: {
        commit: {
            hash: string;
        };
        branch: {
            name: string;
        };
    };
    destination: {
        commit: {
            hash: string;
        };
        branch: {
            name: string;
        };
    };
    author: BitBucketUser;
};
declare enum BitBucketPullRequestStatusState {
    Successful = "SUCCESSFUL",
    Failed = "FAILED",
    InProgress = "INPROGRESS",
    Stopped = "STOPPED"
}
type BitBucketPullRequestStatus = {
    uuid: string;
    name: string;
    key: string;
    refname: string;
    url: string;
    description: string;
    state: BitBucketPullRequestStatusState;
};
type BitBucketFile = {
    id: string;
    type: string;
    path: string;
    commit?: {
        hash: string;
    };
};
type BitBucketSrcResult = {
    size: number;
    page: number;
    pagelen: number;
    next: string;
    previous: string;
    values: BitBucketFile[];
};
type BitBucketUser = {
    username: string;
    display_name: string;
    nickname: string;
    links: {
        avatar: {
            href: string;
        };
    };
};
type BitBucketBranch = {
    name: string;
    target: {
        hash: string;
    };
};
export declare const API_NAME = "Bitbucket";
export default class API {
    apiRoot: string;
    branch: string;
    repo: string;
    requestFunction: (req: ApiRequest) => Promise<Response>;
    repoURL: string;
    commitAuthor?: CommitAuthor;
    mergeStrategy: string;
    initialWorkflowStatus: WorkflowStatus;
    cmsLabelPrefix: string;
    constructor(config: Config);
    buildRequest: (req: ApiRequest) => import("../../lib/util/API").ApiRequestObject;
    request: (req: ApiRequest) => Promise<Response>;
    responseToJSON: (res: Response) => Promise<any>;
    responseToBlob: (res: Response) => Promise<Blob>;
    responseToText: (res: Response) => Promise<string>;
    requestJSON: (req: ApiRequest) => Promise<any>;
    requestText: (req: ApiRequest) => Promise<string>;
    user: () => Promise<BitBucketUser>;
    hasWriteAccess: () => Promise<boolean>;
    getBranch: (branchName: string) => Promise<BitBucketBranch>;
    branchCommitSha: (branch: string) => Promise<string>;
    defaultBranchCommitSha: () => Promise<string>;
    isFile: ({ type }: BitBucketFile) => boolean;
    getFileId: (commitHash: string, path: string) => string;
    processFile: (file: BitBucketFile) => {
        id: string;
        type: string;
        path: string;
        name: string;
    };
    processFiles: (files: BitBucketFile[], folderSupport?: boolean) => {
        id: string;
        type: string;
        path: string;
        name: string;
    }[];
    readFile: (path: string, sha?: string | null, { parseText, branch, head }?: {
        parseText?: boolean | undefined;
        branch?: string | undefined;
        head?: string | undefined;
    }) => Promise<string | Blob>;
    readFileMetadata(path: string, sha: string | null | undefined): Promise<import("@staticcms/core").FileMetadata>;
    isShaExistsInBranch(branch: string, sha: string): Promise<boolean>;
    getEntriesAndCursor: (jsonResponse: BitBucketSrcResult) => {
        entries: BitBucketFile[];
        cursor: Cursor;
    };
    listFiles: (path: string, depth: number | undefined, pagelen: number, branch: string) => Promise<{
        entries: {
            id: string;
            type: string;
            path: string;
            name: string;
        }[];
        cursor: Cursor;
    }>;
    traverseCursor: (cursor: Cursor, action: string) => Promise<{
        cursor: Cursor;
        entries: {
            path: string;
            name: string;
            type: string;
            id: string;
        }[];
    }>;
    listAllFiles: (path: string, depth: number, branch: string, folderSupport?: boolean) => Promise<{
        id: string;
        type: string;
        path: string;
        name: string;
    }[]>;
    uploadFiles(files: {
        path: string;
        newPath?: string;
        delete?: boolean;
    }[], { commitMessage, branch, parentSha, }: {
        commitMessage: string;
        branch: string;
        parentSha?: string;
    }): Promise<{
        path: string;
        newPath?: string | undefined;
        delete?: boolean | undefined;
    }[]>;
    persistFiles(dataFiles: DataFile[], mediaFiles: ({
        fileObj: File;
        size: number;
        sha: string;
        raw: string;
        path: string;
    } | AssetProxy)[], options: PersistOptions): Promise<void | {
        path: string;
        newPath?: string | undefined;
        delete?: boolean | undefined;
    }[]>;
    getDifferences(source: string, destination?: string): Promise<{
        oldPath: string;
        newPath: string;
        status: string;
        newFile: boolean;
        path: string;
        binary: boolean;
    }[]>;
    deleteFiles: (paths: string[], message: string) => Promise<Response>;
    /**
     * Editorial Workflow
     */
    listUnpublishedBranches(): Promise<string[]>;
    getPullRequestLabel(id: number): Promise<string>;
    getPullRequests(sourceBranch?: string): Promise<BitBucketPullRequest[]>;
    getBranchPullRequest(branch: string): Promise<BitBucketPullRequest>;
    retrieveUnpublishedEntryData(contentKey: string): Promise<UnpublishedEntry>;
    addPullRequestComment(pullRequest: BitBucketPullRequest, comment: string): Promise<void>;
    updateUnpublishedEntryStatus(collection: string, slug: string, newStatus: WorkflowStatus): Promise<void>;
    declinePullRequest(pullRequest: BitBucketPullRequest): Promise<void>;
    deleteBranch(branch: string): Promise<void>;
    deleteUnpublishedEntry(collectionName: string, slug: string): Promise<void>;
    mergePullRequest(pullRequest: BitBucketPullRequest): Promise<void>;
    publishUnpublishedEntry(collectionName: string, slug: string): Promise<void>;
    getPullRequestStatuses(pullRequest: BitBucketPullRequest): Promise<BitBucketPullRequestStatus[]>;
    getStatuses(collectionName: string, slug: string): Promise<{
        context: string;
        state: PreviewState;
        target_url: string;
    }[]>;
    createPullRequest(branch: string, commitMessage: string, status: WorkflowStatus): Promise<void>;
    editorialWorkflowGit(files: (DataFile | AssetProxy)[], slug: string, options: PersistOptions): Promise<void>;
    getUnpublishedEntrySha(collection: string, slug: string): Promise<string>;
}
export {};

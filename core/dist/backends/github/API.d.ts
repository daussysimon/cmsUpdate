/// <reference types="@staticcms/core/types/semaphore" />
import { PreviewState } from '@staticcms/core/constants/enums';
import { WorkflowStatus } from '@staticcms/core/constants/publishModes';
import { PullRequestState } from './types';
import type { AuthScheme, DataFile, PersistOptions, UnpublishedEntry } from '@staticcms/core';
import type { ApiRequest, FetchError } from '@staticcms/core/lib/util';
import type AssetProxy from '@staticcms/core/valueObjects/AssetProxy';
import type { Semaphore } from 'semaphore';
import type { GitCreateCommitResponse, GitCreateRefResponse, GitCreateTreeParamsTree, GitCreateTreeResponse, GitHubAuthor, GitHubCommitter, GitHubCompareCommit, GitHubCompareCommits, GitHubPull, GitHubUser, GitListMatchingRefsResponseItem, GitUpdateRefResponse, PullsCreateResponse, PullsMergeResponse, PullsUpdateBranchResponse, ReposCompareCommitsResponse, ReposCompareCommitsResponseFilesItem, ReposGetBranchResponse, TreeFile } from './types';
export declare const API_NAME = "GitHub";
export declare const MOCK_PULL_REQUEST = -1;
export interface Config {
    apiRoot?: string;
    token?: string;
    authScheme?: AuthScheme;
    branch?: string;
    useOpenAuthoring?: boolean;
    openAuthoringEnabled?: boolean;
    repo?: string;
    originRepo?: string;
    squashMerges: boolean;
    initialWorkflowStatus: WorkflowStatus;
    cmsLabelPrefix: string;
}
type Override<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
type TreeEntry = Override<GitCreateTreeParamsTree, {
    sha: string | null;
}>;
interface MetaDataObjects {
    entry: {
        path: string;
        sha: string;
    };
    files: MediaFile[];
}
export interface Metadata {
    type: string;
    objects: MetaDataObjects;
    branch: string;
    status: string;
    collection: string;
    commitMessage: string;
    version?: string;
    user: string;
    title?: string;
    description?: string;
    timeStamp: string;
}
export interface BlobArgs {
    sha: string;
    repoURL: string;
    parseText: boolean;
}
type Param = string | number | undefined;
export type Options = RequestInit & {
    params?: Record<string, Param | Record<string, Param> | string[]>;
};
type MediaFile = {
    sha: string;
    path: string;
};
export type Diff = {
    path: string;
    newFile: boolean;
    sha: string;
    binary: boolean;
};
export default class API {
    apiRoot: string;
    token: string;
    authScheme: AuthScheme;
    branch: string;
    useOpenAuthoring?: boolean;
    openAuthoringEnabled?: boolean;
    repo: string;
    originRepo: string;
    repoOwner: string;
    repoName: string;
    originRepoOwner: string;
    originRepoName: string;
    repoURL: string;
    originRepoURL: string;
    mergeMethod: string;
    initialWorkflowStatus: WorkflowStatus;
    cmsLabelPrefix: string;
    _userPromise?: Promise<GitHubUser>;
    _metadataSemaphore?: Semaphore;
    commitAuthor?: {};
    constructor(config: Config);
    static DEFAULT_COMMIT_MESSAGE: string;
    user(): Promise<{
        name: string;
        login: string;
    }>;
    getUser(): Promise<GitHubUser>;
    hasWriteAccess(): Promise<boolean>;
    reset(): void;
    requestHeaders(headers?: {}): Promise<Record<string, string>>;
    parseJsonResponse(response: Response): Promise<any>;
    urlFor(path: string, options: Options): string;
    parseResponse(response: Response): Promise<any>;
    handleRequestError(error: FetchError, responseStatus: number): void;
    buildRequest(req: ApiRequest): ApiRequest;
    request(path: string, options?: Options, parser?: (response: Response) => Promise<any>): Promise<any>;
    nextUrlProcessor(): (url: string) => string;
    requestAllPages<T>(url: string, options?: Options): Promise<T[]>;
    generateContentKey(collectionName: string, slug: string): string;
    getContentKeySlug(contentKey: string): string;
    parseContentKey(contentKey: string): {
        collection: string;
        slug: string;
    };
    readFile(path: string, sha?: string | null, { branch, repoURL, parseText, }?: {
        branch?: string;
        repoURL?: string;
        parseText?: boolean;
    }): Promise<string | Blob>;
    readFileMetadata(path: string, sha: string | null | undefined): Promise<import("@staticcms/core").FileMetadata>;
    fetchBlobContent({ sha, repoURL, parseText }: BlobArgs): Promise<string | Blob>;
    listFiles(path: string, { repoURL, branch, depth }?: {
        repoURL?: string | undefined;
        branch?: string | undefined;
        depth?: number | undefined;
    }, folderSupport?: boolean): Promise<{
        type: string;
        id: string;
        name: string;
        path: string;
        size: number;
    }[]>;
    persistFiles(dataFiles: DataFile[], mediaFiles: AssetProxy[], options: PersistOptions): Promise<GitUpdateRefResponse | undefined>;
    getFileSha(path: string, { repoURL, branch }?: {
        repoURL?: string | undefined;
        branch?: string | undefined;
    }): Promise<string>;
    deleteFiles(paths: string[], message: string): Promise<undefined>;
    createRef(type: string, name: string, sha: string): Promise<GitCreateRefResponse>;
    patchRef(type: string, name: string, sha: string, opts?: {
        force?: boolean;
    }): Promise<GitUpdateRefResponse>;
    deleteRef(type: string, name: string): Promise<any>;
    getDefaultBranch(): Promise<ReposGetBranchResponse>;
    assertCmsBranch(branchName: string): boolean;
    patchBranch(branchName: string, sha: string, opts?: {
        force?: boolean;
    }): Promise<GitUpdateRefResponse>;
    getHeadReference(head: string): Promise<string>;
    toBase64(str: string): Promise<string>;
    uploadBlob(item: {
        raw?: string;
        sha?: string;
        toBase64?: () => Promise<string>;
    }): Promise<{
        raw?: string | undefined;
        sha?: string | undefined;
        toBase64?: (() => Promise<string>) | undefined;
    }>;
    updateTree(baseSha: string, files: {
        path: string;
        sha: string | null;
        newPath?: string;
    }[], branch?: string): Promise<{
        parentSha: string;
        sha: string;
        tree: {
            mode: string;
            path: string;
            sha: string;
            size: number;
            type: string;
            url: string;
        }[];
        url: string;
    }>;
    createTree(baseSha: string, tree: TreeEntry[]): Promise<GitCreateTreeResponse>;
    commit(message: string, changeTree: {
        parentSha?: string;
        sha: string;
    }): Promise<GitCreateCommitResponse>;
    createCommit(message: string, treeSha: string, parents: string[], author?: GitHubAuthor, committer?: GitHubCommitter): Promise<GitCreateCommitResponse>;
    /**
     * Editorial Workflow
     */
    listUnpublishedBranches(): Promise<string[]>;
    getOpenAuthoringBranches(): Promise<GitListMatchingRefsResponseItem[]>;
    filterOpenAuthoringBranches: (branch: string) => Promise<{
        branch: string;
        filter: boolean;
    }>;
    getPullRequests(head: string | undefined, state: PullRequestState, predicate: (pr: GitHubPull) => boolean): Promise<GitHubPull[]>;
    deleteBranch(branchName: string): Promise<any>;
    getBranchPullRequest(branch: string): Promise<GitHubPull>;
    getOpenAuthoringPullRequest(branch: string, pullRequests: GitHubPull[]): Promise<GitHubPull>;
    getBranch(branch: string): Promise<ReposGetBranchResponse>;
    retrieveUnpublishedEntryData(contentKey: string): Promise<UnpublishedEntry>;
    getDifferences(from: string, to: string): Promise<ReposCompareCommitsResponse>;
    getPullRequestAuthor(pullRequest: GitHubPull): Promise<string | undefined>;
    diffFromFile(diff: ReposCompareCommitsResponseFilesItem): Promise<Diff>;
    publishUnpublishedEntry(collectionName: string, slug: string): Promise<void>;
    mergePR(pullrequest: GitHubPull): Promise<GitUpdateRefResponse | PullsMergeResponse>;
    forceMergePR(pullRequest: GitHubPull): Promise<GitUpdateRefResponse>;
    deleteUnpublishedEntry(collectionName: string, slug: string): Promise<void>;
    closePR(number: number): Promise<PullsUpdateBranchResponse>;
    updatePullRequestLabels(number: number, labels: string[]): Promise<void>;
    setPullRequestStatus(pullRequest: GitHubPull, newStatus: WorkflowStatus): Promise<void>;
    createPR(title: string, head: string): Promise<PullsCreateResponse>;
    openPR(number: number): Promise<PullsUpdateBranchResponse>;
    updateUnpublishedEntryStatus(collectionName: string, slug: string, newStatus: WorkflowStatus): Promise<void>;
    /**
     * Retrieve statuses for a given SHA. Unrelated to the editorial workflow
     * concept of entry "status". Useful for things like deploy preview links.
     */
    getStatuses(collectionName: string, slug: string): Promise<{
        context: string;
        target_url: string;
        state: PreviewState;
    }[]>;
    editorialWorkflowGit(files: TreeFile[], slug: string, mediaFilesList: MediaFile[], options: PersistOptions): Promise<GitUpdateRefResponse | undefined>;
    backupBranch(branchName: string): Promise<void>;
    createBranch(branchName: string, sha: string): Promise<GitCreateRefResponse>;
    createBranchAndPullRequest(branchName: string, sha: string, commitMessage: string): Promise<PullsCreateResponse>;
    /**
     * Rebase an array of commits one-by-one, starting from a given base SHA
     */
    rebaseCommits(baseCommit: GitHubCompareCommit, commits: GitHubCompareCommits): Promise<{
        author: {
            avatar_url: string;
            events_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string;
            html_url: string;
            id: number;
            login: string;
            node_id: string;
            organizations_url: string;
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            type: string;
            url: string;
        };
        comments_url: string;
        commit: {
            author: {
                date: string;
                email: string;
                name: string;
            };
            comment_count: number;
            committer: {
                date: string;
                email: string;
                name: string;
            };
            message: string;
            tree: {
                sha: string;
                url: string;
            };
            url: string;
            verification: {
                payload: null;
                reason: string;
                signature: null;
                verified: boolean;
            };
        };
        committer: {
            avatar_url: string;
            events_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string;
            html_url: string;
            id: number;
            login: string;
            node_id: string;
            organizations_url: string;
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            type: string;
            url: string;
        };
        html_url: string;
        node_id: string;
        parents: {
            sha: string;
            url: string;
        }[];
        sha: string;
        url: string;
    }>;
    rebaseSingleCommit(baseCommit: GitHubCompareCommit, commit: GitHubCompareCommit): Promise<{
        author: {
            avatar_url: string;
            events_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string;
            html_url: string;
            id: number;
            login: string;
            node_id: string;
            organizations_url: string;
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            type: string;
            url: string;
        };
        comments_url: string;
        commit: {
            author: {
                date: string;
                email: string;
                name: string;
            };
            comment_count: number;
            committer: {
                date: string;
                email: string;
                name: string;
            };
            message: string;
            tree: {
                sha: string;
                url: string;
            };
            url: string;
            verification: {
                payload: null;
                reason: string;
                signature: null;
                verified: boolean;
            };
        };
        committer: {
            avatar_url: string;
            events_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string;
            html_url: string;
            id: number;
            login: string;
            node_id: string;
            organizations_url: string;
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            type: string;
            url: string;
        };
        html_url: string;
        node_id: string;
        parents: {
            sha: string;
            url: string;
        }[];
        sha: string;
        url: string;
    }>;
    rebaseBranch(branch: string): Promise<{
        author: {
            avatar_url: string;
            events_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string;
            html_url: string;
            id: number;
            login: string;
            node_id: string;
            organizations_url: string;
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            type: string;
            url: string;
        };
        comments_url: string;
        commit: {
            author: {
                date: string;
                email: string;
                name: string;
            };
            comment_count: number;
            committer: {
                date: string;
                email: string;
                name: string;
            };
            message: string;
            tree: {
                sha: string;
                url: string;
            };
            url: string;
            verification: {
                payload: null;
                reason: string;
                signature: null;
                verified: boolean;
            };
        };
        committer: {
            avatar_url: string;
            events_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string;
            html_url: string;
            id: number;
            login: string;
            node_id: string;
            organizations_url: string;
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            type: string;
            url: string;
        };
        html_url: string;
        node_id: string;
        parents: {
            sha: string;
            url: string;
        }[];
        sha: string;
        url: string;
    }>;
    getUnpublishedEntrySha(collection: string, slug: string): Promise<string>;
}
export {};

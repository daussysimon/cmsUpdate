export declare function useOpenAuthoring(): {
    readonly type: "USE_OPEN_AUTHORING";
};
export declare function changeTheme(theme: string): {
    readonly type: "THEME_CHANGE";
    readonly payload: string;
};
export type GlobalUIAction = ReturnType<typeof changeTheme | typeof useOpenAuthoring>;

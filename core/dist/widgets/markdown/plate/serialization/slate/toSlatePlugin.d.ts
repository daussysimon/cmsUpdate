import type { ShortcodeConfig } from '@staticcms/core';
import type { Plugin } from 'unified';
import type { MdastNode } from './ast-types';
export interface ToSlatePluginOptions {
    shortcodeConfigs: Record<string, ShortcodeConfig>;
    useMdx: boolean;
}
export declare const slateCompiler: ({ shortcodeConfigs, useMdx }: ToSlatePluginOptions) => (node: MdastNode) => (MdastNode[] | import("@staticcms/core").TextNode | import("@staticcms/core").CodeBlockNode | import("@staticcms/core").HeadingNode | import("@staticcms/core").ListNode | import("@staticcms/core").ListItemNode | import("@staticcms/core").ListItemContentNode | import("@staticcms/core").ParagraphNode | import("@staticcms/core").LinkNode | import("@staticcms/core").ImageNode | import("@staticcms/core").BlockQuoteNode | import("@staticcms/core").InlineCodeMarkNode | import("@staticcms/core").ThematicBreakNode | import("@staticcms/core").ItalicNode | import("@staticcms/core").SuperscriptNode | import("@staticcms/core").SubscriptNode | import("@staticcms/core").UnderlineNode | import("@staticcms/core").BoldNode | import("@staticcms/core").StrikeThoughNode | import("@staticcms/core").InlineCodeNode | import("@staticcms/core").DeserializedNode[] | {
    type: string;
    children: {
        text: string;
    }[];
} | {
    title?: string | null | undefined;
    value?: string | undefined;
    alt?: string | undefined;
    depth?: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    meta?: null | undefined;
    url?: string | undefined;
    align?: (string | null)[] | undefined;
    lang?: string | null | undefined;
    checked?: any;
    start?: number | null | undefined;
    position?: any;
    indent?: any;
    ordered?: boolean | undefined;
    spread?: any;
    text: string;
    bold: boolean;
    type?: undefined;
    children?: undefined;
} | {
    title?: string | null | undefined;
    value?: string | undefined;
    alt?: string | undefined;
    depth?: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    meta?: null | undefined;
    url?: string | undefined;
    align?: (string | null)[] | undefined;
    lang?: string | null | undefined;
    checked?: any;
    start?: number | null | undefined;
    position?: any;
    indent?: any;
    ordered?: boolean | undefined;
    spread?: any;
    text: string;
    strikethrough: boolean;
    type?: undefined;
    children?: undefined;
} | {
    title?: string | null | undefined;
    value?: string | undefined;
    alt?: string | undefined;
    depth?: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    meta?: null | undefined;
    url?: string | undefined;
    align?: (string | null)[] | undefined;
    lang?: string | null | undefined;
    checked?: any;
    start?: number | null | undefined;
    position?: any;
    indent?: any;
    ordered?: boolean | undefined;
    spread?: any;
    code: boolean;
    text: string | undefined;
    type?: undefined;
    children?: undefined;
} | {
    type: "table";
    children: import("@staticcms/core").DeserializedNode[];
} | {
    type: "tr";
    children: import("@staticcms/core").DeserializedNode[];
} | {
    type: "td" | "th";
    children: {
        type: "p";
        children: import("@staticcms/core").DeserializedNode[];
    }[];
})[];
declare const toSlatePlugin: (options: ToSlatePluginOptions) => Plugin;
export default toSlatePlugin;

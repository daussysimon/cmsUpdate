import type { ShortcodeConfig } from '@staticcms/core';
import type { BlockQuoteNode, CodeBlockNode, DeserializedNode, HeadingNode, ImageNode, ItalicNode, LinkNode, ListItemNode, ListNode, MdastNode, ParagraphNode, TextNode, ThematicBreakNode } from './ast-types';
export interface Options {
    isInTable?: boolean;
    isInLink?: boolean;
    isInTableHeaderRow?: boolean;
    isInBlockquote?: boolean;
    isInList?: boolean;
    tableAlign?: (string | null)[];
    useMdx: boolean;
    shortcodeConfigs: Record<string, ShortcodeConfig>;
    index: number;
}
export default function deserializeMarkdown(node: MdastNode, options: Options): MdastNode[] | TextNode | CodeBlockNode | HeadingNode | ListNode | ListItemNode | import("@staticcms/core").ListItemContentNode | ParagraphNode | LinkNode | ImageNode | BlockQuoteNode | import("@staticcms/core").InlineCodeMarkNode | ThematicBreakNode | ItalicNode | import("@staticcms/core").SuperscriptNode | import("@staticcms/core").SubscriptNode | import("@staticcms/core").UnderlineNode | import("@staticcms/core").BoldNode | import("@staticcms/core").StrikeThoughNode | import("@staticcms/core").InlineCodeNode | DeserializedNode[] | {
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
    children: DeserializedNode[];
} | {
    type: "tr";
    children: DeserializedNode[];
} | {
    type: "td" | "th";
    children: {
        type: "p";
        children: DeserializedNode[];
    }[];
};

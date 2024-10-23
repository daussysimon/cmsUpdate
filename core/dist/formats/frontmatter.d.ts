import FileFormatter from './FileFormatter';
import type { ConfigWithDefaults } from '../interface';
declare const Languages: {
    readonly YAML: "yaml";
    readonly TOML: "toml";
    readonly JSON: "json";
};
type Language = (typeof Languages)[keyof typeof Languages];
export type Delimiter = string | [string, string];
type Format = {
    language: Language;
    delimiters: Delimiter;
};
export declare function getFormatOpts(format?: Language, customDelimiter?: Delimiter): {
    language: Language;
    delimiters: Delimiter;
} | undefined;
export declare class FrontmatterFormatter extends FileFormatter {
    name: string;
    format?: Format;
    constructor(format?: Language, customDelimiter?: Delimiter);
    fromFile(content: string, config: ConfigWithDefaults): {
        body?: string | undefined;
    };
    toFile(data: {
        body?: string;
    } & Record<string, unknown>, config: ConfigWithDefaults, sortedKeys?: string[], comments?: Record<string, string>): string;
}
export declare const FrontmatterInfer: FrontmatterFormatter;
export declare function frontmatterTOML(customDelimiter?: Delimiter): FrontmatterFormatter;
export declare function frontmatterYAML(customDelimiter?: Delimiter): FrontmatterFormatter;
export declare function frontmatterJSON(customDelimiter?: Delimiter): FrontmatterFormatter;
export {};

import FileFormatter from './FileFormatter';
import type { ConfigWithDefaults } from '../interface';
declare class YamlFormatter extends FileFormatter {
    name: string;
    fromFile(content: string, config: ConfigWithDefaults): any;
    toFile(data: object, config: ConfigWithDefaults, sortedKeys?: string[], comments?: Record<string, string>): string;
}
declare const _default: YamlFormatter;
export default _default;

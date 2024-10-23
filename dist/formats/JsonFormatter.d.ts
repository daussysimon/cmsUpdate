import FileFormatter from './FileFormatter';
declare class JsonFormatter extends FileFormatter {
    name: string;
    fromFile(content: string): any;
    toFile(data: object): string;
}
declare const _default: JsonFormatter;
export default _default;

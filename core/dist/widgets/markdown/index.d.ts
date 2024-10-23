/// <reference types="react" />
import previewComponent from './MarkdownPreview';
import schema from './schema';
import type { MarkdownField, WidgetParam } from '@staticcms/core';
declare const controlComponent: import("react").FC<import("@staticcms/core").WidgetControlProps<string, MarkdownField, import("@staticcms/core").ObjectValue>>;
declare const MarkdownWidget: () => WidgetParam<string, MarkdownField>;
export * from './plate';
export { controlComponent as MarkdownControl, previewComponent as MarkdownPreview, schema as MarkdownSchema, };
export default MarkdownWidget;

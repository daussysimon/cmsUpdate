import schema from './schema';
import controlComponent from './TextControl';
import previewComponent from './TextPreview';
import type { TextField, WidgetParam } from '@staticcms/core';
declare const TextWidget: () => WidgetParam<string, TextField>;
export { controlComponent as TextControl, previewComponent as TextPreview, schema as textSchema };
export default TextWidget;

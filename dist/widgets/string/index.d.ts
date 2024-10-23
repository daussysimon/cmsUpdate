import schema from './schema';
import controlComponent from './StringControl';
import previewComponent from './StringPreview';
import type { StringField, WidgetParam } from '@staticcms/core';
declare const StringWidget: () => WidgetParam<string, StringField>;
export { controlComponent as StringControl, previewComponent as StringPreview, schema as stringSchema, };
export default StringWidget;

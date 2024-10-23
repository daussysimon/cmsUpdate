import type { CollectionWithDefaults, Entry, MarkdownField, WidgetControlProps } from '@staticcms/core';
import type { FC } from 'react';
import type { MdValue } from './plateTypes';
export interface PlateEditorProps {
    initialValue: MdValue;
    collection: CollectionWithDefaults<MarkdownField>;
    entry: Entry;
    field: MarkdownField;
    useMdx: boolean;
    controlProps: WidgetControlProps<string, MarkdownField>;
    onChange: (value: MdValue) => void;
    onFocus: () => void;
    onBlur: () => void;
}
declare const PlateEditor: FC<PlateEditorProps>;
export default PlateEditor;

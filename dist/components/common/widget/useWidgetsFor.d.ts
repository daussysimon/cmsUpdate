import type { CollectionWithDefaults, ConfigWithDefaults, Entry, EntryData, Field, WidgetFor, WidgetsFor } from '@staticcms/core';
export default function useWidgetsFor(config: ConfigWithDefaults | undefined, collection: CollectionWithDefaults, fields: Field[], entry: Entry, data?: EntryData): {
    widgetFor: WidgetFor;
    widgetsFor: WidgetsFor;
};

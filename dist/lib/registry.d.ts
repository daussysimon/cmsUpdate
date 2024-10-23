import type { AdditionalLink, AuthorData, BackendClass, BackendInitializer, BackendInitializerOptions, BaseField, ChangeEventListener, CollectionWithDefaults, ConfigWithDefaults, CustomIcon, Entry, EntryData, EventData, EventListener, FieldPreviewComponent, LoginEventListener, LogoutEventListener, MountedEventListener, ObjectValue, PartialTheme, PostPublishEventListener, PostSaveEventListener, PrePublishEventListener, PreSaveEventListener, PreviewStyle, PreviewStyleOptions, ShortcodeConfig, TemplatePreviewCardComponent, TemplatePreviewComponent, Theme, UnknownField, Widget, WidgetOptions, WidgetParam, WidgetValueSerializer } from '../interface';
import type { LocalePhrasesRoot } from '../locales/types';
export declare const allowedEvents: readonly ["mounted", "login", "logout", "prePublish", "postPublish", "preSave", "postSave", "change"];
export type AllowedEvent = (typeof allowedEvents)[number];
export interface CollectionListener<T> {
    all: T[];
    collections: Record<string, T[]>;
    files: Record<string, Record<string, T[]>>;
}
export interface ChangeListener extends CollectionListener<ChangeEventListener['handler']> {
    collectionField: Record<string, Record<string, ChangeEventListener['handler'][]>>;
    fileField: Record<string, Record<string, Record<string, ChangeEventListener['handler'][]>>>;
}
export type EventHandlerRegistry = {
    prePublish: CollectionListener<PrePublishEventListener['handler']>;
    postPublish: CollectionListener<PostPublishEventListener['handler']>;
    preSave: CollectionListener<PreSaveEventListener['handler']>;
    postSave: CollectionListener<PostSaveEventListener['handler']>;
    mounted: MountedEventListener['handler'][];
    login: LoginEventListener['handler'][];
    logout: LogoutEventListener['handler'][];
    change: ChangeListener;
};
interface CardPreviews {
    component: TemplatePreviewCardComponent<ObjectValue>;
    getHeight?: (data: {
        collection: CollectionWithDefaults;
        entry: Entry;
    }) => number;
}
declare const _default: {
    registerPreviewTemplate: typeof registerPreviewTemplate;
    getPreviewTemplate: typeof getPreviewTemplate;
    registerPreviewCard: typeof registerPreviewCard;
    getPreviewCard: typeof getPreviewCard;
    registerFieldPreview: typeof registerFieldPreview;
    getFieldPreview: typeof getFieldPreview;
    registerWidget: typeof registerWidget;
    getWidget: typeof getWidget;
    getWidgets: typeof getWidgets;
    resolveWidget: typeof resolveWidget;
    registerWidgetValueSerializer: typeof registerWidgetValueSerializer;
    getWidgetValueSerializer: typeof getWidgetValueSerializer;
    registerBackend: typeof registerBackend;
    getBackend: typeof getBackend;
    registerLocale: typeof registerLocale;
    getLocale: typeof getLocale;
    registerEventListener: typeof registerEventListener;
    removeEventListener: typeof removeEventListener;
    getEventListeners: typeof getEventListeners;
    invokeEvent: typeof invokeEvent;
    registerIcon: typeof registerIcon;
    getIcon: typeof getIcon;
    registerAdditionalLink: typeof registerAdditionalLink;
    getAdditionalLinks: typeof getAdditionalLinks;
    registerPreviewStyle: typeof registerPreviewStyle;
    getPreviewStyles: typeof getPreviewStyles;
    registerShortcode: typeof registerShortcode;
    getShortcode: typeof getShortcode;
    getShortcodes: typeof getShortcodes;
    registerTheme: typeof registerTheme;
    getThemes: typeof getThemes;
};
export default _default;
/**
 * Preview Styles
 *
 * Valid options:
 *  - raw {boolean} if `true`, `style` value is expected to be a CSS string
 */
export declare function registerPreviewStyle(style: string, { raw }?: PreviewStyleOptions): void;
export declare function getPreviewStyles(): PreviewStyle[];
/**
 * Preview Templates
 */
export declare function registerPreviewTemplate<T, EF extends BaseField = UnknownField>(name: string, component: TemplatePreviewComponent<T, EF>): void;
export declare function getPreviewTemplate(name: string): TemplatePreviewComponent<ObjectValue> | null;
/**
 * Preview Cards
 */
export declare function registerPreviewCard<T, EF extends BaseField = UnknownField>(name: string, component: TemplatePreviewCardComponent<T, EF>, getHeight?: () => number): void;
export declare function getPreviewCard(name: string): CardPreviews | null;
/**
 * Field Previews
 */
export declare function registerFieldPreview<T, F extends BaseField = UnknownField>(collectionName: string, fieldName: string, component: FieldPreviewComponent<T, F>): void;
export declare function getFieldPreview(collectionName: string, fieldName: string): FieldPreviewComponent | null;
/**
 * Editor Widgets
 */
export declare function registerWidget(widgets: WidgetParam<any, any>[]): void;
export declare function registerWidget(widget: WidgetParam): void;
export declare function registerWidget<T = unknown, F extends BaseField = UnknownField>(name: string, control: string | Widget<T, F>['control'], preview?: Widget<T, F>['preview'], options?: WidgetOptions<T, F>): void;
export declare function getWidget<T = unknown, EF extends BaseField = UnknownField>(name: string): Widget<T, EF>;
export declare function getWidgets(): ({
    name: string;
} & Widget<unknown>)[];
export declare function resolveWidget<T = unknown, EF extends BaseField = UnknownField>(name?: string): Widget<T, EF>;
/**
 * Widget Serializers
 */
export declare function registerWidgetValueSerializer(widgetName: string, serializer: WidgetValueSerializer): void;
export declare function getWidgetValueSerializer(widgetName: string): WidgetValueSerializer | undefined;
/**
 * Backends
 */
export declare function registerBackend<T extends {
    new (config: ConfigWithDefaults, options: BackendInitializerOptions): BackendClass;
}>(name: string, BackendClass: T): void;
export declare function getBackend<EF extends BaseField = UnknownField>(name: string): BackendInitializer<EF>;
export declare function getEventListeners<T extends EventListener['handler']>(options: {
    name: AllowedEvent;
    collection?: string;
    file?: string;
    field?: string;
}): T[];
export declare function registerEventListener(listener: EventListener): void;
export declare function invokeEvent(event: {
    name: 'login';
    data: AuthorData;
}): Promise<void>;
export declare function invokeEvent(event: {
    name: 'logout';
}): Promise<void>;
export declare function invokeEvent(event: {
    name: 'prePublish';
    data: EventData;
    collection: string;
    file?: string;
}): Promise<void>;
export declare function invokeEvent(event: {
    name: 'postPublish';
    data: EventData;
    collection: string;
    file?: string;
}): Promise<void>;
export declare function invokeEvent(event: {
    name: 'preSave';
    data: EventData;
    collection: string;
    file?: string;
}): Promise<EntryData>;
export declare function invokeEvent(event: {
    name: 'postSave';
    data: EventData;
    collection: string;
    file?: string;
}): Promise<void>;
export declare function invokeEvent(event: {
    name: 'mounted';
}): Promise<void>;
export declare function invokeEvent(event: {
    name: 'change';
    data: EntryData | undefined;
    collection: string;
    file?: string;
    fieldName: string;
    field: string;
}): Promise<EntryData>;
export declare function removeEventListener(listener: EventListener): void;
/**
 * Locales
 */
export declare function registerLocale(locale: string, phrases: LocalePhrasesRoot): void;
export declare function getLocale(locale: string): LocalePhrasesRoot | undefined;
/**
 * Icons
 */
export declare function registerIcon(name: string, icon: CustomIcon): void;
export declare function getIcon(name: string): CustomIcon | null;
/**
 * Additional Links
 */
export declare function registerAdditionalLink(link: AdditionalLink): void;
export declare function getAdditionalLinks(): Record<string, AdditionalLink>;
export declare function getAdditionalLink(id: string): AdditionalLink | undefined;
/**
 * Markdown editor shortcodes
 */
export declare function registerShortcode<P = {}>(name: string, config: ShortcodeConfig<P>): void;
export declare function getShortcode(name: string): ShortcodeConfig;
export declare function getShortcodes(): Record<string, ShortcodeConfig>;
/**
 * Markdown editor shortcodes
 */
export declare function registerTheme(theme: Theme | PartialTheme): void;
export declare function getThemes(): (Theme | PartialTheme)[];

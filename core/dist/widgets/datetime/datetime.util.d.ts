import type { DateTimeField, DateTimeFormats } from '@staticcms/core';
import type { Locale } from 'date-fns/locale';
export declare function getDatetimeFormats(field: DateTimeField): DateTimeFormats;
export declare function getDatetimeFormats(field: DateTimeField | undefined): DateTimeFormats | undefined;
export declare function useDatetimeFormats(field: DateTimeField): DateTimeFormats;
export declare function useDatetimeFormats(field: DateTimeField | undefined): DateTimeFormats | undefined;
export declare function getDateFnsLocale(locale: string): Locale;

import type { WidgetPreviewComponent, WidgetPreviewProps } from '@staticcms/core';
import type { FC } from 'react';
interface PreviewHOCProps extends Omit<WidgetPreviewProps, 'widgetFor'> {
    previewComponent: WidgetPreviewComponent;
}
declare const PreviewHOC: FC<PreviewHOCProps>;
export default PreviewHOC;

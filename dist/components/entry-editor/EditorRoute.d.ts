import type { CollectionsWithDefaults } from '@staticcms/core';
import type { FC } from 'react';
interface EditorRouteProps {
    newRecord?: boolean;
    collections: CollectionsWithDefaults;
}
declare const EditorRoute: FC<EditorRouteProps>;
export default EditorRoute;

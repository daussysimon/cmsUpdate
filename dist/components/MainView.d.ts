import type { FC, ReactNode } from 'react';
import type { Breadcrumb, CollectionWithDefaults } from '../interface';
import './MainView.css';
export declare const classes: Record<"body" | "root" | "show-left-nav" | "no-margin" | "no-scroll", string>;
interface MainViewProps {
    breadcrumbs?: Breadcrumb[];
    showQuickCreate?: boolean;
    navbarActions?: ReactNode;
    showLeftNav?: boolean;
    noMargin?: boolean;
    noScroll?: boolean;
    children: ReactNode;
    collection?: CollectionWithDefaults;
}
declare const MainView: FC<MainViewProps>;
export default MainView;

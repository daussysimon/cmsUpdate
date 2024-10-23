import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import type { FC, MouseEvent, ReactNode } from 'react';
import './ListItemWrapper.css';
export interface DragHandleProps {
    listeners: SyntheticListenerMap | undefined;
    disabled: boolean;
}
export interface ListItemWrapperProps {
    className?: string;
    label: string;
    summary: string;
    collapsed?: boolean;
    onRemove: (event: MouseEvent) => void;
    listeners: SyntheticListenerMap | undefined;
    hasErrors: boolean;
    children: ReactNode;
    isSingleField: boolean;
    disabled: boolean;
}
declare const ListItemWrapper: FC<ListItemWrapperProps>;
export default ListItemWrapper;

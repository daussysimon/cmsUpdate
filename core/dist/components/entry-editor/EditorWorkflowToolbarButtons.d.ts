import { WorkflowStatus } from '@staticcms/core/constants/publishModes';
import type { FC } from 'react';
import './EditorWorkflowToolbarButtons.css';
export interface EditorWorkflowToolbarButtonsProps {
    hasChanged: boolean;
    isPersisting: boolean;
    onPersist: () => void;
    currentStatus: WorkflowStatus | undefined;
    isUpdatingStatus: boolean;
    onChangeStatus: (status: WorkflowStatus) => void;
    disabled: boolean;
    isLoading: boolean;
    mobile?: boolean;
    useOpenAuthoring: boolean;
}
declare const EditorWorkflowToolbarButtons: FC<EditorWorkflowToolbarButtonsProps>;
export default EditorWorkflowToolbarButtons;

import type { WorkflowStatus } from '@staticcms/core/constants/publishModes';
import type { Entry } from '@staticcms/core';
import type { FC } from 'react';
import './WorkflowColumn.css';
interface WorkflowColumnProps {
    entries: Entry[];
    status: WorkflowStatus;
    dragging: boolean;
    useOpenAuthoring: boolean;
}
declare const WorkflowColumn: FC<WorkflowColumnProps>;
export default WorkflowColumn;

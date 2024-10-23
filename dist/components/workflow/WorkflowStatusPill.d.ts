import { WorkflowStatus } from '@staticcms/core/constants/publishModes';
import type { FC } from 'react';
export interface WorkflowStatusPillProps {
    status: WorkflowStatus | undefined;
    className?: string;
}
declare const WorkflowStatusPill: FC<WorkflowStatusPillProps>;
export default WorkflowStatusPill;

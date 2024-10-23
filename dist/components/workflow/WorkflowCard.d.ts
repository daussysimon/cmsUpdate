import type { Entry } from '@staticcms/core';
import type { FC } from 'react';
import './WorkflowCard.css';
export interface WorkflowCardProps {
    entry: Entry;
    useOpenAuthoring: boolean;
}
declare const WorkflowCard: FC<WorkflowCardProps>;
export default WorkflowCard;

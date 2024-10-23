import type { CollectionWithDefaults } from '@staticcms/core';
import type { TreeNodeData } from '@staticcms/core/lib/util/nested.util';
import type { FC } from 'react';
import './NestedCollection.css';
export declare const classes: Record<"link" | "root" | "active" | "expanded" | "root-node" | "root-node-icon" | "node" | "node-icon" | "node-content" | "node-children-icon" | "node-children", string>;
export declare function walk(treeData: TreeNodeData[], callback: (node: TreeNodeData) => void): void;
export declare function updateNode(treeData: TreeNodeData[], node: TreeNodeData, callback: (node: TreeNodeData) => TreeNodeData): TreeNodeData[];
export interface NestedCollectionProps {
    collection: CollectionWithDefaults;
    filterTerm: string;
}
declare const NestedCollection: FC<NestedCollectionProps>;
export default NestedCollection;

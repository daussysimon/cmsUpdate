import type { ValueOrNestedValue } from '@staticcms/core';
import type { FC } from 'react';
export interface DataProps {
    path: string;
    value: ValueOrNestedValue;
}
declare const Data: FC<DataProps>;
export default Data;

import type { SelectField, WidgetControlProps } from '@staticcms/core';
import type { FC } from 'react';
import './SelectControl.css';
declare const SelectControl: FC<WidgetControlProps<string | number | (string | number)[], SelectField>>;
export default SelectControl;

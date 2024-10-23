import type { FC } from 'react';
import './InlineEditTextField.css';
export declare const classes: Record<"label" | "preview" | "input" | "root" | "editable", string>;
interface InlineEditTextFieldProps {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}
declare const InlineEditTextField: FC<InlineEditTextFieldProps>;
export default InlineEditTextField;

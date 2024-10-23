import type { FC } from 'react';
import type { MenuProps } from '../common/menu/Menu';
export type QuickCreateProps = Pick<MenuProps, 'rootClassName' | 'buttonClassName' | 'hideDropdownIcon' | 'hideLabel' | 'variant'>;
declare const QuickCreate: FC<QuickCreateProps>;
export default QuickCreate;

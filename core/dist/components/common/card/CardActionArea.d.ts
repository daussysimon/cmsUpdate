import type { FC, MouseEvent, ReactNode } from 'react';
interface BaseCardActionAreaProps {
    children: ReactNode;
    className?: string;
}
interface CardActionAreaPropsLink extends BaseCardActionAreaProps {
    to: string;
}
interface CardActionAreaPropsButton extends BaseCardActionAreaProps {
    onClick: (event: MouseEvent) => void;
}
export type CardActionAreaProps = CardActionAreaPropsLink | CardActionAreaPropsButton;
declare const CardActionArea: FC<CardActionAreaProps>;
export default CardActionArea;

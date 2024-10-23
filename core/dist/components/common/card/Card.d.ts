import type { FC, ReactNode } from 'react';
import './Card.css';
interface CardProps {
    children: ReactNode | ReactNode[];
    className?: string;
    title?: string;
}
declare const Card: FC<CardProps>;
export default Card;

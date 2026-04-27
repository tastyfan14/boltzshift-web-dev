import clsx from 'clsx'
import cls from './Button.module.scss'
import type React from 'react';

type Props = {
    title: string;
    variant: 'primary' | 'primary--micro' | 'secondary' | 'secondary--perm';
    click?: () => void;
    children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ title, variant, click, children, ...props }: Props) {
    return (
        <button
        className={clsx(cls['btn'], cls[variant])}
        onClick={click}
        {...props}
        >
            {title}
            {children}
        </button>
    )
}
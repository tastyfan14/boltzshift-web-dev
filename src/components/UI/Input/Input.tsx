import clsx from 'clsx';
import cls from './Input.module.scss'

type Props = {
    variant: 'primary';
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input({ variant, ...props }: Props) {
    return <input className={clsx(cls['input'], variant && cls[variant])} {...props} />
}
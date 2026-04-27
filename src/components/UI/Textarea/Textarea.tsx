import clsx from 'clsx'
import cls from './Textarea.module.scss'

type Props = {
    variant: 'primary';
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ variant, ...props }: Props) {
    return (
        <textarea className={clsx(cls['textarea'], variant && cls[variant])} {...props} />
    )
}
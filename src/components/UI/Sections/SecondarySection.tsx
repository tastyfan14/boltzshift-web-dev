import clsx from 'clsx'
import cls from './SecondarySection.module.scss'

type Props = {
    id?: string;
    title?: string;
    variant?: string;
    children: React.ReactNode;
}

export default function SecondarySection({ id, title, variant, children }: Props) {
    return (
        <section id={id} className={clsx(cls['ss'], [variant])}>
            {title && <h1 className={clsx(cls['ss__title'])}>{title}</h1>}
            {children}
        </section>
    )
}
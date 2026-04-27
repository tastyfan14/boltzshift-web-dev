import clsx from 'clsx'
import cls from './PrimarySection.module.scss'

type Props = {
    id?: string;
    title?: string;
    desc?: string;
    variant?: string;
    children: React.ReactNode;
}

export default function PrimarySection({ id, title, desc, variant, children }: Props) {
    return (
        <section id={id} className={clsx(cls['ps'], [variant])}>
            {title && <h1 className={clsx(cls['ps__title'])}>{title}</h1>}
            {desc && <p className={clsx(cls['ps__desc'])}>{desc}</p>}
            {children}
        </section>
    )
}
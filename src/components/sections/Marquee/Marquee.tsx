import clsx from 'clsx'
import cls from './Marquee.module.scss'

type Props = {
    title?: string;
    group: React.ReactNode;
}

export default function Marquee({ title, group }: Props) {
    return (
        <section aria-hidden='true' className={clsx(cls['marquee'])}>
            {title && <h1 className={clsx(cls['marquee__title'])}>{title}</h1>}
            <div className={clsx(cls['marquee__track'])}>
                {group}
                {group}
                {group}
            </div>
        </section>
    )
}
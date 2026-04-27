import clsx from 'clsx'
import cls from './Testimonials.module.scss'
import { TESTIMONIALS_DATA } from '@entities/data/Testimonials.data'
import Quotes from '@components/svgs/icons/Quotes'
import SecondarySection from '@components/UI/Sections/SecondarySection'

export default function Testimonials() {
    return (
        <SecondarySection
        id='testimonials'
        title='Testimonials'
        variant={clsx(cls['testimonials'])}
        >
            <div className={clsx(cls['testimonials__cards'])}>
                {TESTIMONIALS_DATA.map((t) => {
                    const Icon = t.sponsor

                    return (
                    <div key={t.id} className={clsx(cls['testimonials__card'])}>
                        <Quotes />
                        <h2 className={clsx(cls['testimonials__card--title'])}>{t.title}</h2>
                        <p className={clsx(cls['testimonials__card--desc'])}>{t.desc}</p>
                        <div className={clsx(cls['testimonials__profile'])}>
                            <div className={clsx(cls['testimonials__profile--card'])}>
                                <img aria-hidden='true' src={t.image} alt={`Profile image: ${t.name}`} />
                                <div className={clsx(cls['testimonials__profile--overview'])}>
                                    <h3>{t.name}</h3>
                                    <h4>{t.role}</h4>
                                </div>
                            </div>
                            <Icon />
                        </div>
                    </div>
                )})}
            </div>
        </SecondarySection>
    )
}
import Button from '@components/UI/Button/Button'
import PrimarySection from '@components/UI/Sections/PrimarySection'
import clsx from 'clsx'
import cls from './Works.module.scss'
import { SELECTEDWORKS_DATA } from '@entities/data/SelectedWorks.data'

export default function Works() {
    return (
        <PrimarySection
        id='works'
        title='SELECTED WORK'
        desc='Our exceptional design services'
        variant={clsx(cls['works'])}
        >
            <div className={clsx(cls['works__cards'])}>
                {SELECTEDWORKS_DATA.map((s) => (
                    <div tabIndex={0} key={s.id} className={clsx(cls['works__card'])}>
                        <img
                        src={`${s.url}Mobile.png`} alt={`Work: ${s.title}`}
                        srcSet={`
                            ${s.url}Mobile.png 343w,
                            ${s.url}Laptop.png 424w,
                            ${s.url}Desktop.png 596w
                        `}
                        sizes='
                            (min-width: 1440px) 596px,
                            (min-width: 1024px) 424px,
                            343px
                        '
                        loading='lazy'
                        />
                        <h2>{s.title}</h2>
                        <p>{s.desc}</p>
                    </div>
                ))}
            </div>
            <Button
            title='View More'
            variant='primary'
            />
        </PrimarySection>
    )
}
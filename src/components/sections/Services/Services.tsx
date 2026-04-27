import { SERVICES_DATA } from '@entities/data/Services.data'
import clsx from 'clsx'
import cls from './Services.module.scss'
import PrimarySection from '@components/UI/Sections/PrimarySection'
import RightTopArrow from '@components/svgs/icons/RightTopArrow'

export default function Services() {
    return (
        <PrimarySection
        id='services'
        variant={clsx(cls['services'])}
        >
            <div>
                <h1 className={clsx(cls['services__title'])}>KNOW OUR SERVICES</h1>
                <p className={clsx(cls['services__desc'])}>Our exceptional design services</p>
            </div>
            <div className={clsx(cls['services__cards'])}>
                {SERVICES_DATA.map((i) => {
                    const Icon = i.icon

                    return (
                    <div key={i.id} id={i.id} className={clsx(cls['services__card'], i.variant && cls[i.variant])}>
                        <div className={clsx(cls['services__card--icons'])}>
                            {Icon && <Icon />}

                            <RightTopArrow tabIndex={0} />
                        </div>
                        <div className={clsx(cls['services__card--overview'])}>
                            <h2>{i.title}</h2>
                            <p>{i.desc}</p>
                        </div>
                    </div>
                )})}
            </div>
        </PrimarySection>
    )
}
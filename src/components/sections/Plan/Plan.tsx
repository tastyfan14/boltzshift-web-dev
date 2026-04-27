import Button from '@components/UI/Button/Button'
import clsx from 'clsx'
import cls from './Plan.module.scss'
import { PLANCARDLIST_DATA } from '@entities/data/PlanCardList.data'
import PrimarySection from '@components/UI/Sections/PrimarySection'
import CircleAccept from '@components/svgs/icons/CircleAccept'

export default function Plan() {
    return (
        <PrimarySection
        id='plan'
        title='CHOOSE YOUR PLAN'
        desc='Consign offers a number of pricing plans to help you find one that fits your business needs best'
        variant={clsx(cls['plan'])}
        >
            <div className={clsx(cls['plan__cards'])}>
                {PLANCARDLIST_DATA.map((pcl) => (
                    <div key={pcl.id} className={clsx(cls['plan__card'], cls[pcl.variant])}>
                        <h1 className={clsx(cls['plan__card--title'])}>{pcl.title}</h1>
                        <h2 className={clsx(cls['plan__card--price'])}>${pcl.price}</h2>

                        <Button
                        title='Get Started'
                        variant={pcl.variant == 'primary' ? 'secondary' : 'primary'}
                        />

                        <ul>
                            {pcl.items.map((items) => (
                                <li key={crypto.randomUUID()}>
                                    <CircleAccept />
                                    {items}
                                </li>
                            )) }
                        </ul>
                    </div>
                ))}
            </div>
        </PrimarySection>
    )
}
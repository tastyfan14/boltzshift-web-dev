import PrimarySection from '@components/UI/Sections/PrimarySection'
import clsx from 'clsx'
import cls from './Banner.module.scss'
import Button from '@components/UI/Button/Button'
import CircleAccept from '@components/svgs/icons/CircleAccept'

export default function Banner() {
    return (
        <PrimarySection>
            <div className={clsx(cls['banner'])}>
                <h3>Innovative Web, Mobile & Product Solutions</h3>
                <p>Join today and experience the difference. Don't miss out on the opportunity to transform your business.Let's grow together!</p>
                <Button
                title='Get a free quotation'
                variant='secondary--perm'
                />
                <ul>
                    <li><CircleAccept /> Affordable Plans for All</li>
                    <li><CircleAccept /> Secure and Reliable</li>
                </ul>
            </div>
        </PrimarySection>
    )
}
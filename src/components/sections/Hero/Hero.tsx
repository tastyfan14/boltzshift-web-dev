import Button from '@components/UI/Button/Button'
import clsx from 'clsx'
import cls from './Hero.module.scss'
import RightTopArrow from '@components/svgs/icons/RightTopArrow'

export default function Hero() {
    return (
        <section className={clsx(cls['hero'])}>
            <div className={clsx(cls['hero__phrase--first'])}>
                WE ARE
                <img
                aria-hidden='true'
                src='/images/Hero/cardMobile.png'
                srcSet='
                    /images/Hero/cardMobile.png 116w,
                    /images/Hero/cardLaptop.png 164w,
                    /images/Hero/cardDesktop.png 224w,
                '
                sizes='
                    (min-width: 1240px) 224px,
                    (min-width: 1024px) 164px,
                    116px
                '
                alt='Bank cards icon'
                />
                CREATIVE
            </div>
            <div className={clsx(cls['hero__shadow'])}></div>
            <div className={clsx(cls['hero__phrase--second'])}>
                AGENCIES
                <img
                tabIndex={0}
                role='button'
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        console.log('Worked!')
                    }
                }}
                src='/images/Hero/playMobile.png'
                srcSet='
                    /images/Hero/playMobile.png 110w,
                    /images/Hero/playLaptop.png 140w,
                    /images/Hero/playDesktop.png 190w,
                '
                sizes='
                    (min-width: 1240px) 190px,
                    (min-width: 1024px) 140px,
                    110px
                '
                alt='Play & pause video'
                />
                <div className={clsx(cls['hero__phrase--double'])}>
                    <h6>Award-winning studio</h6>
                    <h6>Based in San Francisco</h6>
                </div>
            </div>
            <h6 className={clsx(cls['hero__desc'])}>Boltzshift Studio is a design & develop agency of the future with 120+ successful projects in their portfolio.</h6>
            <Button
            title='Book a demo'
            variant='primary'
            >
                <RightTopArrow />
            </Button>
        </section>
    )
}
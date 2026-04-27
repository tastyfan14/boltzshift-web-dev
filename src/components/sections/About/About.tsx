import PrimarySection from '@components/UI/Sections/PrimarySection'
import clsx from 'clsx'
import cls from './About.module.scss'

export default function About() {
    return (
        <PrimarySection id='about' variant={clsx(cls['about'])}>
            <div className={clsx(cls['about__overview'])}>
                <div className={clsx(cls['about__overview--title'])}>
                    <h4>ABOUT THE BOLTZSHIFT AGENCY</h4>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 0L39.7612 24.2388L64 32L39.7612 39.7612L32 64L24.2388 39.7612L0 32L24.2388 24.2388L32 0Z" fill="currentColor"/>
                    </svg>
                </div>
                <p className={clsx(cls['about__overview--desc'])}>
                    Boltzshift is a distinguished design and development agency based in the United Kingdom, known for our commitment to crafting exceptional digital experiences.
                    <br />
                    <br />
                    Since  2018 Boltzshift has been reshaping the web & mobile apps with top-notch design and the power of no code.
                </p>
            </div>
            <img
            alt='Banner with people'
            className={clsx(cls['about__banner'])}
            src='/images/About/bannerMobile.png'
            srcSet='
                /images/About/bannerMobile.png 375w,
                /images/About/bannerLaptop.png 1024w,
                /images/About/bannerDesktop.png 1440w
            '
            sizes='
                (min-width: 1440px) 1440px,
                (min-width: 1024px) 1024px,
                375px
            '
            loading='lazy'
            />
            <div className={clsx(cls['about__statistic'])}>
                <h4 className={clsx(cls['about__statistic--title'])}>GET AQUANTED WITH OUR KEY FACTS</h4>
                <div className={clsx(cls['about__facts'])}>
                    <div className={clsx(cls['about__fact'])}>
                        <h5>8.2<span>k</span></h5>
                        <h6>Trusted Users</h6>
                    </div>
                    <div className={clsx(cls['about__fact'])}>
                        <h5>120<span>+</span></h5>
                        <h6>Project Completed</h6>
                    </div>
                    <div className={clsx(cls['about__fact'])}>
                        <h5>97<span>%</span></h5>
                        <h6>Clients Satisfaction</h6>
                    </div>
                </div>
            </div>
        </PrimarySection>
    )
}
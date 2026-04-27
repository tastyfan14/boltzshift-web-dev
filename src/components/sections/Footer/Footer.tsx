import Logo from '@components/svgs/logos/Logo'
import clsx from 'clsx'
import cls from './Footer.module.scss'

export default function Footer() {
    const handleOpener = (url: string) => {
        if (url) {
            window.open(url, '_blank', 'noopener noreferrer')
        }
    }
    return (
        <footer className={clsx(cls['footer'])}>
            <div className={clsx(cls['footer__container'])}>
                <div className={clsx(cls['footer__social'])}>
                    <div className={clsx(cls['footer__social--logo'])}>
                        <Logo />
                    </div>

                    <div className={clsx(cls['footer__social--links'])}>
                        <span>Follow us</span>
                        <div className={clsx(cls['footer__social--link'])}>
                            <svg role='button' onKeyDown={(e) => e.key === 'Enter' && handleOpener('https://www.facebook.com/')} onClick={() => handleOpener('https://www.facebook.com/')} tabIndex={0} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3482 10.4769L21 20.2385H16.6829L10.9848 12.9692M13.3482 10.4769L7.97561 3.62308H3.65854L10.9848 12.9692M13.3482 10.4769L20.561 3M10.9848 12.9692L3 21" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>

                            <svg role='button' onKeyDown={(e) => e.key === 'Enter' && handleOpener('https://www.instagram.com/')} tabIndex={0} onClick={() => handleOpener('https://www.instagram.com/')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2 21H13.8C16.7998 21 18.2997 21 19.3511 20.2361C19.6907 19.9893 19.9893 19.6907 20.2361 19.3511C21 18.2997 21 16.7998 21 13.8V10.2C21 7.20021 21 5.70032 20.2361 4.64886C19.9893 4.30928 19.6907 4.01065 19.3511 3.76393C18.2997 3 16.7998 3 13.8 3H10.2C7.20021 3 5.70032 3 4.64886 3.76393C4.30928 4.01065 4.01065 4.30928 3.76393 4.64886C3 5.70032 3 7.20021 3 10.2V13.8C3 16.7998 3 18.2997 3.76393 19.3511C4.01065 19.6907 4.30928 19.9893 4.64886 20.2361C5.70032 21 7.20021 21 10.2 21Z" stroke="currentColor" strokeWidth="1.5"/>
                            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                            <circle cx="17" cy="7" r="1" fill="currentColor"/>
                            </svg>

                            <svg role='button' onKeyDown={(e) => e.key === 'Enter' && handleOpener('https://www.youtube.com/')} tabIndex={0} onClick={() => handleOpener('https://www.youtube.com/')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 19H14C16.8089 19 18.2134 19 19.2223 18.3259C19.659 18.034 20.034 17.659 20.3259 17.2223C21 16.2134 21 14.8089 21 12C21 9.19108 21 7.78661 20.3259 6.77772C20.034 6.34096 19.659 5.96596 19.2223 5.67412C18.2134 5 16.8089 5 14 5H10C7.19108 5 5.78661 5 4.77772 5.67412C4.34096 5.96596 3.96596 6.34096 3.67412 6.77772C3 7.78661 3 9.19108 3 12C3 14.8089 3 16.2134 3.67412 17.2223C3.96596 17.659 4.34096 18.034 4.77772 18.3259C5.78661 19 7.19108 19 10 19Z" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M12.7801 10.39C14.0169 11.0085 14.6354 11.3177 14.7395 11.7804C14.7721 11.925 14.7721 12.075 14.7395 12.2196C14.6354 12.6823 14.0169 12.9915 12.7801 13.61L12.605 13.6975C11.5762 14.2119 11.0618 14.4691 10.657 14.3213C10.5291 14.2746 10.4122 14.2023 10.3132 14.1089C10 13.8129 10 13.2378 10 12.0875L10 11.9125C10 10.7622 10 10.1871 10.3132 9.89115C10.4122 9.79768 10.5291 9.72539 10.657 9.67871C11.0618 9.53089 11.5762 9.78809 12.605 10.3025L12.7801 10.39Z" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>

                            <svg role='button' onKeyDown={(e) => e.key === 'Enter' && handleOpener('https://www.facebook.com/')} tabIndex={0} onClick={() => handleOpener('https://www.facebook.com/')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 10.2V14.1875C3 16.8181 3 18.1334 3.59458 19.0984C3.92224 19.6301 4.36988 20.0778 4.90164 20.4054C5.86658 21 7.18189 21 9.8125 21H13.8C16.7998 21 18.2997 21 19.3511 20.2361C19.6907 19.9893 19.9893 19.6907 20.2361 19.3511C21 18.2997 21 16.7998 21 13.8V10.2C21 7.20021 21 5.70032 20.2361 4.64886C19.9893 4.30928 19.6907 4.01065 19.3511 3.76393C18.2997 3 16.7998 3 13.8 3H10.2C7.20021 3 5.70032 3 4.64886 3.76393C4.30928 4.01065 4.01065 4.30928 3.76393 4.64886C3 5.70032 3 7.20021 3 10.2Z" stroke="currentColor" strokeWidth="1.5"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.638 9.49555C14.2538 9.89017 14.2778 10.2119 14.2778 10.8986V11.9809H16.8333L16.3125 14.1455H14.2778V21H11.9444V14.1455H10V11.9809H11.9444V10.8986C11.9444 10.1423 12.0484 8.92591 12.9064 8.04465C13.8734 7.05154 15.0556 6.79439 17 7.15515V9.31974C15.4916 8.9381 14.8412 9.28681 14.638 9.49555Z" fill="#39393B"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={clsx(cls['footer__navigate'])}>
                    <nav aria-label='Lower navigation menu'>
                        <ol>
                            <li><a href='/#about'>About us</a></li>
                            <li><a href='/#works'>Features</a></li>
                            <li><a href='/#services'>Services</a></li>
                            <li><a href='/#process'>Blogs</a></li>
                            <li><a href='/#contact'>Contact us</a></li>
                        </ol>
                        <ol>
                            <li><a href='about'>Integrations</a></li>
                            <li><a href='works'>Careers</a></li>
                            <li><a href='blog'>Privacy Policy</a></li>
                            <li><a href='contact'>Terms & Condition</a></li>
                            <li><a href='works'>Cookie Policy</a></li>
                        </ol>
                    </nav>
                    <div className={clsx(cls['footer__navigate--info'])}>
                        <a href='tel:+10911182716'>+1 (0) 911 18 27 16</a>
                        <a href='mailto:INFO@BOLTZSHIFT.COM'>INFO@BOLTZSHIFT.COM</a>
                        <br />
                        <span>Based in San Fransisco</span>
                        <span>United Kingdom</span>
                    </div>
                </div>
            </div>
            <span className={clsx(cls['footer__copyright'])}>copyright @ 2023 All Rights Reserved</span>
        </footer>
    )
}
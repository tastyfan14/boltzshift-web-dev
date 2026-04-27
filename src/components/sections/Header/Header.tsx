import clsx from 'clsx'
import cls from './Header.module.scss'
import Button from '@components/UI/Button/Button'
import Logo from '@components/svgs/logos/Logo'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FocusTrap } from 'focus-trap-react'
import useHeader from '@features/Header/useHeader'

export default function Header() {
    const { open, setOpen } = useHeader()
    return (
        <header className={clsx(cls['header'])}>

            <AnimatePresence>
                {open && (
                <motion.div 
                className={clsx(cls['header__menu--overlay'], {[cls.open]: open})}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: .25 }}
                >
                    <FocusTrap
                    active={open}
                    focusTrapOptions={{
                        initialFocus: false,
                        clickOutsideDeactivates: true,
                        escapeDeactivates: true,
                    }}
                    >
                        <motion.div
                        className={clsx(cls['header__menu'], {[cls.open]: open})}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{
                            type: 'spring',
                            bounce: 0,
                            duration: .35,
                        }}
                        >
                            <div className={clsx(cls['header__menu--top'])}>
                                <svg tabIndex={0} onClick={() => setOpen(false)} className={clsx(cls['header__menu--close'])} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <ul>
                                <NavLink
                                to='/' onClick={() => setOpen(false)}
                                className={({ isActive }) => clsx(isActive && cls.active)}
                                >Home</NavLink>

                                <NavLink 
                                to='/about' onClick={() => setOpen(false)}
                                className={({ isActive }) => clsx(isActive && cls.active)}
                                >About</NavLink>

                                <NavLink
                                to='/works' onClick={() => setOpen(false)}
                                className={({ isActive }) => clsx(isActive && cls.active)}
                                >Works</NavLink>

                                <NavLink
                                to='/blog' onClick={() => setOpen(false)}
                                className={({ isActive }) => clsx(isActive && cls.active)}
                                >Blog</NavLink>

                                <NavLink
                                to='/contact' onClick={() => setOpen(false)}
                                className={({ isActive }) => clsx(isActive && cls.active)}
                                >Contact</NavLink>
                            </ul>
                            <div className={clsx(cls['header__menu--cta'])}>
                                <a href='tel:+10911182716'>+1 (0) 911 18 27 16</a>
                                <a href='mailto:INFO@BOLTZSHIFT.COM'>INFO@BOLTZSHIFT.COM</a>
                            </div>
                        </motion.div>
                    </FocusTrap>
                </motion.div>
                )}
            </AnimatePresence>

            <Logo />

            <nav className={clsx(cls['header__navigate'])}>
                <NavLink to='/' className={({ isActive }) => clsx(isActive && cls.active)}>Home</NavLink>
                <NavLink to='/about' className={({ isActive }) => clsx(isActive && cls.active)}>About</NavLink>
                <NavLink to='/works' className={({ isActive }) => clsx(isActive && cls.active)}>Works</NavLink>
                <NavLink to='/blog' className={({ isActive }) => clsx(isActive && cls.active)}>Blog</NavLink>
                <NavLink to='/contact' className={({ isActive }) => clsx(isActive && cls.active)}>Contact</NavLink>
            </nav>

            <Button
            title='Get in touch'
            variant='primary--micro'
            />

            <Button
            title=''
            aria-label='Burder menu'
            variant='primary--micro'
            style={{ visibility: open ? 'hidden' : 'visible', transition: 'visibility .01s linear .03s' }}
            click={() => setOpen(true)}
            >
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.75H32M0 7.75H32M0 14.75H32" stroke="CurrentColor" strokeWidth="1.5"/>
                </svg>
            </Button>
        </header>
    )
}
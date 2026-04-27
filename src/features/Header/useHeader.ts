import { useEffect, useState } from 'react'

export default function useHeader() {
    const [open, setOpen] = useState<boolean>(false)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
    }, [open])

    return { open, setOpen }
}
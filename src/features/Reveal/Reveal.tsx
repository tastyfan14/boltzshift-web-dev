import { motion } from 'framer-motion'
import useMediaQuery from './useMediaQuery';

type Props = {
    children: React.ReactNode;
}

export default function Reveal({ children }: Props) {
    const isMobile = useMediaQuery('(max-width: 1024px)')
    return (
        <motion.div
        initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: isMobile ? 0.05 : 0.15 }}
        transition={{ duration: isMobile ? 0.5 : 0.6 }}
        >
            {children}
        </motion.div>
    )
}
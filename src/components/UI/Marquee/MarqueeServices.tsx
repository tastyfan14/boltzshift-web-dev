import clsx from 'clsx'
import cls from '@components/sections/Marquee/Marquee.module.scss'
import type { MARQUEESERVICES_TYPES } from '@entities/types/MarqueeServices.types'

type Props = {
    blocks: MARQUEESERVICES_TYPES[];
    variant: string;
}

export default function MarqueeServices({ blocks, variant }: Props) {
    return (
        <div className={clsx(cls['marquee__block'], variant && cls[variant])}>
            {blocks.map((block) => {
                const Icon = block.item
                
                return (
                    <Icon key={block.id} />
            )})}
        </div>
    )
}
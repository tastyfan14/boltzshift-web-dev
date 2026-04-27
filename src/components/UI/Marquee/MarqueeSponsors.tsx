import clsx from 'clsx'
import cls from '@components/sections/Marquee/Marquee.module.scss'
import type { MARQUEESPONSORS_TYPES } from '@entities/types/MarqueeSponsors.types'

type Props = {
    blocks: MARQUEESPONSORS_TYPES[];
    variant: string;
}

export default function MarqueeSponsors({ blocks, variant }: Props) {
    return (
        <ol className={clsx(cls['marquee__block'], variant && cls[variant])}>
            {blocks.map((block) => (
                <li key={block.id}>{block.title}</li>
            ))}
        </ol>
    )
}
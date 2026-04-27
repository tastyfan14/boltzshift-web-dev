import clsx from 'clsx'
import cls from './Process.module.scss'
import { PROCESS_DATA } from '@entities/data/Process.data'
import SecondarySection from '@components/UI/Sections/SecondarySection'

export default function Process() {
    return (
        <SecondarySection
        id='process'
        title='OUR PROCESS'
        variant={clsx(cls['process'])}
        >
            <div className={clsx(cls['process__cards'])}>
                {PROCESS_DATA.map((p) => (
                    <div key={p.id} className={clsx(cls['process__card'])}>
                        <span>{p.step}</span>
                        <h2>{p.title}</h2>
                        <p>{p.desc}</p>
                    </div>
                ))}
            </div>
        </SecondarySection>
    )
}
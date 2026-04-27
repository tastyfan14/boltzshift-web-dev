import cls from './Empty.module.scss'
import clsx from 'clsx'

export default function Empty() {
    return (
        <div className={clsx(cls['empty'])}>
            <h1>404</h1>
            <p>The page was not found or does not exist</p>
        </div>
    )
}
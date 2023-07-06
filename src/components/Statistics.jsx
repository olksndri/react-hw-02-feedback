import css from '../styles/statistics.module.css'; 
import { Notification } from './Notification'; 

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => { 
    return (
        <>
            <h3 className={css['stats-title']}>Statistics</h3>
            {(total > 0) ?
                <ul className={css['stats-list']}>
                    <li className={css['stats-item']}>Good<span>{good}</span></li>
                    <li className={css['stats-item']}>Neutral<span>{neutral}</span></li>
                    <li className={css['stats-item']}>Bad<span>{bad}</span></li>
                    <li className={css['stats-item']}>Total<span>{total}</span></li>
                    <li className={css['stats-item']}>Positive feedback<span>{positivePercentage}%</span></li>
                </ul> :
                <Notification message="There is no feedback"></Notification>
            }
        </>)
}
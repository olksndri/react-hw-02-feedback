import css from '../styles/statistics.module.css'; 

export const Notification = ({ message }) => { 
    return (
        <p className={css.notification}>{message}</p>
    )
}
import css from '../styles/feedback-options.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
    return (
        <>
            <div className={css['button-wrapper']}>
                <button type="button" className={css.button} name='good' onClick={onLeaveFeedback}>good</button>
                <button type="button" className={css.button} name='neutral' onClick={onLeaveFeedback}>neutral</button>
                <button type="button" className={css.button} name='bad' onClick={onLeaveFeedback}>bad</button>
            </div>  
        </>
    )
}

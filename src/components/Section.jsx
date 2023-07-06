import css from '../styles/section.module.css'; 

export const Section = ({ title, children }) => { 
    return ( 
        <section className={css['feedback-wrapper']}>
            <h3 className={css.title}>{title}</h3>
            {children}
        </section>
    )
}
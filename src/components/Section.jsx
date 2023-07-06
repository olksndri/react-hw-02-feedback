import css from '../styles/section.module.css'; 
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => { 
    return ( 
        <section className={css['feedback-wrapper']}>
            <h3 className={css.title}>{title}</h3>
            {children}
        </section>
    )
}

Section.propTypes = { 
    title: PropTypes.string,
    children: PropTypes.node.isRequired
}
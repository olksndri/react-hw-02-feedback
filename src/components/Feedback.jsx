import React, { Component } from "react";
import { STATE } from "./App";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section"

class Feedback extends Component { 
    state = { ...STATE }; 

    onClick = (evt) => {
        const { name } = evt.currentTarget; 
        this.setState(state => ({
            [name.toLowerCase()]: state[name.toLowerCase()] + 1,
        }))
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state; 
        return Number(good + neutral + bad); 
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return Number((this.countTotalFeedback() > 0) ? ((good * 100) / (this.countTotalFeedback())).toFixed() : 0);
    }

    render() {
        const { good, neutral, bad } = this.state; 

        return ( 
            <>
                <Section title='Please leave feedback'>
                    <FeedbackOptions onLeaveFeedback={this.onClick}></FeedbackOptions>
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    >    
                    </Statistics>
                </Section>
            </>
        )
    }
}

export { Feedback }; 
    

import { Component } from "react";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statisctics } from "./Statisctics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from "./GlobalStyle";

export class App extends Component {
   state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleClick = ({option}) => {
        this.setState(prevState => {
            return {
                [option]: prevState[option] + 1,
            }
})
}

    countTotalFeedback = () => {
       const { good, neutral, bad } = this.state;
        return good + neutral + bad;      
    }
    
    countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
}

    render() {

        return (
            <div  style={{
                maxWidth: "250px",
                margin: "0 auto",
      }}>
                <Section title="Please leave feedback">

                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
                    
                </Section>

                <Section title="Statistics">

                    { this.countTotalFeedback() > 0 ? <Statisctics options={Object.keys(this.state)} currentState={this.state} totalFeedback={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> : <Notification
                     message="There is no feedback"></Notification>}
            
                </Section>

                <GlobalStyle/>
            </div>
        )
    }
};

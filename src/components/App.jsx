import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statisctics } from "./Statisctics/Statistics";

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
            <div>
                <h2>Please leave feedback</h2>
                <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick}/>
                
                <h2>Statistics</h2>
                <Statisctics options={Object.keys(this.state)} currentState={this.state} totalFeedback={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
            </div>
        )
    }
};

import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

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

    render() {
        // const { good, neutral, bad } = this.state;

        return (
            <div>
                <h2>Please leave feedback</h2>
                <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick}/>
                
                <h2>Statistics</h2>
            </div>
        )
    }
};

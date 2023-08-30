import {List} from './Statistics.styled'

export const Statisctics = ({ currentState, options, totalFeedback, positivePercentage }) => {
    return (
        <List>
            {  options.map(option => 
                <li key={option}>{option}: {currentState[option]}</li>
            )}

            <li>
            <p> Total feedback: {totalFeedback}</p> 
            </li>
            <li>
             <p>Positive feedback: { positivePercentage > 0 ? (<span>{positivePercentage}%</span>) : (<span style={{
              color: "red",
      }}>there's no positive feedback</span>) } </p> 
            </li>
        </List>
    )
}
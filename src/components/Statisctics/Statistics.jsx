export const Statisctics = ( {currentState, options, totalFeedback, positivePercentage}) => {
    return (
        <ul>
            {  options.map(option => 
                <li key={option}>{option}:{currentState[option]}</li>
            )}

            <li>
            <p> Total feedback: {totalFeedback}</p> 
            </li>
            <li>
             <p>Positive feedback: { positivePercentage > 0 ? (<span>{positivePercentage}%</span>) : ("there's no positive feedback") } </p> 
            </li>
        </ul>
    )
}
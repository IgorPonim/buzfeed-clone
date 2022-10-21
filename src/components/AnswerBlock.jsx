import { useEffect } from "react"
import { useState } from "react"

const AnswerBlock = ({ answerOptions, chosenAnswer }) => {

    const [result, setResult] = useState(null)

    useEffect(() => {
        answerOptions.forEach(element => {
            if (chosenAnswer.includes(element.combination[0] && element.combination[0] && element.combination[0])) {
                setResult(element)

            }
            else setResult(element)
        })
    }, [])



    return (
        <>
            <div id='answer-block' className='answer-block'>
                <h2>{result?.text}</h2>
                <img alt={result?.text} src={result?.image}></img>


            </div>
        </>
    )
}

export default AnswerBlock
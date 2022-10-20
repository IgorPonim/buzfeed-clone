import { useEffect } from "react"
import { useState } from "react"

const AnswerBlock = ({ answerOptions, chosenAnswer }) => {

    const [result, setResult] = useState(null)

    useEffect(() => {
        answerOptions.forEach(element => {
            if (chosenAnswer.includes(element.combination[0] && element.combination[0] && element.combination[0])) {
                setResult(element)

            }
            else setResult(element.text)
        })
    }, [])
    console.log(result)
    return (<>
        <div>{result}</div>
        <div>{chosenAnswer}</div>
    </>
    )
}

export default AnswerBlock
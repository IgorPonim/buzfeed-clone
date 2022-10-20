const QuestionBlock = ({ question, setShosenAnswer, chosenAnswer, unAnsweredIds, setUnAnsweredIds, quizItemId }) => {
    //увеличиваю массив ответов и уменьшаю массив неотчеченных
    const handleClick = (ev) => {
        setShosenAnswer((prevState) => [...prevState, question.text])
        setUnAnsweredIds(unAnsweredIds.filter((id) => id !== quizItemId))
    }

    const validPick = !chosenAnswer?.includes(question?.alt) && !unAnsweredIds?.includes(quizItemId)
 



    
    return (

        <>
            <button disabled={validPick} className="question-block" onClick={handleClick}  >

                <label className="label-classname"> <img src={question.image} /></label>
                <h3>{question.text}</h3>
                <p>
                    <a href={question.url}>{question.credit} </a>
                    < a href='https://unsplash.com/' >Unsplash</a>
                </p>
            </button>
        </>
    )
}

export default QuestionBlock
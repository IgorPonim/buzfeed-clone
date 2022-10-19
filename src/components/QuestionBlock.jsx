const QuestionBlock = ({ question, setShosenAnswer, chosenAnswer, unAnsweredIds, setUnAnsweredIds }) => {

    const handleClick = (ev) => {
        setShosenAnswer((prevState) => [...prevState, question.text])
        unAnsweredIds.pop()
    }



    return (

        <>
            <button disabled={chosenAnswer.includes('')} className="question-block" onClick={handleClick}  >

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
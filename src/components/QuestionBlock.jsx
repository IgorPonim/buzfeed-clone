const QuestionBlock = ({ question }) => {
    return (

        <>
            <button className="question-block">
                <label className="label-classname"> <img src={question.image} /></label>
                <h3>{question.text}</h3>
                <p>
                    <a href={question.url}> </a>
                    < a href='https://unsplash.com/' ></a>
                </p>
            </button>
        </>
    )
}

export default QuestionBlock
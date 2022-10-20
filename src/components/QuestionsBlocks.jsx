import QuestionBlock from "./QuestionBlock"


const QuestionsBlock = ({ chosenAnswer, quizItem, setShosenAnswer, unAnsweredIds, setUnAnsweredIds }) => {



    return (
        <div>
            <h2 id={quizItem.id} className="question-title">{quizItem.text}</h2>
            <div className="question-container">
                {quizItem?.questions.map((question, index) => {
                    return <QuestionBlock quizItemId={quizItem.id} unAnsweredIds={unAnsweredIds} setUnAnsweredIds={setUnAnsweredIds} chosenAnswer={chosenAnswer} setShosenAnswer={setShosenAnswer} key={index} question={question} />
                })}


            </div>

        </div>
    )
}

export default QuestionsBlock
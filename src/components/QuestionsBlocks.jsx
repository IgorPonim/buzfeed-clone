import QuestionBlock from "./QuestionBlock"


const QuestionsBlock = ({ quizItem }) => {

    return (
        <div>
            <h2 id={quizItem.id} className="question-title">{quizItem.text}</h2>
            <div className="question-container">
                {quizItem?.questions.map((question, index) => {
                    return <QuestionBlock key={index} question={question} />
                })}


            </div>

        </div>
    )
}

export default QuestionsBlock
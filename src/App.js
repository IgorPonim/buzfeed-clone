
import { useEffect, useState } from 'react';
import './App.css';
import Title from './components/Title';
import axios from 'axios'
import QuestionsBlock from './components/QuestionsBlocks';
import AnswerBlock from './components/AnswerBlock';



const App = () => {

  const [quiz, setQuiz] = useState(null)
  const [chosenAnswer, setShosenAnswer] = useState([])
  const [unAnsweredIds, setUnAnsweredIds] = useState([0, 1, 2])
  const [showAnalysis, setShowAnalysis] = useState(false)


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/quiz')

      setQuiz(response.data)
    }

    catch (er) { console.log(er) }
  }

  useEffect(() => {
    fetchData()
  }, [])


  useEffect(() => {
    let unAnsweredIds = quiz?.content.map(({ id }) => id)
    setUnAnsweredIds(unAnsweredIds)
  }, [quiz])


  useEffect(() => {
    if (unAnsweredIds) {
      if (unAnsweredIds.length <= 0 && chosenAnswer.length > 0) {
        setShowAnalysis(true)
        const answerBlock = document.querySelector('.focus')
        answerBlock?.scrollIntoView({ behavior: 'smooth', block: "end" })
      }
      //scroll to highest unAnswered question
      const highestId = Math.min(...unAnsweredIds)
      const highestElement = document.getElementById(`${highestId}`)
      highestElement?.scrollIntoView({ behavior: 'smooth' })
    }

  }, [unAnsweredIds, chosenAnswer, showAnalysis])




  return (
    <>
      <div className='app'>
        <Title title={quiz?.title} subtitle={quiz?.subtitle} />
        {quiz?.content.map((content) => {
          return <QuestionsBlock
            chosenAnswer={chosenAnswer}
            setShosenAnswer={setShosenAnswer}
            quizItem={content}
            key={content.id}
            unAnsweredIds={unAnsweredIds}
            setUnAnsweredIds={setUnAnsweredIds}

          />
        })}

        {showAnalysis && <AnswerBlock
          answerOptions={quiz?.awnswers}
          chosenAnswer={chosenAnswer}
        />}
        <div className='focus'></div>

      </div>
    </>);
}

export default App;

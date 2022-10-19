
import { useEffect, useState } from 'react';
import './App.css';
import Title from './components/Title';
import axios from 'axios'
import QuestionsBlock from './components/QuestionsBlocks';


const App = () => {

  const [quiz, setQuiz] = useState(null)
  const [chosenAnswer, setShosenAnswer] = useState([])
  const [unAnsweredIds, setUnAnsweredIds] = useState([0, 1, 2])

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
  console.log(unAnsweredIds)
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
            unAnsweredIds={unAnsweredIds} setUnAnsweredIds={setUnAnsweredIds}
          />
        })}



      </div>
    </>);
}

export default App;


import { useEffect, useState } from 'react';
import './App.css';
import Title from './components/Title';
import axios from 'axios'
import QuestionsBlock from './components/QuestionsBlocks';


const App = () => {

  const [quiz, setQuiz] = useState(null)

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

  return (
    <>
      <div className='app'>
        <Title title={quiz?.title} subtitle={quiz?.subtitle} />
        {quiz?.content.map((content) => {
          return <QuestionsBlock quizItem={content} key={content.id} />
        })}



      </div>
    </>);
}

export default App;

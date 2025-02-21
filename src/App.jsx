import { useState } from 'react'
import './App.css'
import { tests } from './testimonials'
import Card from './components/Card';

function App() {
  let data = tests;
  const [index, setIndex] = useState(0);

  function decHandler() {
    if (index != 0) {
      setIndex(index - 1);
    }
    else {
      setIndex(data.length - 1);
    }
  }

  function incHandler() {
    if (index != (data.length - 1)) {
      setIndex(index + 1);
    }
    else {
      setIndex(0);
    }
  }

  function surpriseHandler(){
    setIndex(Math.floor(Math.random()*data.length))
  }



  return (
    <>
      <div className='bg-gray-100 h-[100vh] w-[100vw] flex flex-col justify-center items-center'>
        <div className='text-4xl font-bold'>
          <h1>Our Testimonials</h1>
        </div>

        <div className='w-32 h-1 bg-violet-500 mt-2'>
        </div>

        <div className='flex-col justify-center items-center w-1/2 h-auto bg-gray-200 p-4 m-4 rounded-md  shadow-md hover:shadow-lg'>
          <div>
            <Card data={data[index]} />
          </div>

          <div className='text-center flex flex-row justify-center items-center gap-6 m-2'>
            <button onClick={decHandler} className='text-2xl text-bold text-violet-500'>-</button>
            <button onClick={incHandler} className='text-2xl text-bold text-violet-500'>+</button>
          </div>

          <div className='text-center'>
            <button className='bg-violet-500 text-bold text-white w-[140px] text-xl m-2 p-1 rounded-md hover:bg-violet-700' 
            onClick={surpriseHandler}>Surprise Me</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

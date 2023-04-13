import { useState } from 'react'
import './App.css'
import { Card } from './components/Card';
import { Card2 } from './components/Card2';

function App() {


  // interface IPerson  {
  //   name: string,
  //   lastName: string,
  //   age: number,
  //   gender: string,
  //   direction: IDirection
  // }

  // interface IDirection {
  //     street:string,
  //     num: number,
  //     phone: string
  // }

  // const num:number =  10;
  //  let password:boolean|string  = ""
  //  password =true;

  // const sum = (num1:number, num2: number):number => {
  //     return num1+num2
  // }

  // const rest ;
  // const multi;
  // const div;

  // const total = sum(10, 2);
  // console.log(total);

  const [openCard, setOpenCard] =  useState<boolean>(false)

  return (
    <div className="App">
      {/* {num} */}
      <button 
        onClick={()=>setOpenCard(true)}
      >{!openCard?"Close Card": "Open card"}</button>
      <Card 
        show = {openCard}
        title="New Card"
        body = "This is the body"
        closeCard={()=>setOpenCard(!openCard)}
      />

    <Card2 
      show={openCard}
      title = "CArd 2"
      body='This is a new body'
      closeCard={()=>setOpenCard(!openCard)}
    >
      <h1>Este es un título</h1>
    </Card2>

    </div>
  )
}

export default App

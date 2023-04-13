import React from 'react'
interface ICard {
    show: boolean,
    title: string,
    body: string,
    closeCard : ()=>void
}

export const Card = ({show, title, body, closeCard}:ICard) => {
  return (
    <>
    {show? 
        <div className='card'>
            <div className='cardTitle'>{title}</div>
            <div className='cardBody'>{body}</div>
            <button
                onClick = {closeCard}
            >Cancel</button>
            <button

            >Ok</button>
        </div>
    :null}
    </>
  )
}

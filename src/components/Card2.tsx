import React from 'react'

interface ICard {
    show: boolean,
    title: string,
    body: string,
    children: JSX.Element,
    closeCard : ()=>void
}

export const Card2 = ({children, show, title, body, closeCard}:ICard) => {
  return (
    <>
    {show? 
        <div className='card'>
            <div className='cardTitle'>{title}</div>
            <div className='cardBody'>{body}</div>
            <div className='children'>{children}</div>
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
"use client"

import { webAppContext } from '@/app/context'
import { FlowerType } from '@/shared/types'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

type FlowerCardProps = {
    flower: FlowerType
}

export default function FlowerCard({flower}: FlowerCardProps): JSX.Element {
    const app = useContext(webAppContext).appRef.current;
    const [isClicked, setIsClicked] = useState(false)
    const handleSendMessage = (flower: FlowerType) => {
        fetch('/api/sendMessage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( {message: flower}),
          })
            .then(response => response.json())
            .then(data => {
              if (data.success) {
                console.log('Message sent:', data);
              } else {
                console.error('Error sending message:', data);
              }
            })
            .catch(error => {
              console.error('Error sending message:', error);
            });
        // setIsClicked(true)
        app.close()
    }
  return (
    <>
    {isClicked ? 
     
     <h3>sdfndjsf</h3>
    : (<div className="flower-card">
        <h3>{flower.name}</h3>
        <div><img src={flower.imagelink} alt="photo"/></div>
        <p>{flower.price}</p>
        <button className="my-button" onClick={() => handleSendMessage(flower)}>Хочу этот букет</button>
    </div>)}
    </>
  )
}

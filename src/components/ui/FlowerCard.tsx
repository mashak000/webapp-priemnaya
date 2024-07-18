import { FlowerType } from '@/shared/types'
import Image from 'next/image'
import React from 'react'

type FlowerCardProps = {
    flower: FlowerType
}

export default function FlowerCard({flower}: FlowerCardProps): JSX.Element {
    const handleSendMessage = (flower: FlowerType) => {
        fetch('/api/sendMessage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( {message: flower.name}),
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
    }
  return (
    <div className="flower-card">
        <h3>{flower.name}</h3>
        <div><img src={flower.imagelink} alt="photo"/></div>
        <p>{flower.price}</p>
        <button className="my-button" onClick={() => handleSendMessage(flower)}>Хочу этот букет</button>
    </div>
  )
}

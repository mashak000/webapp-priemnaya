import { FlowerType } from '@/shared/types';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import FlowerCard from './FlowerCard';

type CaruselProps = {
    items: FlowerType[]
}

export default function Carusel({items}: CaruselProps): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipedLeft = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };
  
    const handleSwipedRight = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };
  
    const handlers = useSwipeable({
      onSwipedLeft: handleSwipedLeft,
      onSwipedRight: handleSwipedRight,
    });
  
    return (
      <div {...handlers} className="carouselContainer">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <FlowerCard key={FlowerCard.name} flower={item} />
          ))}
        </div>
      </div>
    );
}

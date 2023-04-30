import React from 'react'
import Image from 'next/image'

interface cardBackProps {
  cardImage: object
}

const handInfos = [
  {
    mark: 'spade',
    score: '11',
    image: '/../public/tramp/card_spade_01.png',
  },
  {
    mark: 'spade',
    score: '2',
    image: '/../public/tramp/card_spade_02.png',
  },
]

const Player = () => {
  return (
    <div>
      <div className="flex justify-center mt-4">
        {handInfos.map((handInfo, index) => (
          <Image
            key={index}
            src={handInfo.image}
            alt={`Image ${index}`}
            width={80}
            height={80}
          />
        ))}
      </div>
    </div>
  )
}

export default Player

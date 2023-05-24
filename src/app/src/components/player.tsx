import React from 'react'
import Image from 'next/image'

interface cardBackProps {
  handInfos: {
    mark: string
    score: number
    image: string
  }[]
}

const Player = ({ handInfos }: cardBackProps) => {
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

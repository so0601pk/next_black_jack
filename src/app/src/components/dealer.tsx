import React from 'react'
import cardBack from '@/json/card_back.json'

interface cardBackProps {
  cardImage: object
}

const Dealer: React.FC<cardBackProps> = () => {
  return (
    <div>
      <Image src={cardBack.image} width={500} height={500} />
    </div>
  )
}

export default Dealer

import Image from 'next/image'
import cards from '@/json/cards.json'
import cardBack from '@/json/card_back.json'
import Player from '@/components/player'
import { useState, useEffect } from 'react'

const cardBackImageUrl = cardBack.image

interface cards {
  mark: string
  score: number
  image: string
}

export default function Home() {
  // シャッフルされたカードの状態を保持
  const [shuffledCards, setShuffledCards] = useState<
    { mark: string; score: number; image: string }[]
  >([])
  // 自分の手札の状態を保持
  const [myHands, setMyHands] = useState<
    { mark: string; score: number; image: string }[]
  >([])
  // 対戦相手の手札の状態を保持
  const [oppHands, setOppHands] = useState<
    { mark: string; score: number; image: string }[]
  >([])
  // ゲームが開始されているかどうかの状態を管理
  const [isStartedGame, setStartedGame] = useState(false)

  const startGame = () => {
    const drowCards = (who: string) => {
      const drawnCards = shuffledCards.splice(0, 2)
      if (who === 'myHands') {
        setMyHands(drawnCards)
        setShuffledCards(shuffledCards)
      } else {
        setOppHands(drawnCards)
        setShuffledCards(shuffledCards)
      }
    }
    const unshuffledCards = cards
    const shuffledCards = unshuffledCards.sort(() => Math.random() - 0.5)
    setShuffledCards(shuffledCards)
    // お互いにカードを山札から２枚ずつ引く
    drowCards('myHands')
    drowCards('oppHands')
    setStartedGame(!isStartedGame)
  }

  const resetGame = () => {
    window.location.reload()
  }

  const getTotalscore = (cards: cards[]): number => {
    return cards.reduce((total, card) => total + card.score, 0)
  }

  return (
    <div>
      <div className="pt-16 pb-16">
        <div>
          <div className="text-center text-2xl font-bold">相手の手札</div>
          <Player handInfos={oppHands} />
          <div className="text-center mt-4 text-xl">
            現在の合計値（相手）:{getTotalscore(oppHands)}
          </div>
          <div className="text-center mt-4 text-xl">勝ち</div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="flex space-x-4">
            <div>
              <button
                className={`bg-violet-500 text-white py-6 px-8 rounded ${
                  isStartedGame
                    ? 'disabled:cursor-not-allowed disabled:bg-violet-400'
                    : ''
                }`}
                onClick={startGame}
                disabled={isStartedGame}
              >
                ゲームスタート
              </button>
            </div>
            <div>
              <button
                className="bg-violet-500 text-white py-6 px-14 rounded"
                onClick={resetGame}
              >
                リセット
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Image src={cardBackImageUrl} width={80} height={80} alt="" />
        </div>

        <div className="mt-4">
          <div className="text-center text-2xl font-bold">自分の手札</div>
          <Player handInfos={myHands} />
          <div className="text-center mt-4 text-xl">
            現在の合計値（自分）:{getTotalscore(myHands)}
          </div>
          <div className="text-center mt-4 text-xl">勝ち</div>
          <div className="flex justify-center py-4">
            <div className="flex space-x-4">
              <div>
                <button className="bg-violet-500 text-white py-6 px-20 rounded">
                  追加
                </button>
              </div>
              <div>
                <button className="bg-violet-500 text-white py-6 px-14 rounded">
                  追加しない
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

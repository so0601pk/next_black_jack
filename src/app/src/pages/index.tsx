import Image from 'next/image'
import { Inter } from 'next/font/google'
import cardBack from '@/json/card_back.json'
import Player from '@/components/player'

const cardBackImageUrl = cardBack.image

export default function Home() {
  return (
    <div>
      <div className="pt-18">
        <div>
          <div className="text-center text-2xl font-bold">相手の手札</div>
          <Player />
          <div className="text-center mt-4">現在の合計値（自分）:{}</div>
          <div className="text-center mt-4 text-xl">勝ち</div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex space-x-4">
            <div>
              <button className="bg-violet-500 text-white py-6 px-8 rounded">
                ゲームスタート
              </button>
            </div>
            <div>
              <button className="bg-violet-500 text-white py-6 px-14 rounded">
                リセット
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Image src={cardBackImageUrl} width={80} height={80} alt="" />
          {/* <img src= alt="" /> */}
        </div>
        <div className="mt-4">
          <div className="text-center text-2xl font-bold">自分の手札</div>
          <Player />
          <div className="text-center mt-4">現在の合計値（自分）:{}</div>
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

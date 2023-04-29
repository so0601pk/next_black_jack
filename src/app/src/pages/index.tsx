import Image from 'next/image'
import { Inter } from 'next/font/google'
import cardBack from '@/json/card_back.json'

const inter = Inter({ subsets: ['latin'] })
const cardBackImageUrl = cardBack.image

export default function Home() {
  return (
    <div>
      <div className="text-center text-2xl font-bold">相手の手札</div>
      <div className="flex justify-center my-4">
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
      <div className="flex justify-center my-4">
        <Image src={cardBackImageUrl} width={150} height={150} alt="" />
        {/* <img src= alt="" /> */}
      </div>
      <div className="text-center text-2xl font-bold">自分の手札</div>
    </div>
  )
}

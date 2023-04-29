import Image from 'next/image'
import { Inter } from 'next/font/google'
import cardBack from '@/json/card_back.json'

const inter = Inter({ subsets: ['latin'] })
const cardBackImageUrl = cardBack.image

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="mr-8 flex space-x-4">
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
        <div>
          <Image src={cardBackImageUrl} width={500} height={500} />
          {/* <img src= alt="" /> */}
        </div>
      </div>
    </div>
  )
}

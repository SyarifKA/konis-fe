'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Coupon({ data }) {
  const [claimedCoupons, setClaimedCoupons] = useState([])

  const handleClaim = (index) => {
    if (claimedCoupons.includes(index)) {
      // batalkan klaim (opsional)
      setClaimedCoupons(claimedCoupons.filter(i => i !== index))
    } else {
      // tambahkan ke daftar klaim
      setClaimedCoupons([...claimedCoupons, index])
    }
  }

  return (
    <>
      {data.map((item, index) => {
        const isClaimed = claimedCoupons.includes(index)
        const hasButton = !!item.button

        const bgColor = !hasButton
          ? 'bg-primary'
          : isClaimed
          ? 'bg-green-600'
          : 'bg-[#88B788]'

        return (
          <div
            key={index}
            className={`flex min-w-[400px] py-2 rounded-xl px-4 items-center transition-colors duration-300 ${bgColor}`}
          >
            <div className="relative w-20 h-20">
              <Image
                src={item.image}
                alt={item.title || 'Coupon'}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="ml-4 flex flex-col">
              <h1 className="font-semibold text-black">{item.title}</h1>
              <p className="text-black">{item.desc}</p>

              {hasButton && (
                <button
                  onClick={() => handleClaim(index)}
                  className="cursor-pointer text-sm bg-white text-green-700 px-3 py-1 rounded-md mt-2 hover:bg-green-100"
                >
                  {isClaimed ? 'Claimed' : item.button}
                </button>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}

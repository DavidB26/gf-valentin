"use client"

import Terms from "@/components/Terms"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Heart, HeartCrack } from "lucide-react"
import { Dancing_Script } from "next/font/google"
import Image from "next/image"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
})

const content = [
  {
    id: 1,
    text: "Hola, chito 🥺💘",
    className: "text-4xl",
  },
  {
    id: 2,
    text: "¿Te acuerdas cuál fue el primer momento en que dijiste: ‘ok, es él?",
    className: "text-3xl",
  },
  {
    id: 3,
    text: "Después de más de 4 años… ¿qué es lo que más amas de ‘nosotros’?",
    className: "text-3xl",
  },
  {
    id: 4,
    text: "Si pudieras revivir un día de nosotros, ¿cuál elegirías?",
    className: "text-3xl",
  },
  {
    id: 5,
    text: "¿Qué pequeña rutina nuestra te hace sentir en casa?",
    className: "text-3xl",
  },
  {
    id: 6,
    text: "Este 14… ¿prefieres cena fancy o plan tranqui con mantita? 😌",
    className: "text-3xl",
  },
  {
    id: 7,
    text: "Prometo seguir eligiéndote, cuidándote y haciéndote reír.",
    className: "text-2xl",
  },
  {
    id: 8,
    text: "Y ahora la pregunta importante…",
    className: "text-4xl",
  },
  {
    id: 9,
    text: "¿Quieres ser mi San Valentín? 💖",
    className: "text-5xl",
  },
]

export default function Home() {
  const [count, setCount] = useState(0)
  const [showTerms, setShowTerms] = useState(false)
  const [yesButtonSize, setYesButtonSize] = useState({
    width: 75,
    height: 40,
  })
  const [noButtonSize, setNoButtonSize] = useState({
    width: 75,
    height: 40,
  })

  const handleYesClick = () => {
    setShowTerms((current) => !current)
  }

  const handleNoClick = () => {
    setCount((prev) => prev + 1)
    setYesButtonSize((current) => ({
      width: current.width + 5,
      height: current.height + 5,
    }))
    setNoButtonSize((current) => ({
      width: current.width - 5,
      height: current.height - 5,
    }))
  }

  return (
    <div className='flex flex-col  bg-cover bg-center'>
      <main className='flex-1 flex justify-center items-center p-14'>
        <Carousel
          className='min-w-full max-w-48'
          opts={{ watchDrag: !showTerms }}
        >
          <CarouselContent>
            {content.map((item) => (
              <CarouselItem
                key={item.id}
                className='flex flex-col justify-center'
              >
                {item.id === 2 && (
                  <div className='align-middle mb-10'>
                    <Image
                      src='/First-Photo.webp'
                      className='rounded-2xl'
                      alt='Primera foto juntos'
                      width={500}
                      height={600}
                    />
                  </div>
                )}
                {item.id === 4 && (
                  <div className='align-middle mb-10'>
                    <Image
                      src='/second-photo.webp'
                      className='rounded-2xl'
                      alt='Foto juntos'
                      width={500}
                      height={600}
                    />
                  </div>
                )}
                {item.id === 5 && (
                  <div className='align-middle mb-10'>
                    <Image
                      src='/third-photo.jpg'
                      className='rounded-2xl'
                      alt='Third photo'
                      width={500}
                      height={600}
                    />
                  </div>
                )}
                {item.id === content.length && (
                  <div className='align-middle mb-10'>
                    <Image
                      width={400}
                      height={400}
                      src='/gojo.jpg'
                      className='rounded-2xl'
                      alt='Gojo'
                    />
                  </div>
                )}
                <div className='p-1'>
                  <Card>
                    <CardContent className='p-6'>
                      <span
                        className={twMerge(
                          dancingScript.className,
                          item.className,
                          "block text-center text-pretty"
                        )}
                      >
                        {item.text}
                      </span>
                    </CardContent>
                  </Card>
                </div>
                {item.id === content.length && (
                  <>
                    <div className='flex gap-4 justify-center mt-10 items-center'>
                      <Button
                        disabled={showTerms}
                        onClick={handleYesClick}
                        className='bg-pink-600 active:bg-pink-700 transition-transform hover:scale-110 active:scale-95 text-md'
                        style={{
                          width: yesButtonSize.width,
                          height: yesButtonSize.height,
                        }}
                      >
                        Sí!
                        <Heart />
                      </Button>
                      {count !== 10 && (
                        <Button
                          disabled={showTerms}
                          onClick={handleNoClick}
                          className='bg-pink-600 active:bg-pink-700 transition-transform hover:scale-110 active:scale-95 text-md'
                          style={{
                            width: noButtonSize.width,
                            height: noButtonSize.height,
                          }}
                        >
                          No
                          <HeartCrack />
                        </Button>
                      )}
                    </div>
                    {showTerms && <Terms />}
                  </>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious disabled={showTerms} />
          <CarouselNext />
        </Carousel>
      </main>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "./ui/button"

function Terms() {
  const [accept, setAccept] = useState(false)

  const handleEmailClick = () => {
    setAccept((prev) => !prev)
  }

  return (
    <div className='mt-20 text-center'>
      <div className='flex flex-col gap-4'>
        <h4 className='text-2xl font-semibold text-center'>
          Términos y condiciones
        </h4>
        <p className='text-justify text-pretty'>
          Yo, Genith Meléndez Barrera, doy mi consentimiento a estos términos
          y condiciones y acepto ser tu san valentin por siempre.
        </p>
      </div>
      <Button
        className='mt-6 active:scale-95 bg-pink-600 active:bg-pink-700'
        size='lg'
        onClick={handleEmailClick}
        disabled={accept}
      >
        Acepto
      </Button>
      {accept && (
        <h5 className='mt-10 text-3xl font-semibold'>
          ¡Muéstrame tu repuesta!
        </h5>
      )}
    </div>
  )
}

export default Terms

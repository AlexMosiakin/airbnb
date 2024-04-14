import React from 'react'
import { Container } from '../Container/Container'

export const Footer = () => {
  return (
    <div className="w-full bg-white z-10 shadow-sm mt-auto">
      <div className="py-4 border-t-[1px]">
        <Container>
          <div className="text-center">
            @Copyright: Aleksandr Mosiakin 2024
          </div>
        </Container>
      </div>
    </div>
  )
}

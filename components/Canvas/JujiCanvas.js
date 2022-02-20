import { useRef, useEffect } from 'react'

// requestAnimationFrame
export default function JujiCanvas({ calculate, draw, ...rest }){

  const canvas = useRef()
  const rafId = useRef()

  useEffect(() => {
    return () => {
      if(rafId.current) cancelAnimationFrame(rafId.current)
    }
  },[])

  const start = () => {

    if(rafId?.current) return requestAnimationFrame(() => { start() });
    if(!canvas?.current) return requestAnimationFrame(() => { start() });

    calculate && calculate()
    rafId.current = requestAnimationFrame(() => {

      draw && draw(canvas)
      rafId.current = null
      start()

    })

  }

  return <canvas ref={ref => {
    canvas.current = ref
    process.browser && start()
  }} {...rest}></canvas>

}

import { useRef, useEffect } from 'react'
import Ball from 'lib/Ball'
import Canvas from 'components/Canvas'

const defaultBallConfig = {

  initX: 0,
  initY: 0,
  gravity: 1,
  friction: 0.99,
  radius: 21,
  k: 0.8

}

export default function BallCanvas(){

  const thing = useRef(new Ball({

    ...defaultBallConfig,
    initForceY: 40 + Math.random() * 50,
    initForceX: 40 + Math.random() * 50,

  }))

  const calculate = () => {
    if(typeof window === 'undefined') return;
    thing.current.calculate(window.innerHeight, window.innerWidth)
  }

  const draw = ( canvas ) => {
    if(typeof window === 'undefined') return;
    thing.current.draw( canvas, window.innerHeight, window.innerWidth )
  }

  useEffect(() => {

    const newBall = (e) => {
      console.log('new Ball')
      thing.current = new Ball({

        ...defaultBallConfig,
        initX: e.pageX,
        initY: e.pageY,
        initForceY: -30 + (Math.random() * 10), // max force
        initForceX: -50 + (Math.random() * 100),

      })
    }

    window.addEventListener('click', newBall)

    return () => {

      window.removeEventListener('click', newBall)
    }

  },[])

  return <Canvas calculate={calculate} draw={draw} />

}

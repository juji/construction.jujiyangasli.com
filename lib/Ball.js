

const ForceLimit = 1

// everything is in pixel
export default function Ball({

  initX = 0,
  initY = 0,
  initForceY = 0,
  initForceX = 0,
  radius = 21,
  gravity = 1,
  friction = 1, // no friction
  k = 1, // super bouncy

}){

  const forceLimit = 1 - friction

  const props = {


    forceX: initForceX,
    forceY: initForceY,
    posX: initX,
    posY: initY,

    attached: false,

  }

  this.toggleInteractive = () => {
    props.attached = !props.attached
  }


  this.eventHandler = e => {
    if(!props.attached) return;
  }

  this.calculate = (maxY, maxX, minY = 0, minX = 0) => {

    // console.log('calculate INIT', props)

    if(props.attached) return;

    // friction
    props.forceY *= friction
    props.forceX *= friction


    // limit
    if(Math.abs(props.forceX)<forceLimit) props.forceX = 0
    if(Math.abs(props.forceY)<forceLimit) props.forceY = 0

    // gravity
    props.forceY += gravity

    // limit
    if(Math.abs(props.forceY)<forceLimit) props.forceY = 0

    // position
    props.posY += props.forceY
    props.posX += props.forceX

    // apply elasticity ( bouncy force thing )
    if((props.posX-radius) < minX){
      props.posX = minX+radius
      props.forceX = -props.forceX*k
    }

    if((props.posX+radius) > maxX){
      props.posX = maxX-radius
      props.forceX = -props.forceX*k
    }

    if((props.posY-radius) < minY){
      props.posY = minY+radius
      props.forceY = -props.forceY*k
    }

    // console.log('calculate PROGRESS', props)
    if((props.posY+radius) > maxY){
      props.posY = maxY-radius
      props.forceY = -props.forceY*k
    }

    // limit
    if(Math.abs(props.forceX)<forceLimit) props.forceX = 0
    if(Math.abs(props.forceY)<forceLimit) props.forceY = 0

    // console.log('calculate DONE', props)
  }

  // html canvas
  this.draw = ( canvas, maxY, maxX, minY = 0, minX = 0 ) => {

    if(!canvas.current) return;

    const ctx = canvas.current.getContext('2d')
    canvas.current.width = maxX
    canvas.current.height = maxY

    ctx.translate(0, 0);
    // ctx.clearReact(0, 0, maxX, maxY)
    ctx.fillStyle = '#242424';
    ctx.fillRect(0, 0, maxX, maxY);

    // ctx.translate(maxX/2, maxY/2);

    ctx.fillStyle = '#eaeaea';
    ctx.arc(props.posX, props.posY, radius, 0, 2 * Math.PI);
    ctx.fill()


  }

}
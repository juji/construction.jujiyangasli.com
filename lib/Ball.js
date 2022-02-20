

const ForceLimit = 1

const colors = [
  '#55efc4',
  '#81ecec',
  '#74b9ff',
  '#ff7675',
  '#ffeaa7',
  '#fd79a8',
  '#e17055',
  '#fdcb6e',
  '#00cec9',
]

function fisherYates(array) {

  const copy = [ ...array ]
  let currentIndex = copy.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [copy[currentIndex], copy[randomIndex]] = [
      copy[randomIndex], copy[currentIndex]];
  }

  return copy;
}

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
  const mouseMinDistance = 21
  const mouseForce = 20

  const ballColor = fisherYates(colors)[Math.round(Math.random()*(colors.length-1))]

  const props = {


    forceX: initForceX,
    forceY: initForceY,
    posX: initX,
    posY: initY,

  }

  this.calculate = (maxY, maxX, minY = 0, minX = 0) => {

    // friction
    props.forceY *= friction
    props.forceX *= friction

    // console.log('calculate PROGRESS', {...props})

    // gravity
    props.forceY += gravity

    // position
    props.posX += props.forceX
    props.posY += props.forceY

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

    if((props.posY+radius) > maxY){
      props.posY = maxY-radius
      props.forceY = -props.forceY*k
    }

    // console.log('calculate PROGRESS', props)
    // limit
    if(Math.abs(props.forceX)<forceLimit) props.forceX = 0
    if(Math.abs(props.forceY)<forceLimit) props.forceY = 0

    // console.log('calculate DONE', props)
  }

  // html canvas
  this.draw = ( canvas, maxY, maxX, minY = 0, minX = 0 ) => {

    if(!canvas.current) return;
    console.log(ballColor)

    const ctx = canvas.current.getContext('2d')
    canvas.current.width = maxX
    canvas.current.height = maxY

    ctx.translate(0, 0);
    // ctx.clearReact(0, 0, maxX, maxY)
    ctx.fillStyle = '#242424';
    ctx.fillRect(0, 0, maxX, maxY);

    // ctx.translate(maxX/2, maxY/2);

    ctx.fillStyle = ballColor;
    ctx.arc(props.posX, props.posY, radius, 0, 2 * Math.PI);
    ctx.fill()


  }

}

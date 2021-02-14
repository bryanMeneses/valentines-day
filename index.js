const els = {
  sect1: document.querySelector('section.first'),
  sect2: document.querySelector('section.second'),
  sect3: document.querySelector('section.third'),
}

const { sect1, sect2, sect3 } = els

gsap.registerPlugin(ScrollTrigger);

// first scene
const sect1Children = Array.from(sect1.children)

sect1Children.forEach((child, i) => {

  const delay = 2 * i

  const from = {
    opacity: 0, 
    y: 25
  }
  
  const to = {
    opacity: 1, 
    y: 0, 
    duration: 3, 
    delay
  }

  if (i === sect1Children.length - 1) {
    to.duration /= 2;
    to.filter = 'grayscale(100%)'
  }

  gsap.fromTo(child, from, to)
})

// scenes between first and second

sceneSegue = gsap.timeline()
sceneSegue.to(sect1Children, {scale: 0, duration: 1})
ScrollTrigger.create({
  animation: sceneSegue,
  trigger: sect2,
  start: "top 70%",
  end: "+=300",
  scrub: 1
})

// second scene

const sect2Children = Array.from(sect2.children)
const sceneTwo = gsap.timeline()

sect2Children.forEach((child, i) => {

  const from = {
    opacity: 0,
    scale: 1.3,
    duration: 3,
  }
  
  const to = {
    opacity: 1, 
    duration: 3,
    x: 0,
    scale: 1
  }

  if (i % 2 === 0) {
    from.x = 50;
  } else {
    from.x = -50;
  }

  sceneTwo.from(child, from)
  sceneTwo.to(child, to)
})

ScrollTrigger.create({
  animation: sceneTwo,
  trigger: sect2,
  start: "top 50%",
  end: "+=700",
  scrub: 1,
})

// scene 3

const planeScene = gsap.timeline()

planeScene.to(sect3.querySelector('.plane img'), {top: -40, left: "33%", rotation: 40, duration: 1 })
planeScene.to(sect3.querySelector('.plane img'), {left: "66%", duration: 1 })
planeScene.to(sect3.querySelector('.plane img'), {top: 24, left: "95%", rotation: 70, duration: 1 })

ScrollTrigger.create({
  animation: planeScene, 
  trigger: sect3,
  start: "top top",
  end: "=+300",
  scrub: 1,
  pin: true
})


const sect3Children = Array.from(sect3.children)
const sceneThree = gsap.timeline()

sect3Children.forEach((child, i) => {

  const from = {
    opacity: 0,
    scale: 1.3,
    duration: 3,
  }
  
  const to = {
    opacity: 1, 
    duration: 3,
    x: 0,
    scale: 1
  }

  if (i % 2 === 0) {
    from.y = 50;
  } else {
    from.y = -50;
  }

  sceneThree.from(child, from)
  sceneThree.to(child, to)
})

ScrollTrigger.create({
  animation: sceneThree,
  trigger: sect3,
  start: "top 50%",
  end: "+=700",
  scrub: 1,
})
let doc = document
let win = window
let body = doc.body
let runner = document.documentElement

let w = {
  width:  win.innerWidth,
  height: win.innerHeight,
  scrollBar: win.innerWidth - runner.clientWidth
}

let scrollAnim = null

let autoInitSwitches = {
  isScrollActive : true
}

let ua = window.navigator.userAgent;
let ms_ie = /MSIE|Trident|Edge/.test(ua);
let isMobile = (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

const updateDimensions = () => {
  w.width = win.innerWidth
  w.height = win.innerHeight
  w.scrollBar = win.innerWidth - body.clientWidth
}

win.addEventListener('resize', updateDimensions)

export {
  doc,
  win,
  body,
  runner,
  w,
  scrollAnim,
  autoInitSwitches,
  ms_ie,
  isMobile
}

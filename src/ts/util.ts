/**
 * .animate要素が画面内に入ったらアニメーションクラスをつける
 */
export function setUpScrollAnimation() {
  const animationElements = document.querySelectorAll('.animate')
  const observer = new IntersectionObserver(
    changes => {
      changes.forEach(change => {
        if (change.intersectionRect.height > 300) {
          change.target.classList.add('animated')
          observer.unobserve(change.target)
        }
      })
    },
    {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    },
  )
  animationElements.forEach(el => observer.observe(el))
}

/**
 * .awaitがついた画像の読み込みが全て終わるのを待つ
 */
export function sleepUntilAllImageLoaded() {
  return new Promise(resolve => {
    const imgElements = document.querySelectorAll('img.await')
    const imgSrcs = Array.from(new Set(Array.from(imgElements).map((e: HTMLImageElement) => e.src)))
    const promises = imgSrcs.map(src => {
      return new Promise(res => {
        const img = new Image()
        img.onload = res
        img.src = src
      })
    })
    promises.length === 0 ? resolve() : Promise.all(promises).then(resolve)
  })
}

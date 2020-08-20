const prize = [
  {
    prize: '50吋',
    num: 1,
  },
  {
    prize: 'PS4',
    num: 3,
  },
  {
    prize: '充電器',
    num: 10,
  },
  // {
  //   prize: '7-11',
  //   num: 100,
  // },
  //   {
  //     prize: 'nothing',
  //     num: 9886,
  //   },
]

//DOM

const start = document.getElementById('Start')
const result = document.getElementById('result')

//洗牌
let shuffle = (a, b) => {
  let num = Math.random() > 0.5 ? -1 : 1
  return num
}

let giftBox = []
prize.forEach((item, index) => {
  for (let i = 0; i < item.num; i++) {
    giftBox.push(index)
  }
  console.log(giftBox)
  giftBox.sort(shuffle)
  console.log(giftBox.sort(shuffle))

  // 事件 +介面

  start.addEventListener('click', () => {
    // console.log(giftIndex)

    // console.log(gift)
    result.innerHTML =
      giftBox.length === 0
        ? `獎品已全數抽完`
        : `<h3>${prize[giftBox.sort(shuffle).pop()].prize}</h3>`
  })
})

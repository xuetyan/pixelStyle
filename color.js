let colors = [
  // {dmc: 001, color: '255,255,255'}
]

fetch('http://localhost:4569').then(async (response) => {
  const html = await response.json()
  const vdom = document.querySelector('.mock')
  vdom.innerHTML = html
  const tableDom = vdom.querySelector('#articlecontent').querySelector('#artContent').querySelector('table').querySelector('tbody')
  // console.log(tableDom);
  const trs = tableDom.querySelectorAll('tr')
  for (const i in trs) {
    if (Object.prototype.hasOwnProperty.call(trs, i)) {
      // i === 0 表头
      if(i != 0) {
        colors.push(handlerTableTr(trs[i]))
      }
    }
  }
  console.log(colors);
})

var handlerTableTr = (tr) => {
  const tds = tr.querySelectorAll('td')
  const r = { color: [] }
  for (const i in tds) {
    if (Object.prototype.hasOwnProperty.call(tds, i)) {
      if (i == 0) { // 颜色编号
        r.dmc = tds[i].innerText
      } else if (i == 1) { // 颜色描述
        r.desc = tds[i].innerText
      } else if (i == 2 || i == 3 || i == 4) {
        r.color.push(+tds[i].innerText)
      }
    }
  }
  return r
}


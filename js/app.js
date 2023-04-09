const getElement = (selector) => {
  const element = document.querySelector(selector)
  if(element) return element
  throw Eror('Check your class name, there is no such class')
}

const links = getElement ('.nav-links')
const navBtnDOM = getElement('.nav-btn')
navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links');
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

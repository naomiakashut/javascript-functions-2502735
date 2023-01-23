info = {
  social: {
    youtube: 'https://youtube.com/planetoftheweb',
    linkedin: 'https://linkedin.com/in/planetoftheweb',
    blog: 'https://raybo.org'
  }
}

function listObject(data) {
  for (const key in data) {
    var list = (`${key}: ${data[key]}`)
  }
  console.log(list)
  const $ = document.querySelector.bind(canvas)
  $('#output').innerHTML = list
}

listObject(info.social)
info = {
  social: {
    youtube: 'https://youtube.com/planetoftheweb',
    linkedin: 'https://linkedin.com/in/planetoftheweb',
    blog: 'https://raybo.org'
  }
}

function listObject(data) {
  const $ = document.querySelector.bind(document)
  
  let list = '<ul>'
  for (const key in data) {
    list += `<li><a href="${data[key]}">${key}</a>`
  }
  console.log(list)
  $('#output').innerHTML = list
}

listObject(info.social)
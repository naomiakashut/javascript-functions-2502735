info = {
  social: {
    youtube: 'https://youtube.com/planetoftheweb',
    linkedin: 'https://linkedin.com/in/planetoftheweb',
    blog: 'https://raybo.org'
  },
// code before rewriting
//   logSocial: function() {
//     return (
//         console.log(`${this.social.youtube}
//             ${this.social.linkedin}
//             ${this.social.blog}`
//         )
//     )
//   }
    logSocial: function() {
        for (const key in this.social) {
            console.log(`${key}: ${this.social[key]}`)
        }
    }
}
info.logSocial();
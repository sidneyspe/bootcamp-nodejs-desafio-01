const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

const checkParams = (req, res, next) => {
  const { age } = req.query
  if (age != null) {
    return next()
  } else {
    return res.redirect('/')
  }
}

const checkMajor = (req, res, next) => {
  const { age } = req.query
  if (age >= 18) {
    return next()
  } else {
    return res.redirect(`/minor?age=${age}`)
  }
}

const checkMinor = (req, res, next) => {
  const { age } = req.query
  if (age < 18) {
    return next()
  } else {
    return res.redirect(`/major?age=${age}`)
  }
}

app.get('/', (req, res) => {
  return res.render('index')
})

app.post('/check', (req, res) => {
  const { age } = req.body
  if (age >= 18) {
    return res.redirect(`/major?age=${age}`)
  } else {
    return res.redirect(`/minor?age=${age}`)
  }
})

app.get('/major', checkParams, checkMajor, (req, res) => {
  const { age } = req.query
  return res.render('major', { age })
})

app.get('/minor', checkParams, checkMinor, (req, res) => {
  const { age } = req.query
  return res.render('minor', { age })
})

app.listen(3000)

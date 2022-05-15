let BASE_URL = ''
const TIME_OUT = 1000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://shichiye.org/prod'
} else {
  BASE_URL = 'http://shichiye.org/test'
}

export { BASE_URL, TIME_OUT }


const routes = {

  path: '/',
  indexRoute: {onEnter:(nextState,replace) => replace('/user') },
  routes: [
    require('./user').default,
  ]
}

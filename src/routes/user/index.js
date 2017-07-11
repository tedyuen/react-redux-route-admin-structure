export default {
  path: 'user',
  component: require('../../components/common/Layout').default,
  indexRoute: { onEnter: (nextState, replace) => replace('/user/followers') },
  routes: [
    {
      path: 'followers',
      getComponent(nextState, cb) {
        import('./containers/Followers').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]

  // component: require('../../components/user')

}

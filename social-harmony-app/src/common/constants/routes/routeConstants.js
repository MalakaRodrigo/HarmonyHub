export const routes = {
    index: '/',
    auth: {
      signIn: '/signin',
      signUp: '/signup'
    },
    dashboard: {
        index: '/dashboard'
    },
    organization: {
      dashboard: '/app/organizations/dashboard',
      segments: '/app/organizations/segments',
      segmentsForm: '/app/organizations/segments/:id', // used in the router
      segmentsFormRoute: '/app/organizations/segments/', // used in links so id can be appended
      list: '/app/organizations/list',
      analytics: '/app/organizations/analytics',
      board: '/app/organizations/board',
    }
}
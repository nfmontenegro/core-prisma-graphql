import {createApolloFetch} from 'apollo-fetch'

test('adds 1 + 2 to equal 3', () => {
  const apolloFetch = createApolloFetch({
    uri: `http://localhost:4000/`
  })

  apolloFetch({
    query: `mutation login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    token
    user {
      id
      name
      lastname
      email
    }
  }
}
`,
    variables: {email: 'new2@gmail.com', password: '123'}
  }).then(response => expect(response).toBeTruthy())
})
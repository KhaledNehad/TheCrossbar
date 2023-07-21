import { useEffect, useState } from 'react'

import Container from '../../layout/Container'

const Score = () => {
  const [authenticated, setAuthenticated] = useState('')

  useEffect(() => {
    const loggedInUser = localStorage.getItem('authenticated')

    if (loggedInUser === 'true') {
      setAuthenticated('true')
      console.log(loggedInUser)
    }
  }, [])
  authenticated && (
    <Container>
      <h1>Score</h1>
    </Container>
  )
}

export default Score

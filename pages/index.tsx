import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6} size="lg">Login</Heading>
        <Input placeholder='@moutinhofuturedev' textAlign="center" variant="filled" mb={3} type="email"/>
        <Input placeholder='********' textAlign="center" variant="filled" mb={3} type="password"/>
        <Button mb={6} colorScheme='teal'>Log in</Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  )
}

export default Home

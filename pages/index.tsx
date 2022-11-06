import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Icon } from '@chakra-ui/react'
import { MdOutlineLightMode, MdModeNight } from "react-icons/md"

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={["2rem", "2rem", "3rem"]} rounded={6}>
        <Heading mb={"1.5rem"} size="lg" textAlign={["center", "center", "left"]}>Login</Heading>
        <Input placeholder='@moutinhofuturedev' textAlign="center" variant="filled" mb={"0.75rem"} type="email"/>
        <Input placeholder='********' textAlign="center" variant="filled" mb={"0.75rem"} type="password"/>
        <Button mb={"1.5rem"} colorScheme='teal'>Log in</Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode
          {formBackground === "gray.700" ? <Icon as={MdOutlineLightMode} ml="3"/> : <Icon as={MdModeNight} ml="3"/>} {/* dark:light mode */}
        </Button> 
      </Flex>
    </Flex>
  )
}

export default Home

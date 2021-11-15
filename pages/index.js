import styles from '../styles/Home.module.css'
import Main from '../components/layouts/main';
import { 
  Container, 
  Box, 
  Heading 
} from "@chakra-ui/react"

export default function Home() {
  return (
    <Main>
      <Heading fontSize="2xl" color="spacejelly" >Hello, world!</Heading>
      <Box bg="brand.700">You`re Welcome</Box>
    </Main>
  )
}

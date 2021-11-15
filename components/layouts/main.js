import Head from 'next/head'
import { Container } from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/react';

export default function Main({ children }) {
  return (
    <main>
      <Head>
        <title>Chakra UI components</title>
      </Head>

      <div>
        {children}
      </div>
    </main>
  )
}
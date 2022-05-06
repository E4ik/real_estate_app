import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button, styled} from '@chakra-ui/react';

//Chakra UI
const Banner = ({purpose}) => (
 <Flex flexwrap="wrap" justifyContent="center" alignItems="center" m="10">
   {purpose}
 </Flex>
)

export default function Home() {
  return (
    <div >
      <h1>123</h1>
      <Banner purpose={'For sale'}/>
      <Banner purpose={'For rent'}/>

    </div>
  )
}

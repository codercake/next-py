

/** @jsxImportSource @emotion/react */

import { Fragment } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Box, Image as ChakraImage, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <Fragment>
  <VStack sx={{"height": "100vh", "background": "#04090B", "paddingTop": "20%"}}>
  <ChakraImage src={`/logo_darkmode.svg`} sx={{"width": "150px"}}/>
  <Text sx={{"color": "#F3F5F7", "fontSize": "28px", "padding": "12px", "maxWidth": "620px"}}>
  {`High performance web apps in pure python with built in AI functions`}
</Text>
  <Box sx={{"background": "white", "padding": "12px 42px", "borderRadius": "lg"}}>
  {`Get started by editing `}
  <Text as={`b`}>
  {`my_app/my_app.py`}
</Text>
  <ChakraImage src={`/gradient_underline.svg`} sx={{"width": "150px"}}/>
</Box>
</VStack>
</Fragment>
  <NextHead>
  <title>
  {`Nextpy App`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}

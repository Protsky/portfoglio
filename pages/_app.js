import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../componets/layouts/main'
import theme from'../lib/theme'
import Fonts from "../componets/layouts/fonts";
import { AnimatePresence } from 'framer-motion'
const Website = ({ Component, pageProps, router } ) => {
    return (
        <ChakraProvider thme={theme}>
            <Fonts />
            <Layout router={router}>
            <AnimatePresence exitBeforeEnter initial={true}> 
            <Component {...pageProps} key={router.route} />
            </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}
export default Website
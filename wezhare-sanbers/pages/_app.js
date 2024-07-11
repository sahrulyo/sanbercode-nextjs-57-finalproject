// pages/_app.js

//import { QueryClient, QueryClientProvider } from 'react-query';
import style from "../styles/globals.css"
// pages/_app.js

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // pastikan impor dari @tanstack/react-query
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // pastikan impor dari @tanstack/react-query-devtools
import { ChakraProvider } from '@chakra-ui/react'; // jika menggunakan Chakra UI

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

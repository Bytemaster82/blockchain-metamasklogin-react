import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import theme from './definitions/chakra/theme';
import Layout from './Layout';
import ConnectButton from './components/ConnectButton';
import AccountModal from './components/AccountModal';
// import { StyledThemeProvider } from './definitions/styled-components';

function App(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ConnectButton handleOpenModal={onOpen}></ConnectButton>
        <AccountModal isOpen={isOpen} onClose={onClose}></AccountModal>
      </Layout>
    </ChakraProvider>
  );
}

export default App;

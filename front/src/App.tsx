import Routes from './routes';
import GlobalStyle from './styles/global';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Routes />
    </QueryClientProvider>
  );
};

export default App;


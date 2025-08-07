import { Layout } from 'antd';
import TopHeader from './layouts/TopHeader';
import MainHeader from './layouts/MainHeader';
import AppFooter from './layouts/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#fff' }}>
      <TopHeader />
      <MainHeader />
      <Layout.Content>
        <HomePage />
      </Layout.Content>
      <AppFooter />
    </Layout>
  );
}

export default App;
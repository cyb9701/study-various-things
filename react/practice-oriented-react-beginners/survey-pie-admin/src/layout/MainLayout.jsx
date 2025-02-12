import { Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { useNavigate } from 'react-router';

const MainLayout = ({ selectedKeys, children }) => {
  const navigate = useNavigate();

  function getItem(key, label) {
    return {
      key,
      label,
    };
  }

  const items = [getItem('/list', '설문사 관리'), getItem('/builder', '빌더')];

  const onClick = (e) => {
    navigate(e.key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div
          className='demo-logo-vertical'
          style={{
            height: '32px',
            margin: '16px',
            background: 'rgba(255, 255, 255, .2)',
          }}
        />
        <Menu
          theme='dark'
          defaultSelectedKeys={['1']}
          selectedKeys={selectedKeys}
          mode='inline'
          onClick={onClick}
          items={items}
        />
      </Sider>
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

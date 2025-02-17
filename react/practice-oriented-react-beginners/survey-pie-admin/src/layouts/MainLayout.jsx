import { Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { useNavigate } from 'react-router';
import './MainLayout.css';

const MainLayout = ({ selectedKeys, children, padding = 45 }) => {
  const navigate = useNavigate();

  function getItem(key, label) {
    return {
      key,
      label,
    };
  }

  const items = [getItem('/list', '설문사 관리')];

  const onClick = (e) => {
    navigate(e.key);
  };

  return (
    <Layout className='layout'>
      <Sider>
        <div className='demo-logo-vertical' />
        <Menu
          className='menu'
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
        <Content className='content' style={{ padding }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

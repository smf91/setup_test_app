import React from 'react'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import { compose } from 'redux'
import 'antd/dist/antd.css'
import './App.css';
import ContantContainer from './Component/ContentContainer'
import NewUserModal from './Component/NewUserModal'



import { Layout, Menu, Input, Row, Col } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout
const { Search } = Input;

const onSearch = (value) => console.log(value);

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <NewUserModal />
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Search placeholder="filter email" onSearch={onSearch} enterButton />
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Search placeholder="filter phone" onSearch={onSearch} enterButton />
            </Col>
          </Row>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: window.innerHeight }}>
              <ContantContainer />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>footer</Footer>
        </Layout>
      </Layout>
    </Provider>
  )
}


const mapStateToProps = (state) => {
  return {
  }
}
export default compose(
  connect(mapStateToProps, {})
)(App)

// export default App;

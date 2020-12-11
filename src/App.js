import React from 'react'
import { Provider } from 'react-redux'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import SiderComponent from './Component/Sider/SiderComponent'
import HeaderComponent from './Component/Header/HeaderComponent'
import ContentComponent from './Component/Content/ContentComponent'
import FooterComponent from './Component/Footer/FooterComponent'

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <ContentComponent />
          <FooterComponent />
        </Layout>
      </Layout>
    </Provider>
  )
}

export default App

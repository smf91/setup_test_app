import React from 'react'
import { Layout } from 'antd'
import ContantContainer from './ContentContainer'

const { Content } = Layout

const ContentComponent = () => {
    return <>
        <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: window.innerHeight }}>
                <ContantContainer />
            </div>
        </Content>
    </>
}

export default ContentComponent
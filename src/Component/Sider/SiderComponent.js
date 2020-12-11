import React from 'react'
import { Layout, Input, Row, Col, Button, Radio } from 'antd'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { toggleShowModalWindow, setFilterValue} from '../../Redux/app-reducer'

const { Sider } = Layout
const { Search } = Input

const SiderComponent = (props) => {
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
        color : "#fff"
    }

    const toogle = () => {
        props.toggleShowModalWindow()
    }
    const setFilterValue= (e) => {
        console.log('radio checked', 'value - ' + e.target.value)
        console.log('radio checked', 'name - ' + e.target.name)
        props.setFilterValue(e.target.name, e.target.value)
    }
    return <>
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken)
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type)
            }}
        >
            <div className="logo" />
            <Row gutter={[16, 16]} align={"center"}>
                <Col span={12} >
                    <Button type="primary" onClick={toogle}>Add user</Button>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Input placeholder="filter email"  name = 'emailFilter' onChange={setFilterValue} />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Input placeholder="filter phone"  name = 'phoneFilter' onChange={setFilterValue} />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Radio.Group onChange={setFilterValue} name = 'statusFilter' >
                        <Radio style={radioStyle} value='admin'>
                            Admin
                        </Radio>
                        <Radio style={radioStyle} value='user'>
                            User
                        </Radio>
                        <Radio style={radioStyle} value='partner'>
                            Partner
                        </Radio>
                        <Radio style={radioStyle} value= ''>
                            Anyone...
                        </Radio>
                    </Radio.Group>
                </Col>
            </Row>
        </Sider>
    </>
}

const mapStateToProps = (state) => {
    return {
    }
}

export default compose(
    connect(mapStateToProps, { toggleShowModalWindow,
                                setFilterValue 
    })
)(SiderComponent)
import React from 'react'
import { Card, Col, Row } from 'antd';
import {compose} from 'redux'
import {connect} from 'react-redux'
import {
    EditOutlined,
    DeleteOutlined
    } from '@ant-design/icons';

import {deleteUser, editUser} from '../Redux/users-reducer'


const ContantContainer = (props) => {

    const deleteUsers=()=>{
        props.deleteUser("345453")
    }

    if (props.users.length === 0) {
        return <div> нет юзеров </div>
    } else {
        return <div className="site-card-wrapper">
            <Row gutter={16}>
                {
                    props.users.map((user) =>
                        <Col span={8} key={user.id} id={user.id}>
                            <Card title={user.name} extra={[<EditOutlined  onClick ={()=>{props.editUser(user.id)}} />,  <DeleteOutlined onClick ={()=>{props.deleteUser(user.id)}}/>]} bordered={false} >
                                <ul>
                                    <li>{user.email}</li>
                                    <li>{user.phone}</li>
                                    <li>{user.status}</li>
                                    <li>{user.password}</li>
                                    <li>{user.creationDate}</li>
                                    <li>{user.lastModifideDate}</li>
                                </ul>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </div>
    }
}



const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}
export default compose(
    connect(mapStateToProps, {deleteUser, editUser})
)(ContantContainer)
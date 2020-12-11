import React, { useState } from 'react'
import { Card, Col, Row } from 'antd'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons'
import { deleteUser, editUser, selectMutableUser } from '../../Redux/users-reducer'
import ModalWindowComponent from './ModalWindowComponent'
import EditUserFormComponent from '../Forms/EditUserFormComponent'
import { toggleShowModalWindow } from '../../Redux/app-reducer'


const ContantContainer = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const showModal = (userID) => {
        props.toggleShowModalWindow()
        props.selectMutableUser(userID)
    }
    // const handleOk = () => {
    //     setIsModalVisible(false)
    // }
    // const handleCancel = () => {
    //     setIsModalVisible(false)
    // }

    if (props.users.length === 0) {
        return <>
            <div>fdsdfgfd</div>
            <ModalWindowComponent />
        </>
    } else {

            let arr =[]
            if (props.filters.statusFilter === ''){
                arr = props.users
            } else{
                arr = props.users.filter((user) =>{ 
                    return user.status === props.filters.statusFilter})
            }
            if (props.filters.phoneFilter !== ''){
                arr = props.users.filter((user) =>{ 
                    return user.phone.includes(props.filters.phoneFilter)})
            }
            if (props.filters.emailFilter !== ''){
                arr = props.users.filter((user) =>{ 
                    return user.email.includes(props.filters.emailFilter)})
            }

        return <>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    {
                        arr.map((user) =>
                            <Col span={8} key={user.id} id={user.id}>
                                <Card title={user.name}
                                    extra={[<EditOutlined onClick={() => { showModal(user.id) }} />,
                                    <DeleteOutlined onClick={() => { props.deleteUser(user.id) }} />]}
                                    bordered={false}
                                >
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
            <ModalWindowComponent />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        filters: state.app.filters
    }
}

export default compose(
    connect(mapStateToProps, {
        deleteUser,
        editUser,
        selectMutableUser,
        toggleShowModalWindow
    })
)(ContantContainer)
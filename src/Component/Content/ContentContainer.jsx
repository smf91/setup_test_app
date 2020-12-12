import React from 'react'
import { Card, Col, Row } from 'antd'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons'
import { deleteUser, selectMutableUser } from '../../Redux/users-reducer'
import ModalWindowComponent from './ModalWindowComponent'
import { toggleShowModalWindow } from '../../Redux/app-reducer'


const ContantContainer = (props) => {
    const showModal = (userID) => {
        props.selectMutableUser(userID)
        props.toggleShowModalWindow()
    }

    if (props.users.length === 0) {
        return <>
            <div>fdsdfgfd</div>
            <ModalWindowComponent />
        </>
    } else if (props.isModalVisible === false && props.users.length !== 0) {

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
                            <Col className='card' span={8} key={user.id} id={user.id}>
                                <Card title={user.name}
                                    extra={[<EditOutlined onClick={() => { showModal(user.id) }} />,
                                    <DeleteOutlined onClick={() => { props.deleteUser(user.id) }} />]}
                                    bordered={false}
                                >
                                    <ul>
                                        <li>email: {user.email}</li>
                                        <li>phone: {user.phone}</li>
                                        <li>status{user.status}</li>
                                        <li>password: {user.password}</li>
                                        <li>Creation date: {user.creationDate}</li>
                                        <li>Last modifide: {user.lastModifideDate}</li>
                                    </ul>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>
            
        </>
    } else {
        return <ModalWindowComponent />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        filters: state.app.filters,
        isModalVisible: state.app.showModalWindow
    }
}

export default compose(
    connect(mapStateToProps, {
        deleteUser,
        selectMutableUser,
        toggleShowModalWindow
    })
)(ContantContainer)
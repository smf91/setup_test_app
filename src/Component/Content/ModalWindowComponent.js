import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import { compose } from 'redux'
import { connect } from 'react-redux'
import NewUserFormComponent from '../Forms/NewUserFormComponent'
import EditUserFormComponent from '../Forms/EditUserFormComponent'
import { deleteUser, editUser, selectMutableUser } from '../../Redux/users-reducer'
import { toggleShowModalWindow } from '../../Redux/app-reducer'


const ModalWindowComponent = (props) => {
    // const [isModalVisible, setIsModalVisible] = useState(false)
    const showModal = () => {
        props.toggleShowModalWindow()
    }

    const handleOk = () => {
        props.toggleShowModalWindow()
    }

    const handleCancel = () => {
        props.toggleShowModalWindow()
    }
    return (
        <>
            <Modal
                title= {(!props.mutableUser) ?"Create user" :"Edit user" }
                visible={props.isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {
                    (!props.mutableUser) ? <NewUserFormComponent />
                                        : <EditUserFormComponent />
                }
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        mutableUser: state.users.mutableUser,
        isModalVisible: state.app.showModalWindow
    }
}

export default compose(
    connect(mapStateToProps, {
        deleteUser,
        editUser,
        selectMutableUser,
        toggleShowModalWindow
    })
)(ModalWindowComponent)

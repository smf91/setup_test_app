import React from 'react'
import { Modal } from 'antd'
import { compose } from 'redux'
import { connect } from 'react-redux'
import NewUserFormComponent from '../Forms/NewUserFormComponent'
import EditUserFormComponent from '../Forms/EditUserFormComponent'
import { deleteMutableUser} from '../../Redux/users-reducer'
import { toggleShowModalWindow } from '../../Redux/app-reducer'

const ModalWindowComponent = (props) => {
    const handleOk = () => {
        props.deleteMutableUser()
        props.toggleShowModalWindow()
    }
    const handleCancel = () => {
        props.toggleShowModalWindow()
        props.deleteMutableUser()
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
        mutableUser: state.users.mutableUser,
        isModalVisible: state.app.showModalWindow
    }
}

export default compose(
    connect(mapStateToProps, {
        toggleShowModalWindow,
        deleteMutableUser
    })
)(ModalWindowComponent)

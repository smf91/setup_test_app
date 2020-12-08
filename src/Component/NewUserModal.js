import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import NewUserFormComponent from './NewUserFormComponent'

const NewUserModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add user
            </Button>
            <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
            <NewUserFormComponent/>
            </Modal>
        </>
    )
}
export default NewUserModal
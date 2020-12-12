import React  from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {editUserThunk} from '../../Redux/users-reducer'
import {toggleShowModalWindow} from '../../Redux/app-reducer'

import {
    Form,
    Input,
    Select,
    Button,
    Radio
} from 'antd';

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
}
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
}

const EditUserFormComponent = (props) => {
    const [form] = Form.useForm()
    const onFinish = (newUserData) => {
        props.editUserThunk(newUserData, props.mutableUser) 
        props.toggleShowModalWindow()       
    }
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}
            >
                <Option value="7">+7</Option>
            </Select>
        </Form.Item>
    );
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                name : props.mutableUser.name,
                email : props.mutableUser.email,
                password : props.mutableUser.password,
                confirm : props.mutableUser.password,
                status : props.mutableUser.status,
                phone : props.mutableUser.phone,
                prefix: '7',
            }}
            scrollToFirstError
        >
            <Form.Item
                name="name"
                label={
                    <span>
                        Name&nbsp;
                    </span>
                }
                rules={[
                    {   
                        required: false,
                        message: 'Please input your name!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: false,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item name="status" label="Status">
                <Radio.Group >
                    <Radio.Button value="admin">Admin</Radio.Button>
                    <Radio.Button value="user">User</Radio.Button>
                    <Radio.Button value="partner">Partner</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Apply
                </Button>
            </Form.Item>
        </Form>
    )
}

const mapStateToProps = (state) => {
    return {
        mutableUser : state.users.mutableUser
    }
}

export default compose(
    connect(mapStateToProps, {editUserThunk,
                                toggleShowModalWindow
                            })
)(EditUserFormComponent)

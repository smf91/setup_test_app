import React  from 'react'
import {createUserThunk} from '../Redux/users-reducer'
import {compose} from 'redux'
import {connect} from 'react-redux'

import {
    Form,
    Input,
    Cascader,
    Select,
    Button,
    // AutoComplete,
} from 'antd';

const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;
const residences = [
    {
        value: 'admin',
        label: 'Admin',
    },
    {
        value: 'client',
        label: 'Client',
    },
    {
        value: 'partner',
        label: 'Partner',
    }
]
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

const NewUserFormComponent = (props) => {
    const [form] = Form.useForm()
    const onFinish = (values) => {
        console.log('hello');
        let user ={
                name: 'Alesssxey1222',
                id: '345453',
                status: 'admin',
                phone: '85432543544',
                email: 'mail233@mail.ru',
                password: 'ffferr4',
                creationDate: "12.31.443",
                lastModifideDate: '234.243.523'
        }
        props.createUserThunk(user)


    }
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}
            >
                <Option value="7">+7</Option>
            </Select>
        </Form.Item>
    );
    // const [autoCompleteResult, setAutoCompleteResult] = useState([])

    // const onWebsiteChange = (value) => {
    //     if (!value) {
    //         setAutoCompleteResult([])
    //     } else {
    //         setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    //         setAutoCompleteResult([])
    //     }
    // }
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['admin', 'user', 'partner'],
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
                        required: true,
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
                        required: true,
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
            <Form.Item
                name="status"
                label="Status"
                rules={[
                    {
                        type: 'array',
                        required: true,
                        message: 'Please select your status user!',
                    },
                ]}
            >
                <Cascader options={residences} />
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
                    Register
                </Button>
            </Form.Item>
        </Form>
    )
}




const mapStateToProps = (state) => {
    return {
    }
}

export default compose(
    connect(mapStateToProps, {createUserThunk})
)(NewUserFormComponent)

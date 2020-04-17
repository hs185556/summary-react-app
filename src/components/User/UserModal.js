import { Modal, Form, Input, Icon } from 'antd';
import { useState } from 'react';

function UserModal(props) {
    let [visible, setVisible] = useState(false);
    const { children, user={id:null,name:null,pwd:null} } = props;
    let [isDisabled] = useState(()=>{
        return user.id == null?false:true
    });
    let {id,name,pwd} = user;
    const { getFieldDecorator } = props.form;
    function showModal() {
        setVisible(true);
    }
    function handleOk() {
        const { onOk } = props;
        props.form.validateFields((err, values) => {
            if (!err) {
                onOk(values)
                setVisible(false);
            }
        });
    }
    function handleCancel() {
        setVisible(false);
    }
    return (
        <span>
            <span onClick={showModal}>
                {children}
            </span>
            <Modal
                title={props.title}
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form>
                    <Form.Item>
                        {getFieldDecorator('id', {
                            rules: [{ required: true, message: 'Please input your id!' }],
                            initialValue: id,
                        })(
                            <Input
                                placeholder="id"
                                disabled={isDisabled}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                            initialValue: name,
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="name"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('pwd', {
                            rules: [{ required: true, message: 'Please input your password!' }],
                            initialValue: pwd,
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="pwd"
                            />,
                        )}
                    </Form.Item>
                </Form>
            </Modal>
        </span>
    );
}

export default Form.create()(UserModal);

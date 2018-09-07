import React from 'react';
import { loginKey }from '../../utils/config'
import { Modal, Button, Form, Input, Icon, message} from 'antd';
import {login, refreshLogin} from "../../services/login";

const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            submitting: false
        }
    }
    login = (e)=> {
        e.preventDefault();
        this.setState({
            submitting: true
        });
        this.props.form.validateFields((err, values) => {
            if (!err) {
                login(values).then((res)=>{
                    if(res.status === 200){
                        refreshLogin()
                        setTimeout(()=> window.location.reload(), 200);
                        message.success('登录成功')
                    }else {
                        message.error(res.message);
                        this.setState({
                            submitting: false
                        })
                    }

                })

            }else{
                this.setState({
                    submitting: false
                })
            }
        });

    };
    render(){
        const footer = <Button disabled={this.state.submitting} type='primary' onClick={this.login}>点击登录</Button>;
        const { getFieldDecorator } = this.props.form;
        return <Modal closable={false} visible={true} footer={footer}title='登录' >

            <Form >
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input onPressEnter={this.login} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input onPressEnter={this.login} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
            </Form>
        </Modal>
    }

}
export default Form.create()(Login);
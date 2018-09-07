import React from 'react';
import BaseComponent from './base'
import Modal from '../shared/modal/index'
import Edit from '../shared/edit/index'
import request from  '../../utils/request'
import {Form, Button, message} from 'antd';
import { isArray } from 'util';


export default class EditModal extends BaseComponent {


    handleSave = () => {
        this.refs.editForm.save().then(res => {
            if(isArray(res)) {
                return;
            } else {
                this.handleCancel();
            }
            return res;
        }).catch(e => {
            console.log(e);
        });
    }

    getProps = () => {
        return Object.assign({
            title: '新增'
        }, this.props)
    }


    render() {
        const props = this.getProps();
        return (
            <Modal {...props} {...this.state} ref="modal">
                <div ref="body">
                    <Edit {...props} ref="editForm"></Edit>
                </div>
                <div ref="footer">
                    <Button key="back" onClick={this.handleCancel}>取消</Button>
                    <Button key="save" onClick={this.handleSave} type="primary">保存</Button>
                </div>
            </Modal>
            
        )
    }
}

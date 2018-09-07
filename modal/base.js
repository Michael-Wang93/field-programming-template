import React, {Component} from 'react';

export default class ModalBase extends Component {
    
    handleCancel = () => {
        this.refs.modal.handleCancel();
    }
}

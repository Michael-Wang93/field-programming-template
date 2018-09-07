import {RegisterAction} from '../meta-install/action-register'
import BaseAction from './base'
import BaseEdit from '../modal/baseEdit';

const MODEL = 'user';

@RegisterAction(MODEL, {
    label: '删除',
    name: 'delete'
})
export class RunTaskDelete extends BaseAction  {
    onClick = (options) => {
        alert('删除');
    }
}

@RegisterAction(MODEL, {
    label: '编辑',
    name: 'edit'
})
export class RunTaskEdit extends BaseAction  {
    onClick = ({record, vm}) => {
        window.ModalManager.open(
            BaseEdit, {
                title: '编辑用户',
                colCount: 2,
                initData: record,
                saveUrl: '/ztmkt/role/updateRole',
                callback: vm.refreshIndex,
                model: MODEL
            }, {
                width: '50%'
            }
        )
    }
}

@RegisterAction(MODEL, {
    label: '新增',
    name: 'add',
    position: 'right',
    isBatch: true
})
export class RunTaskAdd extends BaseAction  {
    onClick = ({vm}) => {
        window.ModalManager.open(
            BaseEdit, {
                title: '新增用户',
                colCount: 2,
                saveUrl: '/ztmkt/user/addUserInfo',
                callback: vm.refreshIndex,
                model: MODEL
            }, {
                width: '50%'
            }
        )
    }
}

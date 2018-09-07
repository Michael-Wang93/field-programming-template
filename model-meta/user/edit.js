export default [
    {
        dataIndex:"username",
        title: '姓名',
        type: 'char'
    },
    {
        dataIndex:"cardNo",
        title: '身份证号',
        validateType: 'cardNo',
        type: 'char'
    },
    {
        dataIndex:"mobile",
        title: '手机号码',
        validateType: 'mobilePhone',
        type: 'char'
    },
    {
        dataIndex:"entryTime",
        title: '入职时间',
        type: 'date'
    },
    {
        dataIndex:"userId",
        title: '用户名',
        validateType: 'userName',
        type: 'char',
    },
    {
        dataIndex:"password",
        title: '登录密码',
        type: 'char',
    },
    {
        dataIndex:"roleCode",
        title: '角色',
        type: 'dropdown',
        optionMap:['cusKey', 'cusValue'],
        optionUrl: '/ztmkt/role/queryRoleEnum'
    }
]
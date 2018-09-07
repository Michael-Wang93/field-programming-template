export default [
    {
        dataIndex:"username",
        title: '姓名',
        type: 'char'
    },
    {
        dataIndex:"cardNo",
        title: '身份证号',
        type: 'char'
    },
    {
        dataIndex:"mobile",
        title: '手机号码',
        type: 'char'
    },
    {
        dataIndex:"entryTime",
        title: '入职时间',
        type: 'date'
    },
    {
        dataIndex:"name",
        title: '角色',
        type: 'dropdown',
        optionMap:['cusKey', 'cusValue'],
        optionUrl: '/ztmkt/role/queryRoleEnum'
    },
    {
        dataIndex:"status",
        title: '人员状态',
        type: 'dropdown',
        options: [
            {
                code: '1',
                name: '在职'
            },
            {
                code: '0',
                name: '离职'
            }
        ]
    },
]
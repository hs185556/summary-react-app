import React from 'react'
import styles from './User.css'
import { connect } from 'dva';
import {Table} from 'antd';

function User({list}){
    const columns = [
        {
            title: '用户名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '密码',
            dataIndex: 'pwd',
            key: 'pwd',
          },
          {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a style={{ marginRight: 16 }}>Invite {record.name}</a>
                    <a>Delete</a>
                </span>
            ),
          }
    ]
    return (
        <div className={styles.normal}>
            <h2 className={styles.txt}>user.html</h2>
            <Table dataSource={list} columns={columns} />
        </div>
    )
}

function mapStateToProps(state){
    const {list} = state.user;
    return {
        list
    }
}

export default connect(mapStateToProps)(User);

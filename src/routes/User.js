import React from 'react'
import styles from './User.css'
import { connect } from 'dva';
import {Table,Button} from 'antd';
import UserModal from '../components/UserModalComponent'

function User({dispatch,list}){
    function handleRemove(id){
        dispatch({
            type:'user/remove',
            payload:id
        })
    }
    function propsEditOnOk(user){
        dispatch({
            type:"user/update",
            payload:{
                user
            }
        })
    }
    function propsCreateOnOk(user){
        dispatch({
            type:"user/create",
            payload:{
                user
            }
        })
    }
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
                    <a style={{ marginRight: 16 }} onClick={()=>handleRemove(record.id)}>remove</a>
                    <UserModal user={record} onOk={propsEditOnOk} title="修改用户">
                        <a>edit</a>
                    </UserModal>
                </span>
            ),
          }
    ];
    return (
        <div className={styles.normal}>
            <UserModal onOk={propsCreateOnOk} title="创建用户">
                <Button type="primary">创建用户</Button>
            </UserModal>
            <Table dataSource={list} columns={columns} rowKey={record => record.id} />
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

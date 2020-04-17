import React, { useEffect } from 'react'
import styles from './User.css'
import { connect } from 'dva';
import { Table, Button, Pagination } from 'antd';
import UserModal from '../components/UserModalComponent'
import vars from '../variable'

function User({ dispatch, paginationData }) {
    const pageSize = vars.pageSize;
    useEffect(() => {
        dispatch({
            type: "user/getPagination",
            payload: {
                page: 1,
                size: pageSize
            }
        }).then((v) => {
            console.log(v);//eslint-disable-line
        })
    }, [])
    function propsEditOnOk(user) {
        dispatch({
            type: "user/updateUser",
            payload: {
                user
            }
        })
    }
    function propsCreateOnOk(user) {
        dispatch({
            type: "user/createUser",
            payload: {
                user
            }
        })
    }
    function onChangePage(value) {
        dispatch({
            type: "user/getPagination",
            payload: {
                page: value,
                size: pageSize
            }
        })
    }
    function handleRemove(id) {
        dispatch({
            type: 'user/removeUser',
            payload: { id }
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
                    <a style={{ marginRight: 16 }} onClick={() => handleRemove(record.id)}>remove</a>
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
            <Table
                dataSource={paginationData.currentPageList}
                columns={columns}
                rowKey={record => record.id}
                pagination={false}
            />
            <Pagination defaultCurrent={1} current={paginationData.page} defaultPageSize={vars.pageSize} total={paginationData.total} onChange={onChangePage} />
        </div>
    )
}

function mapStateToProps(state) {
    const { paginationData } = state.user;
    return {
        paginationData,
        // loading:state.loading
    }
}

export default connect(mapStateToProps)(User);

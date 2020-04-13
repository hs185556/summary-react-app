import React from 'react'
import styles from './User.css'
import { connect } from 'dva';

function User({list}){
    return (
        <div className={styles.normal}>
            <h2 className={styles.txt}>user.html</h2>
            {
                list.map(
                    (item)=>(
                        <p key={item.id}>{item.name}</p>
                    )
                )
            }
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

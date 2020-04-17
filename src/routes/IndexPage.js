import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Steps } from 'antd'
import MainLayout from '../components/MainLayout/MainLayout'
const { Step } = Steps;


function IndexPage({location}) {
    return (
        <MainLayout location={location}>
            <div className={styles.normal}>
                index.html
                <Steps current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
            </div>
        </MainLayout>
    );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

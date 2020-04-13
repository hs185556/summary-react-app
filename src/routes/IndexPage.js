import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {Steps } from 'antd'
const { Step } = Steps;


function IndexPage() {
  return (
      <div className={styles.normal}>
          index.html
          <Steps current={1}>
              <Step title="Finished" description="This is a description." />
              <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
          </Steps>
      </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

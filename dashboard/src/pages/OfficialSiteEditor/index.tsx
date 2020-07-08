import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { injectIntl } from 'react-intl';
import { connect } from 'umi';
import styles from './index.less';
import Sponsors from './Sponsors';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { stringify } from 'qs'; // import DragAndDrop from "@/lib/withDragDropContext"

import GuideUpload from './GuideUpload';
import {setGuideID} from "@/services/editor";

const Editor: React.FC = ({ dispatch, intl, sponsorsList, isSponsorLoading }) => {
  // const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    dispatch({
      type: 'editor/getSponsorList',
    });
  }, []);

  const submitSponsorList = value => {
    dispatch({
      type: 'editor/uploadSponsorList',
      payload: value,
    });
  };
  return (
    <PageHeaderWrapper className={styles.main}>
      <GuideUpload onChangeId={setGuideID} />
        <Spin style={{
          paddingTop: "50%",
          textAlign: 'center',
        }} spinning={isSponsorLoading} size="large" >
          <Sponsors sponsorsList={sponsorsList} onChange={submitSponsorList}  isLoading={isSponsorLoading}/>
        </Spin>
    </PageHeaderWrapper>
  );
};

export default connect(({ editor, loading }) => ({
  sponsorsList: editor.sponsorsList,
  isSponsorLoading: loading.effects["editor/getSponsorList"],
}))(injectIntl(Editor));

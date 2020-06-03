import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, Divider, Dropdown, Menu, message, Space, Popover, Radio } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';

import { queryRule, updateRule, addRule, removeRule, getRoster } from '../../services/roster';
/**
 * 添加节点
 * @param fields
 */

import UploadRoster from './UploadRoster';

const handleAdd = async fields => {
  const hide = message.loading('正在添加');

  try {
    await addRule({
      name: fields.name,
      title: fields.title,
      score: fields.score,
    });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};
/**
 * 更新节点
 * @param fields
 */

const handleUpdate = async fields => {
  const hide = message.loading('正在配置');

  try {
    await updateRule({
      name: fields.name,
      title: fields.title,
      score: fields.score,
    });
    hide();
    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};
/**
 *  删除节点
 * @param selectedRows
 */

const handleRemove = async selectedRows => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removeRule({
      key: selectedRows.map(row => row.key),
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const TableList = ({ positionList, dispatch, roster, intl, isGetRosterLoading }) => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [stepFormValues, setStepFormValues] = useState({});

  // const [positionList, setPositionList] = useState([]);
  const actionRef = useRef();
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'roster/getPositionList',
      });
      dispatch({
        type: 'roster/getRosters',
      });
    }
  }, []);
  // TODO add action to add points
  const addPoints = (
    <div>
      <Button type="link" size="small">
        +1
      </Button>
      <Button type="link" size="small">
        +2
      </Button>
      <Button type="link" size="small">
        +5
      </Button>
    </div>
  );

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '职位',
      dataIndex: 'title',
    },
    { title: '分数', dataIndex: 'points' },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return (
          <div style={{ textAlign: 'center' }}>
            <a
              onClick={() => {
                handleUpdateModalVisible(true);
                setStepFormValues(record);
              }}
            >
              更改
            </a>
            <Divider type="vertical" />
            <Popover content={addPoints}>
              <a>加分</a>
            </Popover>
          </div>
        );
      },
    },
  ];
  return (
    <PageHeaderWrapper>
      <UploadRoster />
      <ProTable
        headerTitle="成员列表"
        actionRef={actionRef}
        loading={isGetRosterLoading}
        rowKey="id"
        toolBarRender={(action, { selectedRowKeys }) => [
          <Button icon={<PlusOutlined />} type="primary" onClick={() => handleModalVisible(true)}>
            添加成员
          </Button>,
          selectedRowKeys && selectedRowKeys.length > 0 && (
            <Dropdown
              overlay={
                <Menu
                  onClick={async e => {
                    if (e.key === 'remove') {
                      await handleRemove(selectedRowKeys);
                      action.reload();
                    }
                  }}
                  selectedKeys={[]}
                >
                  <Menu.Item key="remove">批量删除</Menu.Item>
                  <Menu.Item key="approval">批量审批</Menu.Item>
                </Menu>
              }
            >
              <Button>
                批量操作 <DownOutlined />
              </Button>
            </Dropdown>
          ),
        ]}
        tableAlertRender={({ selectedRowKeys, selectedRows }) => {
          return selectedRowKeys.length === 0 ? (
            false
          ) : (
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowKeys.length}
              </a>{' '}
              个成员
            </div>
          );
        }}
        tableAlertOptionRender={props => {
          const { onCleanSelected } = props;

          return (
            <Space>
              <Popover content={addPoints}>
                <a>加分</a>
              </Popover>
              <a onClick={onCleanSelected}>清空</a>
            </Space>
          );
        }}
        // request={async (params = {}) =>  Promise.resolve(getRoster())}
        dataSource={roster.map((r, i) => {
          if (!r.department || !r.position) {
            return {
              rowKey: i,
              ...r,
              title: '暂无',
              // department: <FormattedMessage id={`roster.department.${r.department}`}/>,
              // position: <FormattedMessage id={`roster.position.${r.position}`}/>
            };
          }
          return {
            rowKey: i,
            ...r,
            title:
              intl.formatMessage({ id: `roster.department.${r.department}` }) +
              intl.formatMessage({ id: `roster.position.${r.position}` }),
            // department: <FormattedMessage id={`roster.department.${r.department}`}/>,
            // position: <FormattedMessage id={`roster.position.${r.position}`}/>
          };
        })}
        columns={columns}
        rowSelection={[{}]}
      />
      <CreateForm
        onSubmit={async value => {
          const success = await handleAdd(value);

          if (success) {
            handleModalVisible(false);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        positionOption={positionList}
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}
      />
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async value => {
            const success = await handleUpdate(value);

            if (success) {
              handleModalVisible(false);
              setStepFormValues({});

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          positionOption={positionList}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}
    </PageHeaderWrapper>
  );
};

// export default Form.create({})(connect(({roster, loading})=>({
//   positionsList: roster.positionList,
//   isLoading: loading.effects['roster/getPositionList']
// }))(TableList))
export default connect(({ roster, loading, upload }) => ({
  positionList: roster.positionList,
  roster: roster.roster.length > 0 ? roster.roster : upload.roster,
  isGetRosterLoading: loading.effects['roster/getRosters'],
}))(Form.create()(injectIntl(TableList)));

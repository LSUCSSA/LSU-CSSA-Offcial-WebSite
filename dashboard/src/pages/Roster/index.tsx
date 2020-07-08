import {DownOutlined, PlusOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import {Button, Divider, Dropdown, Menu, message, Popover, Space, Modal} from 'antd';

import React, {useState, useRef, useEffect} from 'react';
import {PageHeaderWrapper} from '@ant-design/pro-layout';
import ProTable, {ProColumns, ActionType} from '@ant-design/pro-table';
import {connect} from 'umi';
import {StateType} from '@/models/roster';
import {ConnectState} from '@/models/connect';
import {injectIntl} from 'react-intl';
import CreateForm from './components/CreateForm';
import UpdateForm, {FormValueType} from './components/UpdateForm';
import {TableListItem} from './data.d';
import {addMember, removeMember, removeMembers, updateMember} from '@/services/roster'

/**
 * 添加节点
 * @param fields
 */

import Upload from './Upload';

const handleAdd = async (fields: TableListItem) => {
  const hide = message.loading('正在添加');
  try {
    await addMember({
      username: fields.name,
      name: fields.name,
      email: fields.email,
      department: fields.department,
      position: fields.position,
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
 * @param id
 * @param fields
 */

const handleUpdate = async (dispatch, id: string, fields: FormValueType) => {
  const hide = message.loading('正在配置');

  try {
    await dispatch({
      type: 'roster/updateMember',
      payload: fields.publicPhoto ? {
        id,
        name: fields.name,
        email: fields.email,
        position: fields.position,
        department: fields.department,
        publicPhoto: fields.publicPhoto,
      } : {
        id,
        name: fields.name,
        email: fields.email,
        position: fields.position,
        department: fields.department,
      }
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

const handleRemove = async (selectedRows: TableListItem[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removeMembers({
      ids: selectedRows.map(row => row),
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


const TableList: React.FC<StateType> = ({positionList, dispatch, roster, intl, isGetRosterLoading, isUploadLoading, removeStatus}) => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef<ActionType>();
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

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      rules: [
        {
          required: true,
          message: '规则名称为必填项',
        },
      ],
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '职位',
      dataIndex: 'title',
    },
    {title: '分数', dataIndex: 'points'},
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return (
          <div>
            <a
              onClick={() => {
                handleUpdateModalVisible(true);
                setStepFormValues(record);
              }}
            >
              更改
            </a>
            <Divider type="vertical"/>
            <Popover content={addPoints}>
              <a>加分</a>
            </Popover>
            <Divider type="vertical"/>
            <a
              onClick={() => {
                Modal.confirm({
                  title: 'Confirm',
                  maskClosable: true,
                  icon: <ExclamationCircleOutlined/>,
                  content: '确认删除?',
                  okType: "danger",
                  okText: '确认',
                  cancelText: '取消',
                  onOk: async () => {
                    await removeMember(record.id);
                    dispatch({
                      type: 'roster/getRosters',
                    });
                  }
                });
              }}
            >
              删除
            </a>
          </div>
        );
      },
    },
  ];

  return (
    <PageHeaderWrapper>
      <Upload onFinished={actionRef.current ?
        () => dispatch({
          type: 'roster/getRosters',
        }) : null}/>
      <ProTable<TableListItem>
        headerTitle="成员列表"
        actionRef={actionRef}
        loading={isGetRosterLoading}
        rowKey="id"
        toolBarRender={(action, {selectedRowKeys}) => [
          <Button icon={<PlusOutlined/>} type="primary" onClick={() => handleModalVisible(true)}>
            添加成员
          </Button>,
          selectedRowKeys && selectedRowKeys.length > 0 && (
            <Dropdown
              overlay={
                <Menu
                  onClick={async e => {
                    if (e.key === 'remove') {
                      await handleRemove(selectedRowKeys);
                      actionRef.current.clearSelected();
                      dispatch({
                        type: 'roster/getRosters',
                      });
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
                批量操作 <DownOutlined/>
              </Button>
            </Dropdown>
          ),
        ]}
        tableAlertRender={({selectedRowKeys, selectedRows}) => {
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
          const {onCleanSelected} = props;

          return (
            <Space>
              <Popover content={addPoints}>
                <a>加分</a>
              </Popover>
              <a onClick={onCleanSelected}>清空</a>
            </Space>
          );
        }}
        // request={async (params = {}) =>  actionRef.current.reload()}
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
              intl.formatMessage({id: `roster.department.${r.department}`}) +
              intl.formatMessage({id: `roster.position.${r.position}`}),
            // department: <FormattedMessage id={`roster.department.${r.department}`}/>,
            // position: <FormattedMessage id={`roster.position.${r.position}`}/>
          };
        })}
        options={{
          density: true,
          reload: () => dispatch({
            type: 'roster/getRosters',
          }),
          fullScreen: true,
          setting: true,
        }}
        columns={columns}
        rowSelection={{}}
      />
      <CreateForm
        onSubmit={async (value) => {
          const success = await handleAdd(value);
          if (success) {
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        positionOption={positionList}
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}
        // handleModalVisible={handleModalVisible}
      />
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async value => {
            const success = await handleUpdate(dispatch, stepFormValues.id, value);

            if (success) {
              handleUpdateModalVisible(false);
              setStepFormValues({});
              dispatch({
                type: 'roster/getRosters',
              });
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          positionOption={positionList}
          updateModalVisible={updateModalVisible}
          // updateAvatar={updateAvatar}
          isLoading={isUploadLoading}
          values={stepFormValues}
        />
      ) : null}
    </PageHeaderWrapper>
  );
};

export default connect(({roster, loading, upload}: ConnectState) => ({
  positionList: roster.positionList,
  roster: roster.roster.length > 0 ? roster.roster : upload.roster,
  removeStatus: roster.removeMemberStatus,
  isGetRosterLoading: loading.effects['roster/getRosters'],
  isUploadLoading: loading.effects['roster/updateMember'],
}))(injectIntl(TableList));

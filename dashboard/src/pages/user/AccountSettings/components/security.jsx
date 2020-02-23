import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Component, Fragment } from 'react';
import { List } from 'antd';

const passwordStrength = {
  strong: (
    <span className="strong">
      <FormattedMessage id="userandaccountsettings.security.strong" defaultMessage="Strong" />
    </span>
  ),
  medium: (
    <span className="medium">
      <FormattedMessage id="userandaccountsettings.security.medium" defaultMessage="Medium" />
    </span>
  ),
  weak: (
    <span className="weak">
      <FormattedMessage id="userandaccountsettings.security.weak" defaultMessage="Weak" />
      Weak
    </span>
  ),
};

class SecurityView extends Component {
  getData = () => [
    {
      title: formatMessage(
        {
          id: 'userandaccountsettings.security.password',
        },
        {},
      ),
      description: (
        <Fragment>
          {formatMessage({
            id: 'userandaccountsettings.security.password-description',
          })}
          ：{passwordStrength.strong}
        </Fragment>
      ),
      actions: [
        <a key="Modify">
          <FormattedMessage id="userandaccountsettings.security.modify" defaultMessage="Modify" />
        </a>,
      ],
    },
    {
      title: formatMessage(
        {
          id: 'userandaccountsettings.security.phone',
        },
        {},
      ),
      description: `${formatMessage(
        {
          id: 'userandaccountsettings.security.phone-description',
        },
        {},
      )}：138****8293`,
      actions: [
        <a key="Modify">
          <FormattedMessage id="userandaccountsettings.security.modify" defaultMessage="Modify" />
        </a>,
      ],
    },
    {
      title: formatMessage(
        {
          id: 'userandaccountsettings.security.question',
        },
        {},
      ),
      description: formatMessage(
        {
          id: 'userandaccountsettings.security.question-description',
        },
        {},
      ),
      actions: [
        <a key="Set">
          <FormattedMessage id="userandaccountsettings.security.set" defaultMessage="Set" />
        </a>,
      ],
    },
    {
      title: formatMessage(
        {
          id: 'userandaccountsettings.security.email',
        },
        {},
      ),
      description: `${formatMessage(
        {
          id: 'userandaccountsettings.security.email-description',
        },
        {},
      )}：ant***sign.com`,
      actions: [
        <a key="Modify">
          <FormattedMessage id="userandaccountsettings.security.modify" defaultMessage="Modify" />
        </a>,
      ],
    },
    {
      title: formatMessage(
        {
          id: 'userandaccountsettings.security.mfa',
        },
        {},
      ),
      description: formatMessage(
        {
          id: 'userandaccountsettings.security.mfa-description',
        },
        {},
      ),
      actions: [
        <a key="bind">
          <FormattedMessage id="userandaccountsettings.security.bind" defaultMessage="Bind" />
        </a>,
      ],
    },
  ];

  render() {
    const data = this.getData();
    return (
      <Fragment>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item actions={item.actions}>
              <List.Item.Meta title={item.title} description={item.description} />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default SecurityView;

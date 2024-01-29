import React from 'react';
import { WarningOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const InputValidationMessage = (props) => {
  const { type, message, customIcon, style } = props;
  const isWarningType = type === 'warning';
  const isSuccessType = type === 'success';

  const renderIcon = () => {
    if (isWarningType) {
      return <WarningOutlined className="icon" />;
    }
    return <i className="icon core-icon core-alert-outlined" />;
  };

  return (
    <div
      className={`${
        isWarningType
          ? 'warning-bar'
          : `${isSuccessType ? 'alert-bar success' : 'error-bar'}`
      }`}
      style={style}
    >
      {customIcon || renderIcon()}
      {message}
    </div>
  );
};

export default InputValidationMessage;

InputValidationMessage.defaultProps = {
  type: 'error',
  customIcon: null,
  style: {},
};

InputValidationMessage.propTypes = {
  type: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  customIcon: PropTypes.element,
  style: PropTypes.object,
};

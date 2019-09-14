import React from 'react';

const Notification = ({message}) => {
  if (message === null) {
    return null;
  }
  return (
    <div className="notification">
      <b>{message}</b>
    </div>
  );
};

export default Notification;

import React from 'react';
import Popconfirm from '../Feedback/Popconfirm';
import Button from '../uielements/button';
import notification from '../Notification';

export default function({ contact, deleteContact }) {
  return (
    <Popconfirm
      title={`Sure to delete ${contact.content}?`}
      okText="DELETE"
      cancelText="No"
      onConfirm={() => {
        //notification('error', `${contact.content} Deleted`, '');
        deleteContact(contact.id);
      }}
    >
      <Button icon="close" type="default" className="isoDeleteBtn" />
    </Popconfirm>
  );
}

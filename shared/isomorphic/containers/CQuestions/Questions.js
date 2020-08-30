import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactActions from '@iso/redux/cquestions/actions';
import { Layout, Icon } from 'antd';
import Button from '@iso/components/uielements/button';
import ContactList from '@iso/components/CQuestions/QuestionList';
import SingleContactView from '@iso/components/CQuestions/SingleView';
import EditContactView from '@iso/components/CQuestions/EditView';
import DeleteButton from '@iso/components/CQuestions/DeleteButton';
import { otherAttributes } from './data2';
import IntlMessages from '@iso/components/utility/intlMessages';
import { ContactsWrapper } from './Questions.styles';
import Scrollbar from '@iso/components/utility/customScrollBar';

const {
  changeContact,
  addContact,
  editContact,
  deleteContact,
  viewChange,
} = contactActions;

const { Content } = Layout;

export default function Contacts() {
  const { contacts, seectedId, editView, editingQuestion } = useSelector(
    state => state.Questions
  );
  // console.log(contacts);
  const dispatch = useDispatch();

  const selectedContact = seectedId
    ? contacts.filter(contact => contact.id === seectedId)[0]
    : null;

  const [questionOnChange, setquestionOnChange] = useState(selectedContact);

  const onVIewChange = () => dispatch(viewChange(!editView));
  return (
    <ContactsWrapper
      className="isomorphicContacts"
      style={{ background: 'none' }}
    >
      <div className="isoContactListBar">
        <ContactList
          contacts={contacts}
          seectedId={seectedId}
          changeContact={id => dispatch(changeContact(id))}
          deleteContact={e => dispatch(deleteContact(e))}
        />
      </div>
      <Layout className="isoContactBoxWrapper">
        {/* select contact ------------------------------------------*/}
        {selectedContact ? (
          <Content className="isoContactBox">
            <div className="isoContactControl">
              <Button type="default" onClick={onVIewChange}>
                {editView ? <Icon type="check" /> : <Icon type="edit" />}
              </Button>
              <DeleteButton
                deleteContact={id => dispatch(deleteContact(id))}
                contact={selectedContact}
              />
              <Button
                type="primary"
                onClick={() => {
                  dispatch(addContact());
                }}
                className="isoAddContactBtn"
              >
                <IntlMessages id="contactlist.addNewContact" />
              </Button>
            </div>

            <Scrollbar
              className="contactBoxScrollbar"
              style={{ height: 'calc(100vh - 200px)' }}
            >
              {editView ? (
                <EditContactView
                  //contact={editingQuestion}
                  editContact={question => {
                    // dispatch(editContact(question));
                  }}
                  otherAttributes={otherAttributes}
                  changeQuestion={question => {
                    setquestionOnChange(question);
                    // dispatch(editContact(question));
                  }}
                />
              ) : (
                <SingleContactView
                  contact={selectedContact}
                  otherAttributes={otherAttributes}
                />
              )}
            </Scrollbar>
          </Content>
        ) : (
          <div className="isoContactControl">
            <Button
              type="primary"
              onClick={() => dispatch(addContact())}
              className="isoAddContactBtn"
            >
              <IntlMessages id="contactlist.addNewContact" />
            </Button>
          </div>
        )}
        {/* select contact ------------------------------------------*/}
      </Layout>
    </ContactsWrapper>
  );
}

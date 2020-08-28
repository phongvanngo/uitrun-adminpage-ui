import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import questionAction from '@iso/redux/cquestionManager/actions';
import { Layout, Icon } from 'antd';
import Button from '@iso/components/uielements/button';
import QuestionList from '@iso/components/CQuestionsManager/QuestionList';
import SingleContactView from '@iso/components/CQuestionsManager/SingleView';
import EditContactView from '@iso/components/CQuestionsManager/EditView';
import DeleteButton from '@iso/components/CQuestionsManager/DeleteButton';
import { otherAttributes } from './data';
import IntlMessages from '@iso/components/utility/intlMessages';
import { ContactsWrapper } from './Questions.styles';
import Scrollbar from '@iso/components/utility/customScrollBar';

const {
  changeQuestion,
  addQuestion,
  editQuestion,
  deleteQuestion,
  viewChange,
} = questionAction;

const { Content } = Layout;
export default function Contacts() {
  const { contacts, seectedId, editView } = useSelector(
    state => state.Contacts
  );
  const dispatch = useDispatch();

  const selectedContact = seectedId
    ? contacts.filter(contact => contact.id === seectedId)[0]
    : null;
  const onVIewChange = () => dispatch(viewChange(!editView));
  return (
    <ContactsWrapper
      className="isomorphicContacts"
      style={{ background: 'none' }}
    >
      <div className="isoContactListBar">
        <QuestionList
          contacts={contacts}
          seectedId={seectedId}
          changeQuestion={id => dispatch(changeQuestion(id))}
          deleteQuestion={e => dispatch(deleteContact(e))}
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
                deleteQuestion={id => dispatch(deleteContact(id))}
                question={selectedContact}
              />
              <Button
                type="primary"
                onClick={() => dispatch(addQuestion())}
                className="isoAddContactBtn"
              >
                Thêm câu hỏi
                {/* <IntlMessages id="contactlist.addNewContact" /> */}
              </Button>
            </div>

            <Scrollbar className="contactBoxScrollbar">
              {editView ? (
                <EditContactView
                  question={selectedContact}
                  editQuestion={contact => dispatch(editContact(contact))}
                  otherAttributes={otherAttributes}
                />
              ) : (
                <SingleContactView
                  question={selectedContact}
                  otherAttributes={otherAttributes}
                />
              )}
            </Scrollbar>
          </Content>
        ) : (
          <div className="isoContactControl">
            <Button
              type="primary"
              onClick={() => dispatch(addQuestion())}
              className="isoAddContactBtn"
            >
              Thêm câu hỏi
              {/* <IntlMessages id="contactlist.addNewContact" /> */}
            </Button>
          </div>
        )}
        {/* select contact ------------------------------------------*/}
      </Layout>
    </ContactsWrapper>
  );
}

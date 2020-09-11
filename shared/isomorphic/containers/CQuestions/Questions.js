import DeleteButton from '@iso/components/CQuestions/DeleteButton';
import EditContactView from '@iso/components/CQuestions/EditView';
import ContactList from '@iso/components/CQuestions/QuestionList';
import SingleContactView from '@iso/components/CQuestions/SingleView';
import Button from '@iso/components/uielements/button';
import Scrollbar from '@iso/components/utility/customScrollBar';
import IntlMessages from '@iso/components/utility/intlMessages';
import contactActions from '@iso/redux/cquestions/actions';
import { Icon, Layout } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { otherAttributes } from './data2';
import { ContactsWrapper } from './Questions.styles';

const {
  changeContact,
  onAddQuestion,
  viewChange,
  updateQuestion,
  fetchQuestionList,
  onDeleteQuestion,
} = contactActions;

const { Content } = Layout;

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestionList());
    return () => {};
  }, []);

  const { contacts, seectedId, editView } = useSelector(
    state => state.Questions
  );
  // //console.log(contacts);

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
        <ContactList
          contacts={contacts}
          seectedId={seectedId}
          changeContact={id => dispatch(changeContact(id))}
          deleteContact={e => dispatch(onDeleteQuestion(e))}
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
                deleteContact={id => dispatch(onDeleteQuestion(id))}
                contact={selectedContact}
              />
              <Button
                type="primary"
                onClick={() => {
                  dispatch(onAddQuestion());
                }}
                className="isoAddContactBtn"
              >
                <IntlMessages id="questionlist.addNewQuestion" />
              </Button>
            </div>

            {/* <Scrollbar
              className="contactBoxScrollbar"
              style={{ height: "calc(100vh - 200px)" }}
            > */}
            {editView ? (
              <EditContactView
                onUpdateQuestion={() => {
                  dispatch(updateQuestion());
                }}
              />
            ) : (
              <SingleContactView
                contact={selectedContact}
                otherAttributes={otherAttributes}
              />
            )}
            {/* </Scrollbar> */}
          </Content>
        ) : (
          <div className="isoContactControl">
            <Button
              type="primary"
              onClick={() => dispatch(onAddQuestion())}
              className="isoAddContactBtn"
            >
              <IntlMessages id="questionlist.addNewQuestion" />
            </Button>
          </div>
        )}
        {/* select contact ------------------------------------------*/}
      </Layout>
    </ContactsWrapper>
  );
}

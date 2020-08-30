import Radio, { RadioGroup } from '@iso/components/uielements/radio';
import ContentHolder from '@iso/components/utility/contentHolder';
import React, { useEffect, useState } from 'react';
import notification from '../Notification';
import Input, { Textarea } from '../uielements/input';
import { ContactCardWrapper } from './QuestionCard.style';
import contactActions from '@iso/redux/cquestions/actions';
import './upload.css';
import { useDispatch, useSelector } from 'react-redux';

const { onEditQuestion, addEditQuestion } = contactActions;

function TransferResultOption(result) {
  const value = { A: 1, B: 2, C: 3, D: 4 };
  return value[result];
}

export default function({ otherAttributes, editContact, changeQuestion }) {
  const dispatch = useDispatch();
  const { editingQuestion } = useSelector(state => state.Questions);

  let {
    content,
    image,
    answerA,
    answerB,
    answerC,
    answerD,
    result,
    description,
  } = editingQuestion;

  console.log(editingQuestion);
  console.log(answerA);

  const handleChangeInput = () => {
    let newQuestion = {
      id: contact.id,
      content: contentValue,
      image: imageValue,
      answerA: answerAValue,
      answerB: answerBValue,
      answerC: answerCValue,
      answerD: answerDValue,
      result: resultValue,
      description: descriptionValue,
    };
    console.log(1, contentValue);
    console.log(newQuestion);
    //changeQuestion(newQuestion);
  };

  const correctAnswer = res => {
    switch (res) {
      case 1:
        return 'A. ' + answerA;
        break;
      case 2:
        return 'B. ' + answerB;
        break;
      case 3:
        return 'C. ' + answerC;
        break;
      case 4:
        return 'D. ' + answerD;
        break;
      default:
        break;
    }
  };

  const radioStyle = {
    margin: '0px',
    display: 'block',
    height: '50px',
    lineHeight: '50px',
    width: '100%',
  };

  const inputInRadioStyle = {
    margin: 10,
  };

  return (
    <ContactCardWrapper className="isoContactCard">
      {/* <div className="isoContactCardHead">
        <div className="isoPersonImage">
          <Upload
            className="avatar-uploader"
            name="avatar"
            showUploadList={false}
            beforeUpload={beforeUpload}
            action=""
          >
            {contact.avatar ? (
              <img src={contact.avatar} alt="" className="avatar" />
            ) : (
              ''
            )}
            <Icon type="plus" className="avatar-uploader-trigger" />
          </Upload>
        </div>
        <h1 className="isoPersonName">{name}</h1>
      </div> */}
      {/* <div className="isoContactInfoWrapper">{extraInfos}</div> */}
      <div className="isoContactInfoWrapper" style={{ marginRight: '10px' }}>
        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Câu hỏi</p>
          <Textarea
            placeholder="câu hỏi"
            value={content}
            type="textarea"
            rows={5}
            onChange={event => {
              //handleChangeInput();
              dispatch(onEditQuestion('content', event.target.value));
            }}
          />
        </div>

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Hình ảnh</p>
          <Input
            placeholder=""
            value={image}
            onChange={event => {
              setimageValue(event.target.value);
            }}
          />
        </div>

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel"></p>
          <p className="isoInfoDetails">
            <img
              src={image}
              style={{ maxWidth: '100%', maxHeight: '50vh' }}
              alt="No image"
            />
          </p>
        </div>

        <div className="isoContactCardInfos" style={{ marginBottom: '0px' }}>
          <p className="isoInfoLabel">Đáp án đúng:</p>
          <p style={{ color: 'red', display: 'inline' }}>
            {correctAnswer(TransferResultOption(result))}
          </p>
        </div>

        <div className="isoContactCardInfos" style={{ marginTop: '0px' }}>
          <p className="isoInfoLabel"></p>
          <div className="isoInfoDetails">
            <ContentHolder style={{ marginTop: '0px', marginLeft: '0px' }}>
              <RadioGroup onChange={event => {}} name="value" value={result}>
                <Radio style={radioStyle} value={1}>
                  Option A
                  <Input
                    style={inputInRadioStyle}
                    onChange={event => {}}
                    value={answerA}
                  />
                </Radio>
                <Radio style={radioStyle} value={2}>
                  Option B
                  <Input
                    value={answerB}
                    style={inputInRadioStyle}
                    onChange={event => {}}
                  />
                </Radio>
                <Radio style={radioStyle} value={3}>
                  Option C
                  <Input
                    value={answerC}
                    style={inputInRadioStyle}
                    onChange={event => {}}
                  />
                </Radio>
                <Radio style={radioStyle} value={4}>
                  Option D
                  <Input
                    value={answerD}
                    style={inputInRadioStyle}
                    onChange={event => {}}
                  />
                </Radio>
              </RadioGroup>
            </ContentHolder>
          </div>
          d
        </div>

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Ghi chú</p>
          <Input placeholder="" value={description} onChange={event => {}} />
        </div>
      </div>
    </ContactCardWrapper>
  );
}

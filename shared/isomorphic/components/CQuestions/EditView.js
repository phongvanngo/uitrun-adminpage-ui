import Radio, { RadioGroup } from '@iso/components/uielements/radio';
import ContentHolder from '@iso/components/utility/contentHolder';
import React, { useEffect, useState } from 'react';
import notification from '../Notification';
import Input, { Textarea } from '../uielements/input';
import { ContactCardWrapper } from './QuestionCard.style';
import './upload.css';

function TransferResultOption(result) {
  const value = { A: 1, B: 2, C: 3, D: 4 };
  return value[result];
}

export default function({
  contact,
  otherAttributes,
  editContact,
  changeQuestion,
}) {
  let {
    content,
    image,
    answerA,
    answerB,
    answerC,
    answerD,
    result,
    description,
  } = contact;

  const [contentValue, setcontentValue] = useState(content);
  const [answerAValue, setanswerAValue] = useState(answerA);
  const [answerBValue, setanswerBValue] = useState(answerB);
  const [answerCValue, setanswerCValue] = useState(answerC);
  const [answerDValue, setanswerDValue] = useState(answerD);
  const [resultValue, setresultValue] = useState(TransferResultOption(result));
  const [descriptionValue, setdescriptionValue] = useState(description);
  const [imageValue, setimageValue] = useState(image);
  console.log(contentValue);

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
  console.log(newQuestion);

  const handleChangeInput = (event, attribute) => {
    contact[attribute] = event.target.value;
    // let newQuestion = {
    //   id: contact.id,
    //   content: contentValue,
    //   image: imageValue,
    //   answerA: answerAValue,
    //   answerB: answerBValue,
    //   answerC: answerCValue,
    //   answerD: answerDValue,
    //   result: resultValue,
    //   description: descriptionValue,
    // };
    console.log(contentValue);
    console.log(contact);
    changeQuestion(contact);
  };

  useEffect(() => {
    return () => {
      console.log(newQuestion);
      //editContact();
    };
  }, []);

  const correctAnswer = res => {
    switch (res) {
      case 1:
        return 'A. ' + answerAValue;
        break;
      case 2:
        return 'B. ' + answerBValue;
        break;
      case 3:
        return 'C. ' + answerCValue;
        break;
      case 4:
        return 'D. ' + answerDValue;
        break;
      default:
        break;
    }
  };

  // const name = contact.name ? contact.name : "No Name";
  const extraInfos = [];
  // const names = [
  //   { value: "firstName", title: "First Name" },
  //   { value: "lastName", title: "Last Name" },
  // ];
  [/*...names,*/ ...otherAttributes].forEach(attribute => {
    const value = contact[attribute.value];
    const handleEditContact = event => {
      contact[attribute.value] = event.target.value;
      let name = '';
      if (contact.firstName) {
        name = `${contact.firstName} `;
      }
      if (contact.lastName) {
        name = `${name}${contact.lastName}`;
      }
      contact.name = name;
      editContact(contact);
    };
    if (attribute.value === 'note') {
      extraInfos.push(
        <div className="isoContactCardInfos" key={attribute.value}>
          <p className="isoInfoLabel">{`${attribute.title}`}</p>
          <Textarea
            placeholder={`${attribute.title}`}
            value={value}
            type="textarea"
            rows={5}
            onChange={handleEditContact}
          />
        </div>
      );
    } else {
      extraInfos.push(
        <div className="isoContactCardInfos" key={attribute.value}>
          <p className="isoInfoLabel">{`${attribute.title}`}</p>
          <Input
            placeholder={`${attribute.title}`}
            value={value}
            onChange={handleEditContact}
          />
        </div>
      );
    }
  });
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
            value={contentValue}
            type="textarea"
            rows={5}
            onChange={(event, content) => {
              handleChangeInput(event, content);
            }}
          />
        </div>

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Hình ảnh</p>
          <Input
            placeholder=""
            value={imageValue}
            onChange={event => {
              setimageValue(event.target.value);
            }}
          />
        </div>

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel"></p>
          <p className="isoInfoDetails">
            <img
              src={imageValue}
              style={{ maxWidth: '100%', maxHeight: '50vh' }}
              alt="No image"
            />
          </p>
        </div>

        <div className="isoContactCardInfos" style={{ marginBottom: '0px' }}>
          <p className="isoInfoLabel">Đáp án đúng:</p>
          <p style={{ color: 'red', display: 'inline' }}>
            {correctAnswer(resultValue)}
          </p>
        </div>

        <div className="isoContactCardInfos" style={{ marginTop: '0px' }}>
          <p className="isoInfoLabel"></p>
          <div className="isoInfoDetails">
            <ContentHolder style={{ marginTop: '0px', marginLeft: '0px' }}>
              <RadioGroup
                onChange={event => {
                  setresultValue(event.target.value);
                }}
                name="value"
                value={resultValue}
              >
                <Radio style={radioStyle} value={1}>
                  Option A
                  <Input
                    style={inputInRadioStyle}
                    onChange={event => {
                      setanswerAValue(event.target.value);
                    }}
                    value={answerAValue}
                  />
                </Radio>
                <Radio style={radioStyle} value={2}>
                  Option B
                  <Input
                    value={answerBValue}
                    style={inputInRadioStyle}
                    onChange={event => {
                      setanswerBValue(event.target.value);
                    }}
                  />
                </Radio>
                <Radio style={radioStyle} value={3}>
                  Option C
                  <Input
                    value={answerCValue}
                    style={inputInRadioStyle}
                    onChange={event => {
                      setanswerCValue(event.target.value);
                    }}
                  />
                </Radio>
                <Radio style={radioStyle} value={4}>
                  Option D
                  <Input
                    value={answerDValue}
                    style={inputInRadioStyle}
                    onChange={event => {
                      setanswerDValue(event.target.value);
                    }}
                  />
                </Radio>
              </RadioGroup>
            </ContentHolder>
          </div>
          d
        </div>

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Ghi chú</p>
          <Input
            placeholder=""
            value={descriptionValue}
            onChange={event => {
              setdescriptionValue(event.target.value);
            }}
          />
        </div>
      </div>
    </ContactCardWrapper>
  );
}

import React, { useState, useEffect } from 'react';
import { Icon } from 'antd';
import Input, { Textarea } from '../uielements/input';
import Upload from '../uielements/upload';
import notification from '../Notification';
import { ContactCardWrapper } from './QuestionCard.style';
import './upload.css';
import ContentHolder from '@iso/components/utility/contentHolder';
import Radio, { RadioGroup } from '@iso/components/uielements/radio';
import { direction } from '@iso/lib/helpers/rtl';
import Scrollbar from '../utility/customScrollBar';

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    notification('error', 'You can only upload JPG file!', '');
    return false;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    notification('error', 'Image must smaller than 2MB!', '');
    return false;
  }
  notification('success', 'Image uploaded successfully!', '');
  return true;
}

function TransferResultOption(result) {
  const value = { A: 1, B: 2, C: 3, D: 4 };
  return value[result];
}

export default function({ contact, otherAttributes, editContact }) {
  useEffect(() => {
    return () => {
      console.log('hello');
    };
  });

  const {
    content,
    image,
    answerA,
    answerB,
    answerC,
    answerD,
    result,
    description,
  } = contact;
  console.log(contact);
  const [contentValue, setcontentValue] = useState(content);
  const [answerAValue, setanswerAValue] = useState(answerA);
  const [answerBValue, setanswerBValue] = useState(answerB);
  const [answerCValue, setanswerCValue] = useState(answerC);
  const [answerDValue, setanswerDValue] = useState(answerD);
  const [resultValue, setresultValue] = useState(TransferResultOption(result));
  const [descriptionValue, setdescriptionValue] = useState(description);
  const [imageValue, setimageValue] = useState(image);

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
            onChange={event => {
              console.log(event);
              setcontentValue(event.target.value);
            }}
          />
        </div>

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Hình ảnh</p>
          <Input
            placeholder=""
            value={imageValue}
            onChange={event => {
              console.log(event);
              setimageValue(event.target.value);
            }}
          />
        </div>
        <div className="isoContactCardInfos">
          <p className="isoInfoLabel"></p>
          <img
            src={imageValue}
            style={{ maxWidth: '100vh', maxHeight: 'calc(100vh - 200px)' }}
            alt=""
          />
        </div>

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Đáp án</p>
          <ContentHolder>
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

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Mô tả</p>
          <Input
            placeholder=""
            value={description}
            onChange={event => {
              console.log(event);
              setdescriptionValue(event.target.value);
            }}
          />
        </div>
      </div>
    </ContactCardWrapper>
  );
}

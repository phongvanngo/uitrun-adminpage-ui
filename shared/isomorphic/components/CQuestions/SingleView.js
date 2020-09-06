import React from 'react';
import { ContactCardWrapper } from './QuestionCard.style';

export default function({ contact, otherAttributes }) {
  // console.log(contact, otherAttributes);
  // const name = contact.name ? contact.name : 'No Name';
  const extraInfos = [];

  if (contact.image.trim())
    extraInfos.push(
      <div className="isoContactCardInfos">
        <p className="isoInfoLabel">Hình ảnh</p>
        <p className="isoInfoDetails">
          <img
            src={contact.image}
            style={{ maxWidth: '100%', maxHeight: '50vh' }}
            alt=""
          />
        </p>
      </div>
    );

  if (contact.description.trim())
    extraInfos.push(
      <div className="isoContactCardInfos">
        <p className="isoInfoLabel">Video</p>
        <p className="isoInfoDetails">
          <iframe src={contact.description} width="560" height="315"></iframe>
        </p>
      </div>
    );

  return (
    <ContactCardWrapper className="isoContactCard">
      <div className="isoContactInfoWrapper">
        {/* {extraInfos} */}

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel ">Câu hỏi</p>
          <p className="isoInfoDetails Content">{contact.content}</p>
        </div>

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Đáp án A</p>
          <p className="isoInfoDetails">{contact.answerA}</p>
        </div>
        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Đáp án B</p>
          <p className="isoInfoDetails">{contact.answerB}</p>
        </div>
        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Đáp án C</p>
          <p className="isoInfoDetails">{contact.answerC}</p>
        </div>
        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Đáp án D</p>
          <p className="isoInfoDetails">{contact.answerD}</p>
        </div>

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Kết quả </p>
          <p className="isoInfoDetails Correct">
            {'Đáp án ' +
              contact.result +
              ': ' +
              contact[`answer${contact.result}`]}
          </p>
        </div>
        {extraInfos}
      </div>
    </ContactCardWrapper>
  );
}

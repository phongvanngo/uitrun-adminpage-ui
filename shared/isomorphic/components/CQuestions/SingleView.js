import React from 'react';
import { ContactCardWrapper } from './QuestionCard.style';

export default function({ contact, otherAttributes }) {
  // console.log(contact, otherAttributes);
  // const name = contact.name ? contact.name : 'No Name';
  const extraInfos = [];
  otherAttributes.forEach(attribute => {
    const value = contact[attribute.value];

    switch (attribute.value) {
      case 'image':
        if (value.trim())
          extraInfos.push(
            <div className="isoContactCardInfos" key={attribute.value}>
              <p className="isoInfoLabel">{`${attribute.title}`}</p>
              <p className="isoInfoDetails">
                <img
                  src={value}
                  style={{ maxWidth: '100%', maxHeight: '50vh' }}
                  alt=""
                />
              </p>
            </div>
          );
        break;
      case 'description':
        if (value.trim())
          extraInfos.push(
            <div className="isoContactCardInfos" key={attribute.value}>
              <p className="isoInfoLabel">{`${attribute.title}`}</p>
              <p className="isoInfoDetails">
                <iframe src={value} width="560" height="315"></iframe>
              </p>
            </div>
          );
        break;

      default:
        if (value) {
          extraInfos.push(
            <div className="isoContactCardInfos" key={attribute.value}>
              <p className="isoInfoLabel">{`${attribute.title}`}</p>
              <p className="isoInfoDetails">{value}</p>
            </div>
          );
        }
        break;
    }
  });
  return (
    <ContactCardWrapper className="isoContactCard">
      <div className="isoContactInfoWrapper">
        {/* {extraInfos} */}

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Câu hỏi</p>
          <p className="isoInfoDetails">{contact.content}</p>
        </div>

        <div className="isoContactCardInfos">
          <p
            className={
              'isoInfoLabel ' + (contact.result === 'A' ? 'Correct' : '')
            }
          >
            Đáp án A
          </p>
          <p
            className={
              'isoInfoDetails ' + (contact.result === 'A' ? 'Correct' : '')
            }
          >
            {contact.answerA}
          </p>
        </div>

        <div className="isoContactCardInfos">
          <p
            className={
              'isoInfoLabel ' + (contact.result === 'B' ? 'Correct' : '')
            }
          >
            Đáp án B
          </p>
          <p
            className={
              'isoInfoDetails ' + (contact.result === 'B' ? 'Correct' : '')
            }
          >
            {contact.answerB}
          </p>
        </div>

        <div className="isoContactCardInfos">
          <p
            className={
              'isoInfoLabel ' + (contact.result === 'C' ? 'Correct' : '')
            }
          >
            Đáp án C
          </p>
          <p
            className={
              'isoInfoDetails ' + (contact.result === 'C' ? 'Correct' : '')
            }
          >
            {contact.answerC}
          </p>
        </div>

        <div className="isoContactCardInfos ">
          <p
            className={
              'isoInfoLabel ' + (contact.result === 'D' ? 'Correct' : '')
            }
          >
            Đáp án D
          </p>
          <p
            className={
              'isoInfoDetails ' + (contact.result === 'D' ? 'Correct' : '')
            }
          >
            {contact.answerD}
          </p>
        </div>

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Kết quả </p>
          <p className="isoInfoDetails Correct">
            {contact.result + '. ' + contact[`answer${contact.result}`]}
          </p>
        </div>
      </div>
    </ContactCardWrapper>
  );
}

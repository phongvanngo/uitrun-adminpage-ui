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
      {/* <div className="isoContactCardHead">
        <div className="isoPersonImage">
          {contact.avatar ? <img alt="#" src={contact.avatar} /> : ''}
        </div>
        <h1 className="isoPersonName">{name}</h1>
      </div> */}
      <div className="isoContactInfoWrapper">{extraInfos}</div>
    </ContactCardWrapper>
  );
}

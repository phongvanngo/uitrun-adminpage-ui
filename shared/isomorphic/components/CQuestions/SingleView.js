import React from 'react';
import { ContactCardWrapper } from './QuestionCard.style';

export default function({ contact, otherAttributes }) {
  // console.log(contact, otherAttributes);
  // const name = contact.name ? contact.name : 'No Name';
  const extraInfos = [];
  otherAttributes.forEach(attribute => {
    const value = contact[attribute.value];
    if (attribute.value === 'image') {
      extraInfos.push(
        <div className="isoContactCardInfos" key={attribute.value}>
          <p className="isoInfoLabel">{`${attribute.title}`}</p>
          <p className="isoInfoDetails">
            {/* <img
              src={value}
              style={{ maxWidth: "100%", maxHeight: "50vh" }}
              alt=""
            /> */}
            <iframe
              src={value}
              width="560"
              height="315"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </p>
        </div>
      );
    } else if (value) {
      extraInfos.push(
        <div className="isoContactCardInfos" key={attribute.value}>
          <p className="isoInfoLabel">{`${attribute.title}`}</p>
          <p className="isoInfoDetails">{value}</p>
        </div>
      );
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

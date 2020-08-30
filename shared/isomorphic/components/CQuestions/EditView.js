import Radio, { RadioGroup } from '@iso/components/uielements/radio';
import ContentHolder from '@iso/components/utility/contentHolder';
import contactActions from '@iso/redux/cquestions/actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input, { Textarea } from '../uielements/input';
import { ContactCardWrapper } from './QuestionCard.style';
import './upload.css';

const { onEditQuestion } = contactActions;

function TransferResultOption(result) {
  const value = { A: 1, B: 2, C: 3, D: 4 };
  return value[result];
}

export default function({ onUpdateQuestion }) {
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

  useEffect(() => {
    return () => {
      onUpdateQuestion();
    };
  }, []);

  console.log(editingQuestion);

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
      <div className="isoContactInfoWrapper" style={{ marginRight: '10px' }}>
        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Câu hỏi</p>
          <Textarea
            placeholder="Question"
            value={content}
            type="textarea"
            rows={5}
            onChange={event => {
              dispatch(onEditQuestion('content', event.target.value));
            }}
          />
        </div>

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Hình ảnh</p>
          <Input
            placeholder="Image Link URL"
            value={image}
            onChange={event => {
              dispatch(onEditQuestion('image', event.target.value));
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
              <RadioGroup
                onChange={event => {
                  const valueOption = ['A', 'B', 'C', 'D'];
                  dispatch(
                    onEditQuestion(
                      'result',
                      valueOption[event.target.value - 1]
                    )
                  );
                }}
                name="value"
                value={TransferResultOption(result)}
              >
                <Radio style={radioStyle} value={1}>
                  Option A
                  <Input
                    placeholder="Option A"
                    style={inputInRadioStyle}
                    onChange={event => {
                      dispatch(onEditQuestion('answerA', event.target.value));
                    }}
                    value={answerA}
                  />
                </Radio>
                <Radio style={radioStyle} value={2}>
                  Option B
                  <Input
                    placeholder="Option B"
                    value={answerB}
                    style={inputInRadioStyle}
                    onChange={event => {
                      dispatch(onEditQuestion('answerB', event.target.value));
                    }}
                  />
                </Radio>
                <Radio style={radioStyle} value={3}>
                  Option C
                  <Input
                    placeholder="Option C"
                    value={answerC}
                    style={inputInRadioStyle}
                    onChange={event => {
                      dispatch(onEditQuestion('answerC', event.target.value));
                    }}
                  />
                </Radio>
                <Radio style={radioStyle} value={4}>
                  Option D
                  <Input
                    placeholder="Option D"
                    value={answerD}
                    style={inputInRadioStyle}
                    onChange={event => {
                      dispatch(onEditQuestion('answerD', event.target.value));
                    }}
                  />
                </Radio>
              </RadioGroup>
            </ContentHolder>
          </div>
        </div>

        <div className="isoContactCardInfos">
          <p className="isoInfoLabel">Ghi chú</p>
          <Input
            placeholder="Description"
            value={description}
            onChange={event => {
              dispatch(onEditQuestion('description', event.target.value));
            }}
          />
        </div>
      </div>
    </ContactCardWrapper>
  );
}

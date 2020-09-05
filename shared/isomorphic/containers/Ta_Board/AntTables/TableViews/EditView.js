import { InputSearch } from '@iso/components/uielements/input';
import Button from '@iso/components/uielements/button';
import scoreBoardAction from '@iso/redux/ScoreBoard/actions';
import { useDispatch, useSelector } from 'react-redux';
import removeAccents from './removeAccents';
import clone from 'clone';
import React from 'react';
import TableWrapper from '../AntTables.styles';
import { Row, Col } from 'antd';

const { fetchScoreBoard } = scoreBoardAction;

export default function(props) {
  const dispatch = useDispatch();

  const { scoreBoard } = useSelector(state => state.ScoreBoard);
  const columns = clone(props.tableInfo.columns);

  const [searchKeyword, setSearchKeyword] = React.useState('');

  function filterData(keyword, data) {
    keyword = keyword.trim();
    let newData = data.filter(data => {
      for (let atribute in data) {
        if (!data[atribute] || typeof data[atribute] === 'boolean') continue;
        if (
          removeAccents(data[atribute].toString())
            .toUpperCase()
            .includes(removeAccents(keyword.toUpperCase()))
        )
          return data;
      }
    });
    return newData;
  }

  function onCellChange(value, columnsKey, index) {
    dispatch(updateUser(index, columnsKey, value));
  }

  return (
    //search
    <React.Fragment>
      <Row>
        <Col span={24} style={{ marginBottom: '10px' }}>
          <div style={{ float: 'left' }}>
            <InputSearch
              style={{ width: '50vh' }}
              placeholder="nhập id, tên, mssv, mã dự thi cần tìm kiếm"
              onChange={e => {
                setSearchKeyword(e.target.value);
              }}
            />
          </div>
          <div style={{ float: 'right' }}>
            <Button
              type="primary"
              icon="cloud-download"
              onClick={() => {
                dispatch(fetchScoreBoard());
              }}
            >
              Cập nhật
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <TableWrapper
            columns={columns}
            dataSource={filterData(searchKeyword, scoreBoard)}
            pagination={{ pageSize: 50 }}
            className="isoEditableTable"
          />
        </Col>
      </Row>
    </React.Fragment>
  );
}

import { EditableCell } from '@iso/components/Ta_UserManager/HelperCells';
import { InputSearch } from '@iso/components/uielements/input';
import userAction from '@iso/redux/userManager/actions';
import { useDispatch, useSelector } from 'react-redux';
import removeAccents from './removeAccents';
import clone from 'clone';
import React from 'react';
import TableWrapper from '../AntTables.styles';
import { Row, Col } from 'antd';
import Button from '@iso/components/uielements/button';
import Loader from '@iso/components/utility/loader';

const { fetchUserList, updateUser } = userAction;

export default function(props) {
  React.useEffect(() => {
    // dispatch(fetchUserList());
  }, []);

  const dispatch = useDispatch();

  const { userList } = useSelector(state => state.UserManager);

  const columns = createcolumns(clone(props.tableInfo.columns));

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

  function createcolumns(columns) {
    const editColumnRender = col => (text, record, index) => {
      return (
        <EditableCell
          index={record.id}
          columnsKey={columns[col].key}
          value={text[columns[col].key]}
          onChange={onCellChange}
        />
      );
    };
    columns[1].render = editColumnRender(1);
    columns[2].render = editColumnRender(2);
    columns[4].render = editColumnRender(4);
    return columns;
  }
  function onCellChange(value, columnsKey, index) {
    dispatch(updateUser(index, columnsKey, value));
  }

  const { loading } = useSelector(state => state.UserManager);

  if (loading)
    return (
      <React.Fragment>
        <Loader />
      </React.Fragment>
    );
  else
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
                  dispatch(fetchUserList());
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
              dataSource={filterData(searchKeyword, userList)}
              pagination={{ pageSize: 50 }}
              className="isoEditableTable"
            />
          </Col>
        </Row>
      </React.Fragment>
    );
}

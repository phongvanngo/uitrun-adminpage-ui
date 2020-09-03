import { EditableCell } from '@iso/components/Ta_UserManager/HelperCells';
import { InputSearch } from '@iso/components/uielements/input';
import userAction from '@iso/redux/userManager/actions';
import { useDispatch, useSelector } from 'react-redux';
import removeAccents from './removeAccents';
import clone from 'clone';
import React from 'react';
import TableWrapper from '../AntTables.styles';

const { fetchUserList, updateUser } = userAction;

export default function(props) {
  const { userList } = useSelector(state => state.UserManager);
  console.log(userList);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUserList());
  }, []);

  const [state, setState] = React.useState({
    columns: createcolumns(clone(props.tableInfo.columns)),
  });
  const { columns } = state;
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
    const editColumnRender = col => (text, record, index) => (
      <EditableCell
        index={index}
        columnsKey={columns[col].key}
        value={text[columns[col].key]}
        onChange={onCellChange}
      />
    );
    columns[1].render = editColumnRender(1);
    columns[2].render = editColumnRender(2);
    return columns;
  }
  function onCellChange(value, columnsKey, index) {
    dispatch(updateUser(index, columnsKey, value));
    console.log(columnsKey);
  }
  function onDeleteCell(index) {
    dataList.splice(index, 1);
    setState({ ...state, dataList });
  }

  return (
    //search
    <React.Fragment>
      <div
        style={{
          marginBottom: '10px',
          width: '40vh',
        }}
      >
        <InputSearch
          placeholder="nhập id, tên, mssv, mã dự thi cần tìm kiếm"
          onChange={e => {
            setSearchKeyword(e.target.value);
          }}
        />
      </div>

      <TableWrapper
        columns={columns}
        dataSource={filterData(searchKeyword, userList)}
        // pagination={{ pageSize: 5 }}
        className="isoEditableTable"
      />
    </React.Fragment>
  );
}

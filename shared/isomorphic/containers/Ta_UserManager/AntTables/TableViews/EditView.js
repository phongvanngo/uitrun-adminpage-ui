import { EditableCell } from '@iso/components/Ta_UserManager/HelperCells';
import { InputSearch } from '@iso/components/uielements/input';
import removeAccents from './removeAccents';
import clone from 'clone';
import React from 'react';
import TableWrapper from '../AntTables.styles';

export default function(props) {
  const [state, setState] = React.useState({
    columns: createcolumns(clone(props.tableInfo.columns)),
    dataList: props.dataList.getAll(),
  });
  const { columns, dataList } = state;
  const [searchKeyword, setSearchKeyword] = React.useState('');

  console.log(dataList);

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
    dataList[index][columnsKey] = value;
    setState({ ...state, dataList });
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
        dataSource={filterData(searchKeyword, dataList)}
        // pagination={{ pageSize: 5 }}
        className="isoEditableTable"
      />
    </React.Fragment>
  );
}

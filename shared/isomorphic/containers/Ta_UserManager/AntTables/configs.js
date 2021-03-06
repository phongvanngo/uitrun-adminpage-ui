import React from 'react';
import clone from 'clone';
import IntlMessages from '@iso/components/utility/intlMessages';
import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell,
} from '@iso/components/Tables/HelperCells';

const renderCell = (object, type, key) => {
  const value = object[key];
  switch (type) {
    case 'ImageCell':
      return ImageCell(value);
    case 'DateCell':
      return DateCell(value);
    case 'LinkCell':
      return LinkCell(value);
    default:
      return TextCell(value);
  }
};

const columnss = [
  {
    title: <IntlMessages id="antTable.title.NumericalOrder" />,
    key: 'key',
    width: 50,
    render: object => renderCell(object, 'TextCell', 'key'), //(text,record,index)
  },

  {
    title: <IntlMessages id="antTable.title.fullName" />,
    key: 'fullName',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'fullName'),
  },
  {
    title: <IntlMessages id="antTable.title.stdId" />,
    key: 'stdId',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'stdId'),
  },
  {
    title: <IntlMessages id="antTable.title.userCode" />,
    key: 'userCode',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'userCode'),
  },
  {
    title: <IntlMessages id="antTable.title.numberPhone" />,
    key: 'numberPhone',
    width: 150,
    render: object => renderCell(object, 'TextCell', 'numberPhone'), //(text,record,index)
  },
  {
    title: <IntlMessages id="antTable.title.id" />,
    key: 'id',
    width: 50,
    render: object => renderCell(object, 'TextCell', 'id'), //(text,record,index)
  },
];

const columns = [
  {
    title: <IntlMessages id="antTable.title.image" />,
    key: 'avatar',
    width: '1%',
    className: 'isoImageCell',
    render: object => renderCell(object, 'ImageCell', 'avatar'),
  },
  {
    title: <IntlMessages id="antTable.title.firstName" />,
    key: 'firstName',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'firstName'),
  },
  {
    title: <IntlMessages id="antTable.title.lastName" />,
    key: 'lastName',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'lastName'),
  },
  {
    title: <IntlMessages id="antTable.title.city" />,
    key: 'city',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'city'),
  },
  {
    title: <IntlMessages id="antTable.title.street" />,
    key: 'street',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'street'),
  },
  {
    title: <IntlMessages id="antTable.title.email" />,
    key: 'email',
    width: 200,
    render: object => renderCell(object, 'LinkCell', 'email'),
  },
  {
    title: <IntlMessages id="antTable.title.dob" />,
    key: 'date',
    width: 200,
    render: object => renderCell(object, 'DateCell', 'date'),
  },
];
const smallColumns = [columns[1], columns[2], columns[3], columns[4]];
const sortColumns = [
  { ...columns[1], sorter: true },
  { ...columns[2], sorter: true },
  { ...columns[3], sorter: true },
  { ...columns[4], sorter: true },
];
const editColumns = [
  { ...columns[1], width: 300 },
  { ...columns[2], width: 300 },
  columns[3],
  columns[4],
];
const groupColumns = [
  columns[0],
  {
    title: 'Name',
    children: [columns[1], columns[2]],
  },
  {
    title: 'Address',
    children: [columns[3], columns[4]],
  },
];
const tableinfos = {
  columns: clone(columnss),
};
export { columns, tableinfos };

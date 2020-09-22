import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import Loader from '@iso/components/utility/loader';
import React from 'react';
import { useSelector } from 'react-redux';
import { tableinfos } from './configs';
import TableDemoStyle from './Demo.styles';
import * as TableViews from './TableViews/TableViews';

export default function AntTable() {
  const UserList = TableViews.EditView;

  const { loading } = useSelector(state => state.ScoreBoard);

  if (loading)
    return (
      <React.Fragment>
        <Loader />
      </React.Fragment>
    );
  else
    return (
      <LayoutContentWrapper>
        <TableDemoStyle className="isoLayoutContent">
          <UserList tableInfo={tableinfos} />
        </TableDemoStyle>
      </LayoutContentWrapper>
    );
}

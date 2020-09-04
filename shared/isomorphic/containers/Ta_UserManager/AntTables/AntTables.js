import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import React from 'react';
import { tableinfos } from './configs';
import TableDemoStyle from './Demo.styles';
import * as TableViews from './TableViews/TableViews';

export default function AntTable() {
  const UserList = TableViews.EditView;
  return (
    <LayoutContentWrapper>
      <TableDemoStyle className="isoLayoutContent">
        <UserList tableInfo={tableinfos} />
      </TableDemoStyle>
    </LayoutContentWrapper>
  );
}

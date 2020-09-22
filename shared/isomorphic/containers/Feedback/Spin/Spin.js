import React from 'react';
import { Row, Col } from 'antd';
import Alert from '@iso/components/Feedback/Alert';
import Switch from '@iso/components/uielements/switch';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import basicStyle from '@iso/assets/styles/constants';
import Spin from './Spin.styles';

export default function() {
  const [loading, setLoading] = React.useState(false);
  const toggle = value => {
    setLoading(value);
  };
  const container = (
    <Alert
      message={<IntlMessages id="feedback.alert.spin.alertTitle" />}
      description={<IntlMessages id="feedback.alert.spin.alertDescription" />}
      type="info"
    />
  );
  const style = {
    textAlign: 'center',
    background: '#f1f3f6',
    padding: '30px 50px',
  };

  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <ContentHolder>
        <div style={style}>
          <Spin />
        </div>
      </ContentHolder>
    </LayoutWrapper>
  );
}

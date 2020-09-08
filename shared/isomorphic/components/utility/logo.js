import React from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '@iso/config/site.config';
import userpic from '@iso/assets/images/user1.png';

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/dashboard">
              {/* <span className="{siteConfig.siteIcon} " /> */}
              <div>
                <img
                  style={{ width: '90%', height: '90%' }}
                  src={userpic}
                ></img>
              </div>
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/dashboard">
            <img
              style={{
                width: '30%',
                height: '30%',
                marginRight: '10px',
                marginTop: '-20px',
                marginLeft: '-30px',
              }}
              src={userpic}
            ></img>
            {siteConfig.siteName}
          </Link>
        </h3>
      )}
    </div>
  );
};

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All Posts (32)" {...a11yProps(0)} />

          <Tab label="Article" {...a11yProps(1)} />
          <Tab label="Event" {...a11yProps(2)} />
          <Tab label="Job" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="tab1">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
          <div className="content">
            <div id="article">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1170/1170170.png"
                id="write-icon"
              />
              <span>Article</span>
            </div>

            <p>What if famous brands had regular fonts? Meet RegulaBrands!</p>
            <p>
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div id="right">
              <div>
                <img src="http://www.monotsuites.com/assets/pages/media/profile/profile_user.jpg" />
                <span> Sarthak Kamra</span>
              </div>

              <div>
                <i class="fa fa-eye"></i>
                <span>1.4k views</span>
                <i class="fa fa-share-alt"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="tab1">
          <img src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg" />
          <div className="content">
            <div id="article">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1170/1170170.png"
                id="write-icon"
              />
              <span>Article</span>
            </div>

            <p>What if famous brands had regular fonts? Meet RegulaBrands!</p>
            <p>
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div id="right">
              <div>
                <img src="http://www.monotsuites.com/assets/pages/media/profile/profile_user.jpg" />
                <span> Sarthak Kamra</span>
              </div>

              <div>
                <i class="fa fa-eye"></i>
                <span>1.4k views</span>
                <i class="fa fa-share-alt"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="tab1">
          <img src="https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg" />
          <div className="content">
            <div id="article">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1170/1170170.png"
                id="write-icon"
              />
              <span>Article</span>
            </div>

            <p>What if famous brands had regular fonts? Meet RegulaBrands!</p>
            <p>
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div id="right">
              <div>
                <img src="http://www.monotsuites.com/assets/pages/media/profile/profile_user.jpg" />
                <span> Sarthak Kamra</span>
              </div>

              <div>
                <i class="fa fa-eye"></i>
                <span>1.4k views</span>
                <i class="fa fa-share-alt"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="tab1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0rsalgJgLaBB-wXJqzI-rhlGeSlOXVgHhw&usqp=CAU" />
          <div className="content">
            <div id="article">
              <img
                src="https://www.twistandtwain.com/assets/resources/2020/01/pexels-photo-414612.jpeg"
                id="write-icon"
              />
              <span>Article</span>
            </div>

            <p>What if famous brands had regular fonts? Meet RegulaBrands!</p>
            <p>
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </p>
            <div id="right">
              <div>
                <img src="http://www.monotsuites.com/assets/pages/media/profile/profile_user.jpg" />
                <span> Sarthak Kamra</span>
              </div>

              <div>
                <i class="fa fa-eye"></i>
                <span>1.4k views</span>
                <i class="fa fa-share-alt"></i>
              </div>
            </div>
          </div>
        </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

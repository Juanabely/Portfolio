import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { motion } from 'framer-motion';
import './skills.css'


const { Meta } = Card;
const Skills = (props) => (
<>
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 3 }}
>
<Card
    style={{
      width: 400,
      borderRadius:20
    }}
    cover={
      <img
        alt="example"
        src={props.url}
        className='skill-img'
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title={props.name}
      description={props.describe}
    />
  </Card>
</motion.div>


  </>
);
export default Skills;
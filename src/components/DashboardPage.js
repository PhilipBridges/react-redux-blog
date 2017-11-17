import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import Seens from './Seens'

const DashboardPage = () => (
  <div>
    <PostList />
    <Seens />
  </div>
);

export default DashboardPage;
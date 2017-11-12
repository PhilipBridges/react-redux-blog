import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList';

const DashboardPage = () => (
  <div>
    <Link className="list-header" to="/create">
    Create
    </Link>
    <PostList />
  </div>
);

export default DashboardPage;
import { Table } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import useSWR from 'swr';
import MainLayout from '../layout/MainLayout';
import fetcher from '../lib/fecter';

const columns = [
  {
    title: '번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '제목',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '생성일',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (createdAt) => {
      const time = new Date(createdAt);
      return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
    },
  },
  {
    title: '액션',
    dataIndex: 'id',
    key: 'action',
    render: (id) => {
      return (
        <button onClick={() => console.log('🍀ListPage:34🍀', id)}>삭제</button>
      );
    },
  },
];

const ListPage = () => {
  const navigate = useNavigate();

  const [currentPage] = useState(1);

  const { data, error } = useSWR('/surveys', fetcher);

  if (error) {
    return 'Error';
  }

  if (!data) {
    return 'Loading';
  }

  const dataSource = data.map((e) => {
    return {
      ...e,
      key: e.id,
    };
  });

  const onRow = (record) => {
    return {
      onClick: () => {
        navigate(`/builder/${record.id}`);
      },
    };
  };

  return (
    <MainLayout selectedKeys='/list'>
      <Table
        columns={columns}
        dataSource={dataSource}
        onRow={onRow}
        pagination={{
          position: ['bottomCenter'],
          total: data.length,
          currentPage: currentPage,
          pageSize: 1,
        }}
      />
    </MainLayout>
  );
};

export default ListPage;

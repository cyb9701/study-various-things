import { Button, Table } from 'antd';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import useSWR from 'swr';
import MainLayout from '../layouts/MainLayout';
import fetcher from '../lib/fecter';
import deleteSurvey from '../services/deleteSurvey';

const ListPage = () => {
  const navigate = useNavigate();

  const [currentPage] = useState(1);

  const { data, error, mutate } = useSWR(
    '/surveys?_sort=id&_order=desc',
    fetcher,
  );

  const columns = useMemo(
    () => [
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
          return `${time.getFullYear()}-${
            time.getMonth() + 1
          }-${time.getDate()}`;
        },
      },
      {
        title: '액션',
        dataIndex: 'id',
        key: 'action',
        render: (id) => {
          return (
            <Button
              danger
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();

                deleteSurvey(id).then(() => mutate());
              }}
            >
              삭제
            </Button>
          );
        },
      },
    ],
    [mutate],
  );

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
      <CreateButtonWrapper>
        <Button onClick={() => navigate('/builder')}>
          새로운 설문조사 생성
        </Button>
      </CreateButtonWrapper>
      <Table
        columns={columns}
        dataSource={dataSource}
        onRow={onRow}
        pagination={{
          position: ['bottomCenter'],
          total: data.length,
          currentPage: currentPage,
          pageSize: 30,
        }}
      />
    </MainLayout>
  );
};

const CreateButtonWrapper = styled.div`
  text-align: right;
  margin-bottom: 25px;
`;

export default ListPage;

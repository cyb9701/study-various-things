import { Button, Form, Input, InputNumber, Switch } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setQuestion, surveySlice } from '../stores/survey/surveySlice';

const groups = [
  {
    title: '공통 옵션',
    fields: [
      {
        label: '질문',
        name: 'title',
        rules: [{ required: true }],
        type: 'text',
      },
      {
        label: '설명',
        name: 'desc',
        rules: [],
        type: 'text',
      },
      {
        label: '필수 여부',
        name: 'required',
        rules: [],
        type: 'switch',
        valuePropName: 'checked',
      },
    ],
  },
];

const detailFieldsMap = {
  text: [
    {
      label: 'Placeholder',
      name: 'placeholder',
      rules: [{ required: false }],
      type: 'text',
    },
    {
      label: '최대 입력 길이',
      name: 'max',
      rules: [{ required: false }],
      type: 'number',
    },
  ],
  textarea: [
    {
      label: 'Placeholder',
      name: 'placeholder',
      rules: [{ required: false }],
      type: 'text',
    },
    {
      label: '최대 입력 길이',
      name: 'max',
      rules: [{ required: false }],
      type: 'number',
    },
  ],
  select: [
    {
      label: '답변',
      name: 'items',
      rules: [{ required: true }],
      type: 'text',
    },
    {
      label: '최대 선택 가능 개수',
      name: 'max',
      rules: [{ required: false }],
      type: 'number',
    },
  ],
};

const getFieldInput = (type) => {
  switch (type) {
    case 'text':
      return <Input />;

    case 'switch':
      return <Switch />;

    case 'number':
      return <InputNumber />;

    default:
      return null;
  }
};

const OptionSection = () => {
  const selectedQuestionId = useSelector(
    (state) => state.selectedQuestionId.data,
  );

  const question = useSelector((state) => {
    const selectedId = state.selectedQuestionId.data;
    return selectedId === null
      ? null
      : state.survey.data?.questions[selectedId];
  });

  const dispatch = useDispatch(surveySlice);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { title, desc, required, ...options } = values;

    const type = question.type;

    const convertedOptions = { ...options };
    if (type === 'select') {
      convertedOptions.items = [...options.items.split(',')];
    }

    const value = {
      title,
      desc,
      required,
      options: convertedOptions,
      type,
    };

    dispatch(
      setQuestion({
        index: selectedQuestionId,
        data: value,
      }),
    );
  };

  useEffect(() => {
    if (!question) return;

    const detailFieldsValue = {};
    switch (question.type) {
      case 'text':
      case 'textarea':
        detailFieldsValue.max = question.options.max;
        detailFieldsValue.placeholder = question.options.placeholder;
        break;

      case 'select':
        detailFieldsValue.max = question.options.max;
        detailFieldsValue.items = question.options.items.join(',');
        break;
    }

    form.setFieldsValue({
      title: question.title,
      desc: question.desc,
      required: question.required,
      ...detailFieldsValue,
    });
  }, [form, question]);

  const mergedGroups = !question?.type
    ? []
    : [
        ...groups,
        { title: '세부 옵션', fields: detailFieldsMap[question.type] },
      ];

  return (
    <OptionSectionWrapper>
      <Title>문항 옵션</Title>
      {question ? (
        <FormWrapper>
          <Form
            name='option-form'
            layout='vertical'
            form={form}
            onFinish={onFinish}
          >
            {mergedGroups.map((group, index) => {
              return (
                <div key={index}>
                  <SubTitle>{group.title}</SubTitle>
                  {group.fields.map((field, fieldIndex) => {
                    return (
                      <Form.Item key={fieldIndex} {...field}>
                        {getFieldInput(field.type)}
                      </Form.Item>
                    );
                  })}
                </div>
              );
            })}
            <Form.Item label={null}>
              <Button type='primary' htmlType='submit'>
                저장
              </Button>
            </Form.Item>
          </Form>
        </FormWrapper>
      ) : (
        <>질문을 선택해주세요</>
      )}
    </OptionSectionWrapper>
  );
};

const OptionSectionWrapper = styled.div`
  height: 100%;
  background-color: #ffffff;
  border-left: 1px solid #dddddd;
`;

const Title = styled.div`
  font-weight: 500;
  background-color: #f0f0f0;
  border-bottom: 1px solid #dddddd;
  padding: 10px 0;
  text-align: center;
`;

const FormWrapper = styled.div`
  padding: 20px;
`;

const SubTitle = styled.div`
  font-size: 1.03rem;
  font-weight: 600;
  margin: 10px 0;
`;

export default OptionSection;

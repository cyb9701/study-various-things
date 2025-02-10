import { atom } from 'recoil';

const questionsAtom = atom({
  key: 'questionsAtom',
  default: [
    {
      title: '질문1',
      description: '설명1',
      type: 'text',
      required: false,
      options: {
        placeholder: '10자 이내로 단답해주세요',
      },
    },
    {
      title: '질문2',
      description: '설명2',
      type: 'textarea',
      required: false,
      options: {
        placeholder: '400자 이내로 답해주세요',
      },
    },
    {
      title: '질문3',
      description: '설명3',
      type: 'select',
      required: false,
      options: {
        items: ['1', '2', '3', '4'],
      },
    },
  ],
});

export default questionsAtom;

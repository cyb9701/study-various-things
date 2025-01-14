import './App.css';
import HookExample from './component/HookExample';

// // 1. JSX.
// function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   );
// }

// // 2. Props.
// function App() {
//   const buttonProps = {
//     text: 'blog',
//     color: 'blue',
//     a: 1,
//     b: 2,
//   };
//   return (
//     <>
//       <Button text={'mail'} color={'red'} />
//       <Button {...buttonProps} />
//       <Button text={'cafe'}>
//         <div>자식요소</div>
//       </Button>
//     </>
//   );
// }

// // 3. State.
// function App() {
//   const [count, setCount] = useState(0);
//   const [light, setLight] = useState('OFF');

//   return (
//     <>
//       <div>
//         <h1>{light}</h1>
//         <button
//           onClick={() => {
//             setLight(light === 'ON' ? 'OFF' : 'ON');
//           }}
//         >
//           {light === 'ON' ? '끄기' : '켜기'}
//         </button>
//       </div>
//       <div>
//         <h1>{count}</h1>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//           }}
//         >
//           +
//         </button>
//       </div>
//     </>
//   );
// }

// // 4. State와 Props.
// //
// // * 리랜더링 되는 경우.
// // 1. state가 변경되었을 때.
// // 2. props 가 변경될 때.
// // 3. 부모 컴포넌트가 리랜더링될 때.
// //
// // --> count state가 변경되도 [Bulb]가 리랜더링된다.
// // --> 때문에 관련 없는 state는 다른 컴포넌트로 관리를 해야지 낭비가 없다.
// const Bulb = ({ light }) => {
//   console.log('🍀App:67🍀', light);
//   return (
//     <div>
//       {light === 'ON' ? (
//         <h1 style={{ backgroundColor: 'orange' }}>ON</h1>
//       ) : (
//         <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
//       )}
//     </div>
//   );
// };

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//     </>
//   );
// };

// function App() {
//   const [light, setLight] = useState('OFF');
//   return (
//     <>
//       <div>
//         <Bulb light={light} />
//         <button
//           onClick={() => {
//             setLight(light === 'ON' ? 'OFF' : 'ON');
//           }}
//         >
//           {light === 'ON' ? '끄기' : '켜기'}
//         </button>
//       </div>
//       <Counter />
//     </>
//   );
// }

// // 5. State로 입력 관리.
// // 6. Ref.
// function App() {
//   return (
//     <>
//       <Register />
//     </>
//   );
// }

// 7. Hooks.
function App() {
  return (
    <>
      <HookExample />
    </>
  );
}

export default App;

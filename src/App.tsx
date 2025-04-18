import './App.css';
import { styled } from 'styled-components';
import { RecoilRoot } from 'recoil';
import Header from './components/sticky/Header';
import Footer from './components/sticky/Footer';
import LightMap from './components/canvas/LightMap';

function App() {
  return (
    <RecoilRoot>
      <Styled.Container>
        <Header />
        <LightMap />
        <Footer />
      </Styled.Container>
    </RecoilRoot>
  );
}

export default App;

const Styled = {
  Container: styled.div`
    z-index: 0;
    color: #ffffff;

    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
  `,
};

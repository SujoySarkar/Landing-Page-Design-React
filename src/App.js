import './App.css';
import MyShape from './Assets/custom_shape.svg'
import JobRiver from './Assets/jobriver.png'
import Title from './Components/Title';
import { BiSearch } from 'react-icons/bi';
import { ImLocation2 } from 'react-icons/im';
import { FcGoogle } from 'react-icons/fc';
import { FcSportsMode } from 'react-icons/fc';
import { FcLibrary } from 'react-icons/fc';
import { FcDribbble } from 'react-icons/fc';
import { FcStackOfPhotos } from 'react-icons/fc';
import IconTitleRow from './Components/IconTitleRow';



function App() {

  var main_div_Style = { backgroundColor: '#EAECF8', height: '100vh', whdth: '100vw', position: 'relative' }

  var backgroud_style = { height: '100vh', position: 'absolute', left: '0', zIndex: '0' }

  var bottom_centered_div = {
    height: '90vh', width: '80vw',
    backgroundColor: 'transparent',
    zIndex: '1', position: 'absolute',
    borderLeft: '6px solid white',
    borderRight: '6px solid white',
    borderTop: '6px solid white',
    borderTopLeftRadius: '40px',
    borderTopRightRadius: '40px',
    bottom: '0px',
    boxSizing: 'border-box',
    left: '5px',
    right: '5px',
    margin: '0 auto',
    paddingLeft: '40px',
    paddingTop: '20px',
    paddingRight: '40px',
  }

  var iconsStyle = { height: '23px', width: '23px', paddingRight: '10px' }

  return (
    <div className="App" style={main_div_Style}>

      <img style={backgroud_style} src={MyShape}></img>

      <div style={bottom_centered_div}>

        <Title></Title>

        <br></br>

        <h1 style={{ fontSize: '35px' }}>Get hired<br></br>By the popular<br></br>teams.</h1>
        <p style={{ fontSize: '10px', color: 'grey', fontWeight: '400' }}>Find job according to your interest simply click on search <br></br> And choose category according your skills.</p>
        <img style={{ height: '70vh', width: '55vw', position: 'absolute', right: '30px', bottom: '0px' }} src={JobRiver}></img>

        <br></br>

        <div style={{ display: 'flex', paddingLeft: '10px', alignItems: 'center', height: '8vh', width: '30vw', backgroundColor: 'white', borderRadius: '10px', zIndex: '2', position: 'relative' }}>

          <IconTitleRow icon={<BiSearch></BiSearch>} title='Job title or keywords'></IconTitleRow>
          <div style={{ width: '15px' }}></div>
          <IconTitleRow icon={<ImLocation2></ImLocation2>} title='Location'></IconTitleRow>
          <button style={{ height: '6vh', width: '8vw', borderRadius: '5px', position: 'absolute', right: '8px', border: 'none', color: 'white', backgroundColor: '#634FA8' }}>Search</button>
        </div>

        <br></br>

        <p style={{ fontSize: '12px', color: 'black', fontWeight: 'bolder' }}>Recent Job Opening</p>

        <br></br>

        <div style={{ display: 'flex' }}>
          <FcGoogle style={iconsStyle}></FcGoogle>
          <FcSportsMode style={iconsStyle}></FcSportsMode>
          <FcLibrary style={iconsStyle}></FcLibrary>
          <FcDribbble style={iconsStyle}></FcDribbble>
          <FcStackOfPhotos style={iconsStyle}></FcStackOfPhotos>
        </div>

      </div>
    </div>
  );
}

export default App;

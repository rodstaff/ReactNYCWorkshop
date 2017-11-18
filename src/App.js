import React, { Component } from 'react';

import Clock from './Clock/';
import CountDownClock from './CountDownClock/solution';
import CountDownWordClock from './CountDownWordClock/solution';
import ColorPicker from './ColorPicker/solution';
import GradientPicker from './GradientPicker/solution';
import CustomGradientPicker from './CustomGradientPicker';

class App extends Component {
  state = {
  //  background: 'steelblue',
    background: 'magenta',
  };

  render() {
    return (
      <div
        style={{
          background: this.state.background,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Clock from={10000}/>
        <CountDownClock from={10000}/>
        <CountDownWordClock from={10000}/>
        <ColorPicker 
            label="pick background" 
            onSelect={background => {
              this.setState({ background } );
            }}
        />
        <GradientPicker 
            label="pick background" 
            onSelect={background => {
              this.setState({ background } );
            }}
        />
        <CustomGradientPicker />
      </div>
    );
  }
}

export default App;

// Adding it all together...
// import React, { Component } from 'react';
//
// import Clock from './Clock/solution';
// import CountDownClock from './CountDownClock/solution';
// import CountDownWordClock from './CountDownWordClock/solution';
// import ColorPicker from './ColorPicker/solution';
// import GradientPicker from './GradientPicker/solution';
// import CustomGradientPicker from './CustomGradientPicker/solution';
//
// class App extends Component {
//   state = {
//     background: 'peachpuff',
//   };
//
//   render() {
//     return (
//       <div
//         style={{
//           background: this.state.background,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '100vh',
//         }}
//       >
//         <Clock hours={1} minutes={1} seconds={1} />
//         <CountDownClock from={10} />
//         <CountDownWordClock from={10} />
//         <ColorPicker label="Pick Color" onSelect={background => this.setState({ background })} />
//         <GradientPicker
//           label="Pick Gradient"
//           onSelect={background => this.setState({ background })}
//         />
//         <CustomGradientPicker onChange={background => this.setState({ background })} />
//       </div>
//     );
//   }
// }
//
// export default App;

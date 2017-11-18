import React from 'react';

const leftPadTime = time => (time < 10 ? `0${time}` : time);

const myStyle2 = {
  color: "blue",
  fontSize: 50
}


const Clock = ({ hours, minutes, seconds }) => (

 <div>
  <h1>{`${leftPadTime(hours)}:${leftPadTime(minutes)}:${leftPadTime(seconds)}`}</h1>
  <h2 style={myStyle2}>Lighning-Workshop is sooo KEEEWL!</h2>
 </div>
);


Clock.defaultProps = {
  hours: '1',
  minutes: '23',
  seconds: '45'
};

export default Clock;










// class ShowList extends React.Component {
//   render() {

//   	const myStyle1 = {
//       color: "pink",
//       fontSize: 50
//     }

//     return (
//       <div>
//         <h2 style={myStyle1}>Where is the Default PROPS===HEEEELP!!!</h2>
//       </div>
//     );
//   }
// }

// export default ShowList;

import React, { Component } from 'react';



class App extends Component {
  state = {
    // Desfine the intial state
    person: {
      fullName: 'Elon Reeve Musk',
      bio:"As the CEO and lead designer of SpaceX, Musk has revolutionized the space industry by developing reusable rockets and aiming to make humanity a multiplanetary species. He also co-founded Tesla, Inc., an electric vehicle and clean energy company that has played a significant role in popularizing electric cars. Musk's vision extends beyond the Earth and Mars, as he aims to develop a high-speed transportation system known as the Hyperloop.",
      imgSrc: 'https://shorturl.at/yzV89',
      profession: 'Entrepreneur, Engineer, Industrial Designer',
    },
    show: false,
    lastMountedTime: null,
  };

  // Set the lastMountedTime when the component is mounted
  componentDidMount() {
    this.setState({ lastMountedTime: new Date().toLocaleTimeString() });
  }

  // Toggle the show state when the button is clicked
  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, lastMountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt="Profile" />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Last mounted time: {lastMountedTime}</p>
      </div>
    );
  }
}

export default App;

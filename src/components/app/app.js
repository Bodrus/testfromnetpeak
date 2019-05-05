import React from 'react';
import Editor from '../editor';
import './app.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.selector = React.createRef();
  }

  state = {
    left: 0,
  }

  changeWindow = () => {
    const rect = this.selector.current.getBoundingClientRect();
    this.setState({ left: rect.left })
  };

  componentDidMount() {
    window.addEventListener('resize', this.changeWindow);
    window.addEventListener('load', this.changeWindow);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.changeWindow);
    window.removeEventListener('load', this.changeWindow);
  };

  render() {
    const { left } = this.state;
    return ( 
      <div className='wraper'ref={this.selector} >
        <Editor position={left}/>
      </div>
    );
  }
}
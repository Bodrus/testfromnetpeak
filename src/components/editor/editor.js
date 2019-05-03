import React from 'react';
import cn from 'classnames';
import './editor.css';


export default class Editor extends React.Component {
  
  state = { 
    active: null,
    text: null, 
  };

  selectBold = () => this.setActive('bold');

  selectNormal = () => this.setActive('normal');

  selectLight = () => this.setActive('light');

  setActive = (active) => {
    this.setState({ active });
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };
    
    
  render() {
    const { position } = this.props;
    const newPosition = position + 80;

    const { active } = this.state;

    const sharedClasses = {
      btn: true,
      'btn-secondary': true,
    };


    const boldButtonClass = {
      ...sharedClasses,
      active: active === 'bold',
      boldButton: active === 'bold',
    };

    const normalButtonClass = {
      ...sharedClasses,
      active: active === 'narmal',
      normalButton: active === 'bold', 
    };

    const lightButtonClass = {
      ...sharedClasses,
      active: active === 'light',
      lightButton: active === 'light', 
    };

    const textareaClasses = {
      'form-control': true,
      [`textarea-${active}`]: true,
    };

    return (
      <div style={{ left:`${newPosition}px`, top:"60px" }} className='editor'>
        <div className="form-group btn-group">   
            <button type="button" className={cn(boldButtonClass)} onClick={this.selectBold}>Bold</button>
            <button type="button" className={cn(normalButtonClass)} onClick={this.selectNormal}>Normal</button>
            <button type="button" className={cn(lightButtonClass)} onClick={this.selectLight}>light</button>
        </div>
        <div className="form-group">
          <textarea className={cn(textareaClasses)} onChange={this.onChange} value={this.state.text} rows="1"></textarea>
        </div>
      </div>
    );
  }
}
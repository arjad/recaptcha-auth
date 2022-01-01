import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
function onchange(val) 
{
  console.log("capture value ", val);
  
}
class App extends Component {
  constructor(props) {
    super(props)

    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      isVerified: false
    }
  }

  recaptchaLoaded() {
    console.log('capcha successfully loaded');
  }

  handleSubscribe() {
    if (this.state.isVerified) {
      alert('You have successfully subscribed!');
    } else {
      alert('Please verify that you are a human!');
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }
 

  render() 
  {
    return (
      <div className="App">
        
        <div className="App-intro">
          <input type="text" placeholder="email@company.com" />

          <div
            className="convert"
            onClick={this.handleSubscribe}
          >Subscribe</div>

          {/* authentication component coppy from npm websitye*/}
          {/* get key from https://cloud.google.com/recaptcha-enterprise/docs/reference/rest/?apix=true*/}

          <Recaptcha
            sitekey="6Lfd1OEdAAAAABTyB5rajP2vfjvCs95mT5OtyQXM"
            render="explicit"
            onChange={onchange}
            onloadCallback={this.recaptchaLoaded}
            // verifyCallback={this.verifyCallback}
          />
        </div>
      </div>
    );
  }
}

export default App;

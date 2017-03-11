import React, { PropTypes, Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import prsBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import FlatButton from 'material-ui/FlatButton';

import classnames from 'classnames';
import AppBar from 'material-ui/AppBar';


import data from '../../data.json';
import RaisedButton from 'material-ui/RaisedButton';
import './style.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      data: data,
      index: 0,
      memas: [],
      url: "https://i.imgflip.com/5mcpl.jpg"
    };
    this.memas();
  }

  memas() {
     var xhttp = new XMLHttpRequest();
     let that = this;
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let res = JSON.parse(this.responseText);
          that.setState({memas: res.data.memes}); //.memes[Math.floor(Math.random() * res.data.memes.length)]
          console.log(that.state.memas);
        }
      };
      xhttp.open("GET", "https://api.imgflip.com/get_memes", true);
      xhttp.send();
  }
  componentDidMount() {

     this.random();

  }
  
  increase() {
    let that = this; 
     let bg = this.state.memas[Math.floor(Math.random() * that.state.memas.length)];
     if(bg) {
      bg = bg.url;
      //this.setState({url: bg});
      console.log(bg);
     }
    this.random();
  }
  random() {
    let max = this.state.data[1].data.children;
    max = max.length;
    console.log(max);
    let next = Math.floor(Math.random()*(max-0+1)+0);
    this.setState({index: next});
  }
  render() {
     
    const { className, ...props } = this.props;
    let kysymys = this.state.data[1].data.children[this.state.index].data.body;
    kysymys = kysymys.replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, "$1$2|").split("|")
    kysymys = kysymys[0];
    const word = kysymys.split(" ");
    
    if (word[1] != "have") {
      this.increase();
    }

    
   // meme = meme[0].data; //['memes'][Math.floor(Math.random() * this.state.memas.data.memes.length)];
    //meme = meme.url;

    
     const styles = {
      main: {
        display: 'flex',
        height: '80vh',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#fff",
        textAlign: 'center',
        background: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(' + this.state.url + ') no-repeat center center fixed', 
        backgroundSize: 'cover'
        
      },
      actions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      act: {
        margin: '10px'
      }
    };
  
    //data[1][data][children][data][body]
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(prsBaseTheme)} >
        <div>
         <AppBar
            title="Ultimate Drinking Game"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div style={styles.main}>
             <h3>{kysymys}</h3>

          </div>



          <div style={styles.actions}>
             
              <RaisedButton style={styles.act} label="Next" primary={true} onClick={this.increase.bind(this)}/>
          </div>
          
        </div>
      </MuiThemeProvider>
    );
  }

 

 
 
}

export default App;
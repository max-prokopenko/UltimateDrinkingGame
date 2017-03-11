/* global scanner */
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {List, ListItem} from 'material-ui/List';

import MobileTearSheet from './MobileTearSheet';
import Snackbar from 'material-ui/Snackbar';
//import Scanner from './Scanner';
//import Result from './Result';


const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 10,
    left: 'auto',
    position: 'absolute',
};

export default class AddButton extends React.Component {

constructor(props) {
    super(props);
    this.state = {
            scanning: false,
            results: [],
            open: false
        };
    
}
initScan() {
  console.log("Scanner inited 0, 50, 100, 20");

}
proceedScan = (result) => {
  this.setState({results: this.state.results.concat([result])});
  this.setState({
      open: true,
  });
};

scan() {
    //scanner.resizePartialScanner(0, 60, 100, 20);
    scanner.startScanning(this.initScan(), this.proceedScan.bind(this), 0, 0, 100, 20); 

}

handleRequestClose = () => {
    this.setState({
      open: false,
    });
};

render() {
    return (
      <div>
        <MobileTearSheet>
          <List>
            {this.state.results.map((result, index) => (
              <ListItem primaryText={result.code}  />
            ))}
          </List>
        </MobileTearSheet>
       
        
        <Snackbar
          open={this.state.open}
          message="Product added to your shopping list"
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
        

        <FloatingActionButton style={style} onClick={this.scan.bind(this)} >
          <ContentAdd />
        </FloatingActionButton>
      </div>
     );
  }
}


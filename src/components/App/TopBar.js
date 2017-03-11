import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';


export default class SideMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <AppBar
              title="ScanMe"
              showMenuIconButton={false}
               iconElementRight={<IconButton onClick={this.handleToggle}><NavigationMenu /></IconButton>}
        />
       <Drawer width={300} open={this.state.open} disableSwipeToOpen={true}>
         
       </Drawer>
      </div>
    );
  }
}

 
        
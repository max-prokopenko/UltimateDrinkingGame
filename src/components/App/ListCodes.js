import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MobileTearSheet from './MobileTearSheet';

export default class ListCodes extends React.Component {
  propTypes: {
        result: React.PropTypes.object
  }

 render() {
    const result = this.props.result;

        if (!result) {
            return null;
        }
    return (
      <MobileTearSheet>
        <List>
          <ListItem primaryText={result}  />
        </List>
        
        
      </MobileTearSheet>
    );
  }
}


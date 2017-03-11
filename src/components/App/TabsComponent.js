import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import AddButton from './AddButton';

import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 10,
    paddingBottom: 0,
    overflow: scroll,
  },
};
export default class TabsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,

    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Home" data-route="/" value={0} />
          <Tab label="Recipes" data-route="/login" value={1} />
          <Tab label="Settings" data-route="/about" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          
        >
          <div>
            <AddButton />
          </div>
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
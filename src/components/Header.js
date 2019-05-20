import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

import {
  Navbar,
  Button,
  H1,
} from '@bootstrap-styled/v4';

export default class Header extends React.Component {

  static propTypes = {
    onRefreshClick: PropTypes.func,
  };

  state = {
    mouseOver: false,
  }

  handleClick = () => {
    this.props.onRefreshClick()
  }

  handleMouseOver = () => {
    this.setState({
      mouseOver: true
    })
  }

  handleMouseOut = () => {
    this.setState({
      mouseOver: false
    })
  }

  render() {
    const { mouseOver } = this.state;

    return (
      <Navbar className="flex-row justify-content-between">
        <H1>Home</H1>
        <Button
          color="success"
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onClick={this.handleClick}
        >
          <FontAwesomeIcon icon="redo" className={cn(mouseOver && 'fa-spin')}/>
        </Button>
      </Navbar>
    );
  }
}

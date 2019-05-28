import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

import {
  Navbar,
  Button,
  H1,
  Tooltip,
} from '@bootstrap-styled/v4';

export default class Header extends React.Component {

  static propTypes = {
    onRefreshClick: PropTypes.func,
    isLoading: PropTypes.bool
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
    const { isLoading } = this.props;

    return (
      <Navbar className="flex-row justify-content-between">
        <H1>Home</H1>
        <Button
            color="success"
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            onClick={this.handleClick}
            id="tooltip-button"
        >
          <FontAwesomeIcon icon="redo" className={cn(isLoading && 'fa-spin')}/>
        </Button>
        <Tooltip
          placement="left"
          isOpen={mouseOver}
          target="tooltip-button"
        >
          Refresh movie list.
        </Tooltip>
      </Navbar>
    );
  }
}

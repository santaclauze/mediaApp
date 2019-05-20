import React  from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styled, { withTheme } from 'styled-components';
import {
  Close,
  Modal
} from '@bootstrap-styled/v4';
import { FadeIn } from '@bootstrap-styled/motion';


const Wrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
   background-color:rgba(0,0,0,0.6);
  display: flex;
`

const PlayerWrapper = styled.div`
  margin: auto;
  position: relative;
`

const CloseMovie = styled(Close)`
  position: absolute;
  top: 15px;
  right: 25px;
  z-index: 9999;
`;

class MoviePlayer extends React.Component {

  static propTypes = {
    close: PropTypes.func,
    theme: PropTypes.object,
    movieContent: PropTypes.object,
  };

  state = {
  }

  handleClick = () => {

  }

  render() {
    const { theme, close, movieContent } = this.props;

    return (
      <FadeIn
        duration={theme.motion['$motion-duration']['xs']}
        timingFunction={theme.motion['$motion-timing-function']['easeIn']}
      >
        <Wrapper>
          <PlayerWrapper>
            <CloseMovie onDismiss={close} />
            <video controls autoPlay height="500" width="900" onEnded={close}>
              <source src={movieContent.url} type={`video/${movieContent.format}`} />
            </video>
          </PlayerWrapper>
        </Wrapper>
      </FadeIn>
    );
  }
}

export default withTheme(MoviePlayer);

import React from 'react';
import PropTypes from 'prop-types';
import { useScrollTrigger } from '@mui/material';

const ElevateOnScroll = props => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? 'primary' : 'transparent',
    position: trigger ? 'fixed' : 'static',
  });
};

ElevateOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ElevateOnScroll;

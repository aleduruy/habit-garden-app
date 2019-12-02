import React, { Component } from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import style from './style';
import PropTypes from 'prop-types';
// import { Svg } from 'expo';
// const { Circle, Rect } = Svg;

export class Plant01 extends Component {
  render() {
    const { children, ...props } = this.props;

    return <StyledPlant01 {...props}>{children}</StyledPlant01>;
  }
}

Plant01.propTypes = {
    children: PropTypes.string,
}
const StyledPlant01 = styled(Text)`${style}`;

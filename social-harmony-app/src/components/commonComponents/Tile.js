// src/components/Tile.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const TileTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const TileIcon = styled.div`
  font-size: 40px;
`;

const Tile = ({ title, icon }) => {
  return (
    <div>{icon}{title}</div>
  );
};
Tile.defaultProps = {
    additionalButtons: [],
  };
  
  Tile.propTypes = {
    additionalButtons: PropTypes.arrayOf(PropTypes.element),
  };

export default Tile;

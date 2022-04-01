import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import Button from '../Button';

export default function Card({ imageUrl, title, artist }) {
  return (
    <div>

        <div className="card__action">
            <button className="btn">Select</button>
            <Button variant="secondary">Select</Button>
        </div>

    </div>
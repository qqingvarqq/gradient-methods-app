import React from 'react';
import './card.css';

export default function Card(props) {
  const {children} = props;
  return <div className="card">{children}</div>;
}

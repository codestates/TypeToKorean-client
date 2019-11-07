import React from 'react';
import { Card } from 'antd';

export default function TypoDiv({ textToWrite }) {
  return <Card className="textToWrite">{textToWrite}</Card>;
}

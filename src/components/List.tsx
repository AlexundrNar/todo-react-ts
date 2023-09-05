import React from 'react';
import { ListProps } from '../models/todo';


export default function List<T>({caption, className, items, renderItem}: ListProps<T>) {
  return (
    <div>
      <h3>{caption}</h3>
      <div className={className}>
      {items.map(renderItem)}
      </div>
    </div>
  )
};
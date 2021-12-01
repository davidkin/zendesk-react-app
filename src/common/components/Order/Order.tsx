import React from 'react';
import {Highlight} from 'react-instantsearch-dom';

interface IOrder {
  objectID: string;
  firstname: string;
  lastname: string;
  zip_code: number;
}

interface IProps {
  hit: IOrder;
}

const Order = ({hit}: IProps) => {
  return (
    <div>
      <div className="hit-name">
        <Highlight attribute="firstname" hit={hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="lastname" hit={hit} />
      </div>
      <div className="zipCode">${hit.zip_code}</div>
    </div>
  );
};

export default Order;

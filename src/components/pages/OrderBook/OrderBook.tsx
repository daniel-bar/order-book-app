import React, { useEffect, useState } from 'react';

import io from 'socket.io-client';

import OrderBookView from './OrderBook.view';

import { IApiData } from '../../../models/orderBook';

interface Props {
  readonly orderBook?: (value: IApiData | null) => void;
};

const ENDPOINT = 'http://localhost:3000';

const OrderBook: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const [ orderBookState, setOrderBookState ] = useState<IApiData | null>(null);

  useEffect(() => {
    const socket = io(ENDPOINT);

    socket.on('orderBook', (apiData: IApiData) => {
      setOrderBookState(apiData);
    });
  }, []);

  return (
    <OrderBookView
      orderBook={orderBookState}
    >{props.children}</OrderBookView>
  );
};

OrderBook.displayName = 'OrderBook';
OrderBook.defaultProps = {};

export default OrderBook;
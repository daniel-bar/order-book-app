import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './OrderBook.module.scss';

import { IApiData } from '../../../models/orderBook';

interface Props {
  readonly orderBook: IApiData | null;
};

const HistoricPricesView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { t } = useTranslation();

  const displayOrderBook = {
    bidQty: !props.orderBook?.bestBidQty ? t('orderBook.noValue') : props.orderBook.bestBidQty,
    bidPrice: !props.orderBook?.bestBid ? t('orderBook.noValue') : props.orderBook.bestBid,
    askQty: !props.orderBook?.bestAskQty ? t('orderBook.noValue') : props.orderBook.bestAskQty,
    askPrice: !props.orderBook?.bestAsk ? t('orderBook.noValue') : props.orderBook.bestAsk,
  };
  
  return (
    <div className={classes['main']}>
      <h1 className={classes['main__header']}>{t('orderBook.header')}</h1>
      <section>
        <header>
          <div className={classes['tableHeader']}>{t('orderBook.table.bidQty')}</div>
          <div className={classes['tableHeader']}>{t('orderBook.table.bidPrice')}</div>
          <div className={classes['tableHeader']}>{t('orderBook.table.askQty')}</div>
          <div className={classes['tableHeader']}>{t('orderBook.table.askPrice')}</div>
        </header>
          <div className={classes['tableData']}>
            <div className={classes['tableData__row']}>{displayOrderBook.bidQty}</div>
            <div className={classes['tableData__row']}>{displayOrderBook.bidPrice}</div>
            <div className={classes['tableData__row']}>{displayOrderBook.askQty}</div>
            <div className={classes['tableData__row']}>{displayOrderBook.askPrice}</div>
          </div>
      </section>
    </div>
  );
};

HistoricPricesView.displayName = 'HistoricPricesView';
HistoricPricesView.defaultProps = {};

export default HistoricPricesView;
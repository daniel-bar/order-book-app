import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const OrderBook = React.lazy(() => import('./components/pages/OrderBook/OrderBook'));


interface Props { }

const AppView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => (
  <BrowserRouter>
    <Suspense fallback={null}>
        <Route path="/" component={OrderBook} />
    </Suspense>
  </BrowserRouter>
);

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);

import React, {FC, useCallback, useContext, useMemo} from 'react';
import {Row, Col, Grid} from '@zendeskgarden/react-grid';
import {ZAFClientContext} from '@zendesk/sell-zaf-app-toolbox';
import {ORDERS_MOCK} from '../../mock';
import {GENERATE_ZENDESK_URL} from '../../environment';
import {useOrderContext} from '../../common/context/OrderContext';
import {ZafClientData} from '../../common/types';
import {IOrder} from '../../common/interfaces';
import css from './HomePage.css';

type Order = IOrder | undefined;

export const HomePage: FC = () => {
  const {orderId} = useOrderContext();
  const data: ZafClientData | undefined = useContext(ZAFClientContext);

  const currentOrder: Order = useMemo(
    () =>
      orderId
        ? ORDERS_MOCK.find((item) => item.cart_id === orderId)
        : undefined,
    [orderId],
  );

  const handleRoute = useCallback(
    (cartId: string) => {
      if (!data?.account) {
        return;
      }

      const url = GENERATE_ZENDESK_URL(data.account.subdomain);

      const params =
        data?.appParams && data.appParams.zcli_apps ? '?zcli_apps=true&' : '?';

      window.open(`${url}${params}orderId=${cartId}`, '_blank', 'noopener');
    },
    [data],
  );

  return (
    <div>
      <Grid debug>
        {!currentOrder ? (
          ORDERS_MOCK.map((item) => (
            <Row key={item.cart_id} className={css.card}>
              <Col md={6} offsetMd={3} sm={12}>
                <h3>
                  Order: <b>#{item.cart_id.split('-')[0].toUpperCase()}</b>
                </h3>
                <div>
                  <b>Customer name: </b>
                  {`${item.billing_address.first_name} ${item.billing_address.last_name}`}
                </div>
                <div>
                  <b>Wedding date: </b>
                  {item.date_created}
                </div>
                <div>
                  <button onClick={() => handleRoute(item.cart_id)}>
                    Check Order
                  </button>
                </div>
              </Col>
            </Row>
          ))
        ) : (
          <Row>
            <Col md={6} offsetMd={3}>
              <h3>Order #{currentOrder.cart_id.split('-')[0].toUpperCase()}</h3>
              <div>
                <b>Customer name: </b>
                {`${currentOrder.billing_address.first_name} ${currentOrder.billing_address.last_name}`}
              </div>
              <div>
                <b>Wedding date: </b>
                {currentOrder.date_created}
              </div>

              <div className={css.infoBlock}>
                <h3>Order activity: </h3>
                <hr />
              </div>
              <div className={css.infoBlock}>
                <h3>Payments: </h3>
                <hr />
              </div>
              <div className={css.infoBlock}>
                <h3>Shipments: </h3>
                <hr />
              </div>
            </Col>
          </Row>
        )}
      </Grid>
    </div>
  );
};

export default HomePage;

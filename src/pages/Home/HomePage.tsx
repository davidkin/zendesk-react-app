import React, {FC, useMemo} from 'react';
import {Row, Col, Grid} from '@zendeskgarden/react-grid';
import {ORDERS_MOCK} from '../../mock';
import {ZENDESK_URL} from '../../environment';
import {useOrderContext} from '../../common/context/OrderContext';
import css from './HomePage.css';

export interface IOrder {
  cart_id: string;
  billing_address: {
    [key: string]: string;
  };
}

type Order = IOrder | undefined;

export const HomePage: FC = () => {
  const {orderId} = useOrderContext();
  const currentOrder: Order = useMemo(
    () =>
      orderId
        ? ORDERS_MOCK.find((item) => item.cart_id === orderId)
        : undefined,
    [orderId],
  );

  const handleRoute = (cartId: string): void => {
    window.open(
      `${ZENDESK_URL}?zcli_apps=true&orderId=${cartId}`,
      '_blank',
      'noopener',
    );
  };

  return (
    <div>
      <div className={css.mainText}>
        <p>Host name is David !</p>
      </div>

      <Grid debug>
        {!currentOrder ? (
          ORDERS_MOCK.map((item) => (
            <Row justifyContent="center" key={item.cart_id}>
              <Col size={4}>
                <h3>
                  <b>Cart Id</b>: {item.cart_id}
                </h3>
                <div>
                  <b>Full name: </b>
                  {`${item.billing_address.first_name} ${item.billing_address.last_name}`}
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
          <Row justifyContent="center">
            <Col size={4}>
              <h3>
                <b>Cart Id</b>: {currentOrder.cart_id}
              </h3>
              <div>
                <b>Full name: </b>
                {`${currentOrder.billing_address.first_name} ${currentOrder.billing_address.last_name}`}
              </div>
            </Col>
          </Row>
        )}
      </Grid>
    </div>
  );
};

export default HomePage;
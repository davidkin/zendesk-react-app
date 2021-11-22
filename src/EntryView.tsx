import React, {FC} from 'react';
import {Row, Col, Grid} from '@zendeskgarden/react-grid';
import {ORDERS_MOCK} from './mock';
import css from './App.css';

export const EntryView: FC = () => {
  const handleRoute = (cartId: string): void => {
    window.open(
      `https://dataart599.zendesk.com/agent/apps/zaf-react-skeleton-app?zcli_apps=true&orderId=${cartId}`,
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
        {ORDERS_MOCK.map((item) => (
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
        ))}
      </Grid>
    </div>
  );
};

export default EntryView;

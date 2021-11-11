import * as React from 'react'
// tslint:disable-next-line:origin-ordered-imports
import {Row, Col, Grid} from '@zendeskgarden/react-grid'
import {ORDERS_MOCK} from './mock'

import css from './App.css'

export const EntryView = () => {
  return (
    <div>
      <div className={css.mainText}>
        <p>Host name is David.</p>
      </div>
      <Grid debug>
        {ORDERS_MOCK.map((item) => (
          <Row justifyContent="center" key={item.cart_id}>
            <Col size={4}>
              <h3>Cart Id:</h3>
              <div>{item.cart_id}</div>
            </Col>
            <Col size={4}>
              <h3>
                <b>Billing Address</b>
              </h3>
              <div>Email: {item.billing_address.email} </div>
              <div>
                Full name:{' '}
                {`${item.billing_address.first_name} ${item.billing_address.last_name}`}
              </div>
              <div>City: {item.billing_address.city}</div>
              {item.billing_address.phone && (
                <div>Phone: {item.billing_address.phone}</div>
              )}
            </Col>
          </Row>
        ))}
      </Grid>
    </div>
  )
}

export default EntryView

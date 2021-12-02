import React, {FC} from 'react';
import algoliasearch from 'algoliasearch';
import {InstantSearch, SearchBox, Hits} from 'react-instantsearch-dom';
import {Row, Col} from '@zendeskgarden/react-grid';
import Button from '../../common/components/Button/Button';
import styles from './HomePage.css';

const searchClient = algoliasearch(
  'I67M45588W',
  '2143daef7aa5060f5f128a32dd601e0f',
);

const HomePage: FC = () => {
  return (
    <div className={styles.App}>
      <InstantSearch searchClient={searchClient} indexName="dev_tk">
        <Row justifyContent="center">
          <Col md={12}>
            <SearchBox
              autoFocus
              className={styles.searchField}
              translations={{placeholder: 'Search'}}
            />
          </Col>
        </Row>

        <Row justifyContent="center" className={styles.imageRow}>
          <div className={styles.imgBlock}>
            <img src="img/tk.png" alt="the knot" />

            <div className={styles.logo}>
              <img src="img/logo.png" alt="logo" />
              <img src="img/weddding.png" alt="wedding" />
            </div>
          </div>
        </Row>

        <Row justifyContent="center">
          <Col md={12}>
            <div className={styles.actionBlock}>
              <div className={styles.acionInfo}>
                <h2>9 orders</h2>
                <span>awaiting CX review</span>
              </div>

              <Button onClick={() => console.log(1)} buttonStyle="dark">
                Take one
              </Button>
            </div>
          </Col>
        </Row>

        {/*<div className={styles.hitsBlock}>*/}
        {/*  <Hits />*/}
        {/*</div>*/}
      </InstantSearch>
    </div>
  );
};

export default HomePage;

import React, {FC} from 'react';
import algoliasearch from 'algoliasearch';
import {InstantSearch, SearchBox, Hits} from 'react-instantsearch-dom';
import {Row, Col} from '@zendeskgarden/react-grid';
import styles from './HomePage.css';

const searchClient = algoliasearch(
  'I67M45588W',
  '2143daef7aa5060f5f128a32dd601e0f',
);

export const HomePage: FC = () => {
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

        <div className={styles.hitsBlock}><Hits /></div>
      </InstantSearch>
    </div>
  );
};

export default HomePage;

import Modal from '@components/modal/Modal';
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/reset-min.css';
import * as React from 'react';
import {
  Hits,
  InstantSearch,
  PoweredBy,
  SearchBox,
} from 'react-instantsearch-dom';

/**
 * SearchModal props.
 */
interface ISearchModalProps {}

/**
 * SearchModalProvider props.
 */
interface ISearchModalProviderProps {
  children: React.ReactNode;
}

/**
 * Modal state.
 */
type SearchModalContextValue =
  | [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  | [];

/**
 * Store modal state.
 */
const SearchModalContext = React.createContext<SearchModalContextValue>([]);

/**
 * Provide access to modal state.
 * @param props
 */
const SearchModalProvider: React.FC<ISearchModalProviderProps> = ({
  children,
}) => {
  const value = React.useState<boolean>(false);

  return (
    <SearchModalContext.Provider value={value}>
      {children}
    </SearchModalContext.Provider>
  );
};

/**
 * Provide access to modal state.
 */
const useSearchModal = (): SearchModalContextValue =>
  React.useContext(SearchModalContext);

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID || '',
  process.env.GATSBY_ALGOLIA_API_KEY || '',
);

/**
 * The search modal.
 */
const SearchModal: React.FC<ISearchModalProps> = () => {
  const [showModal, setShowModal] = useSearchModal();

  return (
    <Modal
      visible={showModal || false}
      onClose={event => {
        event.preventDefault();
        setShowModal && setShowModal(false);
      }}
    >
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME || ''}
      >
        <SearchBox />
        <PoweredBy />
        <Hits />
      </InstantSearch>
    </Modal>
  );
};

export { SearchModal as default, SearchModalProvider, useSearchModal };

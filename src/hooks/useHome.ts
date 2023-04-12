import { useState, useCallback, useEffect } from 'react';

import { UserCardInfo } from '../types/userCard';

import { api } from '../utils/api';

const useHome = () => {
  const [userCard, setUserCard] = useState<UserCardInfo[]>([]);

  const filteredUsersByFetchData = useCallback(() => {
    api.get('?results=50')
      .then(cardResponse => {
        setUserCard(cardResponse.data.results);
      });
  }, []);

  const filteredUsersByAlphabet = useCallback(() => {
    api.get('?results=50')
      .then(cardResponse => {
        const sortedUsers = cardResponse.data.sort(( firstName: UserCardInfo, secondName: UserCardInfo ) => {
          if (firstName.name.first < secondName.name.last) {
            return -1;
          } else {
            return 1;
          }
        });
        setUserCard(sortedUsers);
      });
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
    case 'filteredUsersByFetchData':
      filteredUsersByFetchData();
      break;
    case 'filteredUsersByAlphabet':
      filteredUsersByAlphabet();
      break;
    default:
      break;
    }
  };

  useEffect(() => {
    filteredUsersByFetchData();
  }, [filteredUsersByFetchData]);

  return {
    userCard,
    handleSelectChange,
  };
};

export default useHome;

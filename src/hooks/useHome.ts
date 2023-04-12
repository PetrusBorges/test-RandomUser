import { useState, useCallback, useEffect } from 'react';

import { UserCardInfo } from '../types/userCard';

import { api } from '../utils/api';

const useHome = () => {
  const [userCard, setUserCard] = useState<UserCardInfo[]>([]);
  const [isLoading, setIsloading] = useState(false);

  const filteredUsersByFetchData = useCallback(async () => {
    setIsloading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    api.get('?results=50')
      .then(cardResponse => {
        setUserCard(cardResponse.data.results);
      });

    setIsloading(false);
  }, []);

  const filteredUsersByAlphabet = useCallback(async () => {
    setIsloading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    api.get('?results=50')
      .then(cardResponse => {
        const sortedUsers = cardResponse.data.results.sort(( firstName: UserCardInfo, secondName: UserCardInfo ) => {
          if (firstName.name.first < secondName.name.first) {
            return -1;
          } else {
            return 1;
          }
        });
        setUserCard(sortedUsers);
      });

    setIsloading(false);
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
    isLoading,
    userCard,
    handleSelectChange,
  };
};

export default useHome;

import React from 'react';

import {
  Container,
  Content,
  ContainerInfo,
  PageHeaderContainer,
  Select
} from './styles';

interface PageHeaderProps {
  logoHeader: string;
  title: string;
  description: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  logoHeader,
  title,
  description,
  onChange,
}) => {
  return (
    <Container>
      <Content>
        <ContainerInfo>
          <PageHeaderContainer>
            <img src={logoHeader} alt={logoHeader} />
            <h1>{title}</h1>
          </PageHeaderContainer>

          <p>{description}</p>
        </ContainerInfo>

        <Select onChange={onChange}>
          <option value="filteredUsersByFetchData">Filtrar por Padrão</option>
          <option value="filteredUsersByAlphabet">Filtrar por ordem alfabética</option>
        </Select>
      </Content>
    </Container>
  );
};

export default PageHeader;

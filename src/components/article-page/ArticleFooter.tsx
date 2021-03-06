import { IKontentTaxonomyItem } from 'index';
import orderBy from 'lodash/orderBy';
import React, { FC } from 'react';
import { Container, Tag } from './ArticleFooter.styles';

interface IArticleFooterProps {
  tags?: IKontentTaxonomyItem[];
}

const ArticleFooter: FC<IArticleFooterProps> = ({ tags = [] }) => (
  <Container>
    {orderBy(tags, ['name'], ['asc']).map(tag => (
      <Tag key={tag.codename}>{tag.name}</Tag>
    ))}
  </Container>
);

export default ArticleFooter;

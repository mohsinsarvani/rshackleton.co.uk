import SiteWideBase from '@components/shared/SiteWide';
import styled from '@utils/styled';
import { adjustFontSizeTo, rhythm } from '@utils/typography';
import { Link } from 'gatsby';

export const Container = styled.header`
  position: fixed;
  top: 0;
  display: block;
  height: ${({ theme }) => rhythm(theme.dimensions.header)};
  width: 100%;
  background: ${({ theme }) => theme.colors.siteBackground};
  z-index: ${({ theme }) => theme.layers.header};
`;

export const SiteWide = styled(SiteWideBase)`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  ${{ ...adjustFontSizeTo(18) }};
  font-weight: normal;
`;

export const TitleLink = styled(Link)`
  color: ${({ theme }) => theme.colors.body};
  text-decoration: none;
`;

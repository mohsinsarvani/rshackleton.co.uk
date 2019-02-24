import styled from '@emotion/styled';
import { Prism as SyntaxHighlighterBase } from 'react-syntax-highlighter';

import mq from '@utils/mq';
import { rhythm } from '@utils/typography';

export const SyntaxHighlighter = styled(SyntaxHighlighterBase)`
  margin: 0 ${rhythm(-0.5)} ${rhythm(1)} !important;

  ${mq.sm} {
    margin: 0 ${rhythm(-1)} ${rhythm(1)} !important;
  }
`;

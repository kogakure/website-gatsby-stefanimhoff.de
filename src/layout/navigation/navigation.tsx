import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Clickable } from '../../components/clickable';
import { NavigationQueryData } from '../../typings/navigation-query-data';

import { Styled } from './navigation.styles';

export const Navigation: React.FC = () => {
  const data: NavigationQueryData = useStaticQuery(graphql`
    query NavigationQuery {
      navigationYaml {
        navigation {
          text
          url
        }
      }
    }
  `);

  const { navigation } = data.navigationYaml;

  return (
    <Styled.Navigation className="nav">
      <Styled.BackLink>
        <Styled.ArrowLink to="/" activeStyle={{ visibility: 'hidden' }}>
          <Clickable text="Back to Homepage">
            <Styled.Arrow />
          </Clickable>
        </Styled.ArrowLink>
      </Styled.BackLink>
      <Styled.List>
        {navigation.map((item) => (
          <Styled.Item key={item.text}>
            <Styled.ItemLink
              to={item.url}
              activeStyle={{
                textDecoration: 'underline',
                textDecorationThickness: '0.1em',
                textUnderlineOffset: '0.1em',
                textDecorationColor: 'var(--colorLink)',
              }}
            >
              {item.text}
            </Styled.ItemLink>
          </Styled.Item>
        ))}
      </Styled.List>
    </Styled.Navigation>
  );
};

import React from 'react';

import { useCvQuery } from '../hooks';
import { ContentGrid, Layout, SEO } from '../layout';
import {
  Awards,
  Divider,
  Education,
  Experience,
  Interests,
  Languages,
  MainColumn,
  Personal,
  SideColumn,
  Skills,
  Summary,
  Title,
} from '../screens/cv';

const CVPage = () => {
  const {
    allCvYaml: {
      nodes: [
        {
          personal,
          summary,
          experience,
          education,
          skills,
          languages,
          awards,
          interests,
        },
      ],
    },
  } = useCvQuery();

  return (
    <Layout size="regular" homeTo="/about/">
      <SEO title="CV" robots="noindex,follow" />
      <ContentGrid rowGap size="regular">
        <Title />
        <Summary data={summary} />
        <Personal data={personal} />
        <Divider />
        <MainColumn>
          <Experience data={experience} />
          <Education data={education} />
        </MainColumn>
        <SideColumn>
          <Skills data={skills} />
          <Languages data={languages} />
          <Awards data={awards} />
        </SideColumn>
        <Divider />
        <Interests data={interests} />
      </ContentGrid>
    </Layout>
  );
};

export default CVPage;

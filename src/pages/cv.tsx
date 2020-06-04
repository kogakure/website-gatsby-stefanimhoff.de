import React from 'react';

import { useCvQuery } from '../hooks';
import { Layout } from '../layout';

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
          projects,
        },
      ],
    },
  } = useCvQuery();

  return (
    <Layout>
      <div>
        <h1>{personal.name}</h1>
        <small>{personal.tagline}</small>
      </div>
      <div>
        <h2>{summary.headline}</h2>
        <p>{summary.text}</p>
      </div>
      <div>
        <h2>{experience.headline}</h2>
        {experience.items.map(
          ({ company, duration, location, tasks, title, url }) => (
            <div>
              <h3>{company}</h3>
              {url}
              <br />
              {location}
              <br />
              {title}
              <br />
              {duration}
              <ul>
                {tasks.map((task) => (
                  <li>{task}</li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
      <div>
        <h2>{education.headline}</h2>
        {education.items.map(({ degree, duration, location, school, url }) => (
          <div>
            <h3>{school}</h3>
            {url}
            <br />
            {location}
            <br />
            {degree}
            <br />
            {duration}
          </div>
        ))}
      </div>
      <div>
        <h2>{skills.headline}</h2>
        {skills.items.map(({ headline, tags }) => (
          <div>
            <h4>{headline}</h4>
            <ul>
              {tags.map((tag) => (
                <li>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <h2>{languages.headline}</h2>
        {languages.items.map(({ language, level }) => (
          <div>
            <h4>{language}</h4>
            <p>{level}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>{awards.headline}</h2>
        <ul>
          {awards.items.map((award) => (
            <li>{award}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>{interests.headline}</h2>
        <ul>
          {interests.items.map((interest) => (
            <li>{interest}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>{projects.headline}</h2>
        <ul>
          {projects.items.map(({ description, title, notes, url }) => (
            <div>
              <h3>{title}</h3>
              <p>
                {description}
                <br />
                {url}
              </p>
              <ul>
                {notes.map((note) => (
                  <li>{note}</li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default CVPage;

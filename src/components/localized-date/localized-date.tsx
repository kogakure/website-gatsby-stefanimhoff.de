import * as React from 'react';
import moment from 'moment';

import { LocalizedDateContext, LocalizedDateLanguage } from '../../contexts';

import { Styled } from './localized-date.styles';

export type LocalizedDateProps = {
  date: string;
};

export const LocalizedDate = ({ date, ...props }: LocalizedDateProps) => {
  const en = moment(date).format('MMMM Do, YYYY');
  const de = moment(date).format('DD.MM.YYYY');
  const [day, month, year] = de.split('.');
  const { localizedDateLanguage, setLocalizedDateLanguage } = React.useContext(
    LocalizedDateContext
  );
  const currentLanguage = localizedDateLanguage;
  let string;

  const toggleLanguage = () => {
    const possibleLanguages: LocalizedDateLanguage[] = ['en', 'de', 'ja'];
    const index = possibleLanguages.indexOf(currentLanguage);

    if (index >= 0 && index < possibleLanguages.length - 1) {
      const nextLanguage = possibleLanguages[index + 1];
      setLocalizedDateLanguage(nextLanguage);
    } else {
      setLocalizedDateLanguage('en');
    }
  };

  if (currentLanguage === 'de') {
    string = de;
  } else if (currentLanguage === 'ja') {
    string = (
      <>
        {year}
        <Styled.Kanji>年</Styled.Kanji>
        {month}
        <Styled.Kanji>月</Styled.Kanji>
        {day}
        <Styled.Kanji>日</Styled.Kanji>
      </>
    );
  } else {
    string = en;
  }

  return (
    <Styled.LocalizedDateContainer
      aria-label="Toggle date format"
      dateTime={date}
      onClick={toggleLanguage}
      onKeyUp={(e) => e.key === 'Enter' && toggleLanguage()}
      role="button"
      tabIndex={0}
      {...props}
    >
      {string}
    </Styled.LocalizedDateContainer>
  );
};

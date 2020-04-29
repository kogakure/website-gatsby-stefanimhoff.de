import * as React from 'react';
import moment from 'moment';

import { LocalizedDateContext } from '../../contexts';

import { Styled } from './localized-date.styles';

type LocalizedDateProps = {
  date: string;
};

const LocalizedDate: React.FC<LocalizedDateProps> = ({ date, ...props }) => {
  const en = moment(date).format('MMMM Do, YYYY');
  const de = moment(date).format('DD.MM.YYYY');
  const [day, month, year] = de.split('.');
  const { localizedDate, setLocalizedDate } = React.useContext(
    LocalizedDateContext
  );
  const currentLanguage = localizedDate;
  let string;

  const toggleLanguage = () => {
    const possibleLanguages = ['en', 'de', 'ja'];
    const index = possibleLanguages.indexOf(currentLanguage);

    if (index >= 0 && index < possibleLanguages.length - 1) {
      const nextLanguage = possibleLanguages[index + 1];
      setLocalizedDate(nextLanguage);
    } else {
      setLocalizedDate('en');
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
      dateTime={date}
      onClick={toggleLanguage}
      {...props}
    >
      {string}
    </Styled.LocalizedDateContainer>
  );
};

export { LocalizedDate };

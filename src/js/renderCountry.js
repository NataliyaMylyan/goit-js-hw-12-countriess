import countryCard from '../templates/countryCard.hbs';
import countryList from '../templates/countryList.hbs';

import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import { defaults } from '@pnotify/core';

import '@pnotify/core/dist/Angeler.css';

defaults.styling = 'angeler';
defaults.icons = 'angeler';

const countryListRef = document.querySelector('.country-list');

function renderCountry(countriesNumber) {
  let markup;
  if (countriesNumber.length >= 10) {
    defaultModules.set(PNotifyMobile, {});
    alert({
      text: 'Too many matches found. Please enter a more specific query!',
    });
    return;
  }

  if (countriesNumber.length === 1) {
    markup = countryCard(countriesNumber);
  } else if (countriesNumber.length >= 2 && countriesNumber.length <= 10) {
    console.log(countriesNumber.length);
    markup = countryList(countriesNumber);
  } else {
    markup = '';
  }

  return countryListRef.insertAdjacentHTML('afterbegin', markup);
}

export default renderCountry;

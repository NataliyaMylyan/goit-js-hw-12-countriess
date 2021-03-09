import '../src/styles.css';
import fetchCountries from '../src/js/fetchCountries.js';
import renderCountry from '../src/js/renderCountry.js';
import debounce from 'lodash.debounce';

const inputRef = document.querySelector('.country-input');
const countryListRef = document.querySelector('.country-list');

inputRef.addEventListener('input', debounce(countrySearch, 500));

function countrySearch() {
  countryListRef.innerHTML = '';
  let searchQuery = inputRef.value;
  fetchCountries(searchQuery)
    .then(renderCountry)
    .catch(error => console.log(error));
}

import { DateTime } from '../luxon.js';

const showTime = document.querySelector('.show-time');
const dayTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

const showLocalTime = () => {
  showTime.textContent = `${dayTime}`;
};

export default showLocalTime;
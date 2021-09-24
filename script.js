const refs = {
  timeItems: document.querySelectorAll('.value'),
  daysValue: document.querySelector('span[data-value="days"]'),
  hoursValue: document.querySelector('span[data-value="hours"]'),
  minsValue: document.querySelector('span[data-value="mins"]'),
  secsValue: document.querySelector('span[data-value="secs"]'),
};

const timerProto = new CountdownTimer({

    
});

const timer = {
  start() {
    const targetDate = Date.parse('Oct 24, 2021 ');

    const timerID = setInterval(() => {
      const nowTime = Date.now();
      const diffTime = targetDate - nowTime;
      console.log(' time');

      const timeResult = getTime(diffTime);
      refs.daysValue.textContent = `${timeResult.days} `;
      refs.hoursValue.textContent = `${timeResult.hours} `;
      refs.minsValue.textContent = `${timeResult.mins} `;
      refs.secsValue.textContent = `${timeResult.secs} `;

      if (diffTime < 0) {
        clearInterval(timerID);
        refs.timeItems.forEach(item => (item.textContent = 0));
      }
    }, 1000);
  },
};
timer.start();

function getTime(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

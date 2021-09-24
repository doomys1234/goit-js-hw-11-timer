class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerID = null;
  }

  getRefs() {
    const timeItems = document.querySelectorAll('.value');
    const daysValue = document.querySelector('span[data-value="days"]');
    const hoursValue = document.querySelector('span[data-value="hours"]');
    const minsValue = document.querySelector('span[data-value="mins"]');
    const secsValue = document.querySelector('span[data-value="secs"]');
    return { timeItems, daysValue, hoursValue, minsValue, secsValue };
  }

  getTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  startInterval({ timeItems, daysValue, hoursValue, minsValue, secsValue }) {
    this.timerID = setInterval(() => {
      const diffTime = this.targetDate - Date.now();
      const timeResult = this.getTime(diffTime);
      daysValue.textContent = `${timeResult.days} `;
      hoursValue.textContent = `${timeResult.hours} `;
      minsValue.textContent = `${timeResult.mins} `;
      secsValue.textContent = `${timeResult.secs} `;

      if (diffTime < 0) {
        clearInterval(this.timerID);
        timeItems.forEach(item => (item.textContent = 0));
      }
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 15, 2021'),
});
timer.startInterval(timer.getRefs());

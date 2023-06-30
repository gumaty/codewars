function humanReadable (seconds) {
    let rest = seconds;
    let time = '';
    if (rest / 3600 > 0) {
      const hours = Math.floor(rest/3600);
      rest -= hours * 3600;
      hours >= 10 ? time += hours : time += `0${hours}`;
    } else {
        time += "00"
    }

    if (rest / 60 > 0) {
        const minutes = Math.floor(rest/60);
        rest -= minutes * 60;
        minutes >= 10 ? time += `:${minutes}` : time += `:0${minutes}`;
    } else {
        time += ":00"
    }

    rest >= 10 ? time += `:${rest}` : rest === 0 ? time += ":00" : time += `:0${rest}`;

    return time;
}

console.log(humanReadable(0)); // '00:00:00', 'humanReadable(0)');
console.log(humanReadable(59)); // '00:00:59', 'humanReadable(59)');
console.log(humanReadable(60)); // '00:01:00', 'humanReadable(60)');
console.log(humanReadable(90)); // '00:01:30', 'humanReadable(90)');
console.log(humanReadable(3599)); // '00:59:59', 'humanReadable(3599)');
console.log(humanReadable(3600)); // '01:00:00', 'humanReadable(3600)');
console.log(humanReadable(45296)); // '12:34:56', 'humanReadable(45296)');
console.log(humanReadable(86399)); // '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(86400)); // '24:00:00', 'humanReadable(86400)');
console.log(humanReadable(359999)); // '99:59:59', 'humanReadable(359999)');
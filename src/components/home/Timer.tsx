import React from 'react';

function timeDiffString(from: Date, to: Date): string {
  if (from >= to) {
    return '0초';
  }
  const secPerMin = 60;
  const secPerHour = 60 * secPerMin;
  const secPerDay = 24 * secPerHour;

  let timeDiffSec = Math.floor((to.getTime() - from.getTime()) / 1000);
  const dayDiff = Math.floor(timeDiffSec / secPerDay);
  timeDiffSec -= dayDiff * secPerDay;
  const hourDiff = Math.floor(timeDiffSec / secPerHour);
  timeDiffSec -= hourDiff * secPerHour;
  const minDiff = Math.floor(timeDiffSec / secPerMin);
  timeDiffSec -= minDiff * secPerMin;
  if (dayDiff > 0) {
    return `${dayDiff}일 ${hourDiff}시간 ${minDiff}분 ${timeDiffSec}초`;
  }
  if (hourDiff > 0) {
    return `${hourDiff}시간 ${minDiff}분 ${timeDiffSec}초`;
  }
  if (minDiff > 0) {
    return `${minDiff}분 ${timeDiffSec}초`;
  }
  return `${timeDiffSec}초`;
}

interface TimerProps {
  targetTime: Date,
}

const Timer: React.FC<TimerProps> = ({
  targetTime,
}) => {
  const [currTime, setCurrTime] = React.useState(new Date());
  React.useEffect(() => {
    const timerID = setInterval(() => setCurrTime(new Date()), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <span>{timeDiffString(currTime, targetTime)}</span>
  );
};

export default Timer;

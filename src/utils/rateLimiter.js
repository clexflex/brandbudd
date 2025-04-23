import limiter from 'next-rate-limit';

const checkLimit = limiter({
  interval: 60 * 100000, // 1 minute interval
  uniqueTokenPerInterval: 500, // Max users per interval
});

export default checkLimit;
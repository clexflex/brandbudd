'use client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LottieAnimation({ src, alt }) {
  return (
    <DotLottieReact
      src={src}
      loop
      autoplay
      style={{ width: '100%', height: '100%' }}
    />
  );
}
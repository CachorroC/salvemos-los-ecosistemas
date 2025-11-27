'use client';
import { sectionColumn } from '#@/styles/layout.module.css';
import { Loader } from '../main-loader';
import styles from './styles.module.css';
import { useState, useRef, Suspense } from 'react';

export default function VideoPlayer(
  {
    sourceUrl
  }: { sourceUrl: string }
) {
  const [
    isPlaying,
    setIsPlaying
  ] = useState(
    false
  );

  const ref = useRef<HTMLVideoElement | null>(
    null
  );

  function handleClick() {
    const nextIsPlaying = !isPlaying;

    setIsPlaying(
      nextIsPlaying
    );

    if ( ref.current ) {
      if ( nextIsPlaying ) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }

  return (
    <div
      style={{
        width : '100%',
        height: '100%'
      }}
      className={sectionColumn}
    >
      <Suspense fallback={<Loader />}>
        <video
          ref={ref}
          loop
          //poster={'loading.gif'}
          onPlay={() => {
            return setIsPlaying(
              true
            );
          }}
          onPause={() => {
            return setIsPlaying(
              false
            );
          }}
        >
          <source
            src={sourceUrl}
            type="video/mp4"
          />
        </video>
      </Suspense>
      <button
        onClick={handleClick}
        className={styles.button}
      >
        {isPlaying
          ? 'Pausar'
          : 'Reproducir'}
        <span className={'material-symbols-outlined'}>
          {isPlaying
            ? 'pause_circle'
            : 'play_circle'}
        </span>
      </button>
    </div>
  );
}

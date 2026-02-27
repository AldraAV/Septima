import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface OrganicAnimationConfig {
  /** The type of physiological animation to play */
  type: 'heartbeat' | 'breathe' | 'float' | 'liquid-appear';
  /** Delay before animation starts (ms) */
  delay?: number;
  /** Custom duration (ms) if needed */
  duration?: number;
  /** Whether the animation should loop infinitely */
  loop?: boolean;
}

/**
 * Custom hook to inject sophisticated, organic animations using Anime.js
 * Adheres to Liquid Digital/Organic UI concepts of Séptima Biomédica.
 */
export function useOrganicAnimation({ type, delay = 0, duration, loop = false }: OrganicAnimationConfig) {
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // Reset any previous animation cleanup
    if (animationRef.current) {
      animationRef.current.pause();
    }

    let config: anime.AnimeAnimParams = {
      targets: elementRef.current,
    };

    switch (type) {
      case 'heartbeat':
        config = {
          ...config,
          scale: [1, 1.05, 1, 1.02, 1],
          duration: duration || 800,
          easing: 'easeOutElastic(1, .8)',
          loop: loop,
          delay: delay,
        };
        break;
        
      case 'breathe':
        config = {
          ...config,
          scale: [1, 1.02, 1],
          opacity: [0.8, 1, 0.8],
          duration: duration || 4000,
          easing: 'easeInOutSine',
          loop: true, // Breathe generally always loops
          delay: delay,
        };
        break;
        
      case 'float':
        config = {
          ...config,
          translateY: [0, -10, 0],
          duration: duration || 6000,
          easing: 'easeInOutSine',
          loop: true,
          delay: delay,
        };
        break;

      case 'liquid-appear':
        config = {
          ...config,
          opacity: [0, 1],
          translateY: [20, 0],
          scale: [0.95, 1],
          duration: duration || 1200,
          easing: 'easeOutElastic(1, .6)',
          delay: delay,
        };
        break;
    }

    animationRef.current = anime(config);

    return () => {
      // Cleanup running animations when component unmounts
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [type, delay, duration, loop]);

  return elementRef;
}

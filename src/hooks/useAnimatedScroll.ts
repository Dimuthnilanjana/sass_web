import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimationOptions {
  trigger: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  animation: gsap.core.Tween | gsap.core.Timeline;
}

export function useAnimatedScroll(options: AnimationOptions) {
  useEffect(() => {
    const animation = options.animation;
    
    const scrollTrigger = ScrollTrigger.create({
      trigger: options.trigger,
      start: options.start || 'top bottom',
      end: options.end || 'bottom top',
      scrub: options.scrub === undefined ? true : options.scrub,
      markers: options.markers || false,
      animation: animation,
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [options]);
}

export default useAnimatedScroll;
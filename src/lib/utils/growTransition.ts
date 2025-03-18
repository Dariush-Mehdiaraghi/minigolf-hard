import { cubicInOut } from "svelte/easing";

export const grow = (
    node: HTMLElement,
    params?: { delay?: number; duration?: number; easing?: (t: number) => number }
) => {
    const initialHeight = node.clientHeight;
    return {
        delay: params?.delay || 0,
        duration: params?.duration || 300,
        easing: params?.easing || cubicInOut,
        css: (t: number, u: number) =>
            `max-height: ${t * initialHeight}px; filter: blur(${u * 7}px); opacity: ${t};`
    };
};
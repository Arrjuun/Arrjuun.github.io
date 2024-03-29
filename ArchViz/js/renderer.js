import { WebGLRenderer } from './three.module.js';

function createRenderer() {
    const renderer = new WebGLRenderer({ antialias: true });

    // turn on the physically correct lighting model
    renderer.physicallyCorrectLights = true;

    return renderer;
}

export { createRenderer };
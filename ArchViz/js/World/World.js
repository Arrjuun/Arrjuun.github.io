import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createClock } from './Components/clock.js'

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

import { loadHouse } from './Components/Objects/house.js'
// import {TrackballControls} from '../TrackballControls.js'

import { FirstPersonControls } from '../FirstPersonControls.js'

let camera
let scene
let renderer
let cameraController
let clock

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        clock = createClock()
        container.append(renderer.domElement);

        // const cube = createCube();
        // cube.position.set(-2,0,-3)
        const { ambientLight, mainLight } = createLights();
        scene.add(ambientLight, mainLight);
        // scene.add(cube)

        cameraController = new FirstPersonControls(camera);
        cameraController.lookSpeed = 0.05;
        cameraController.movementSpeed = 0
        cameraController.lookVertical = false
        cameraController.enabled = false
        let mouseInput= false
        // cameraController = new TrackballControls(camera, renderer.domElement);

        // cameraController.rotateSpeed = 1.0;
        // cameraController.zoomSpeed = 1.2;
        // cameraController.panSpeed = 0.8;

        // cameraController.keys = ['KeyA', 'KeyS', 'KeyD'];

        const resizer = new Resizer(container, camera, renderer);
        resizer.onResize = () => {
            render();
        };

        document.addEventListener('mousedown', ()=>{
            cameraController.enabled=true
            mouseInput = true
        }, false);
        document.addEventListener('mousemove', ()=>{cameraController.enabled= (cameraController.enabled && mouseInput)}, false);
        document.addEventListener('mouseup', ()=>{
            cameraController.enabled=false
            mouseInput = false
        }, false);


    }

    async init() {
        const houseRoot = await loadHouse();
        scene.add(...houseRoot.children);
    }

    render() {
        // draw a single frame
        // var delta = clock.getDelta();
        // fpsCameraController.update(delta);
        // requestAnimationFrame(this.render);
        // renderer.render(scene, camera);
        render()
    }
}

function render() {
    // draw a single frame
    var delta = clock.getDelta();
    cameraController.update(delta);
    // cameraController.update()
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

export { World }
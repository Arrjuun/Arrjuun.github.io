import { GLTFLoader } from './GLTFLoader.js';
import { setupHouse } from './setupHouse.js'

async function loadHouse() {
    const loader = new GLTFLoader();
    const houseData = await loader.loadAsync('../assets/house.glb'); //('https://drive.google.com/file/d/1imUxPY2mnPviXK3cL91duI0xxX0tNg0n/view?usp=sharing');

    const house = setupHouse(houseData)
    return house
}

export { loadHouse };
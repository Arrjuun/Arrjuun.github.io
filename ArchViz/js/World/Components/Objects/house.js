import { GLTFLoader } from '../../../GLTFLoader.js';
import { setupHouse } from './setupHouse.js'

async function loadHouse() {
    const loader = new GLTFLoader();
    const houseData = await loader.loadAsync('../../../../assets/models/uploads_files_2879580_realistic+interior.glb');

    const house = setupHouse(houseData)
    console.log("After House setup in house ",house)
    return house
}

export { loadHouse };
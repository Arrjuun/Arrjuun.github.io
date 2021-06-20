import { BoxBufferGeometry, Mesh, MeshStandardMaterial, TextureLoader } from './three.module.js';

function createMaterial() {
    // create a texture loader.
    // const textureLoader = new TextureLoader();

    // // load a texture
    // const texture = textureLoader.load(
    //     '../../../assets/textures/uv_grid_opengl.jpg',
    // );

    // create a "standard" material
    const material = new MeshStandardMaterial();

    return material;
}

function createCube() {
    // create a geometry
    const geometry = new BoxBufferGeometry(1, 2, 1);

    // create a default (white) Basic material
    const material = createMaterial()

    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material);

    return cube;
}

export { createCube };
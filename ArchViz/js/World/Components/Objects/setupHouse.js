function setupHouse(data) {
    const model = data.scene;
    // console.log('Model : ',model)
    data.scene.traverse(function (child) {
        console.log(child);
    });

    return model;
}

export { setupHouse };
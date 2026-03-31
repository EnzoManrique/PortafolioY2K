import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { interactiveObjects } from './scene3d.js';

export function loadModels(scene) {
    const loader = new GLTFLoader();

    // 1. Cargar Protagonista: Pez Payaso Animado
    loader.load(
        'assets/models/clown_fish.glb',
        (gltf) => {
            const fish = gltf.scene;
            // ESCALA MASIVA (x10 original) y ubicado frente a cámara a la derecha
            fish.scale.set(10, 10, 10);
            fish.position.set(15, 6, 12); 
            
            scene.add(fish);
            interactiveObjects.protagonist = fish; 

            if (gltf.animations && gltf.animations.length > 0) {
                const mixer = new THREE.AnimationMixer(fish);
                mixer.clipAction(gltf.animations[0]).play();
                interactiveObjects.mixers.push(mixer);
            }
        }
    );

    // 2. Arquitectura de "Ciudad Hundida" - Cercanos para ser visibles, rodeando panel central
    loader.load('assets/models/medieval_house.glb', (gltf) => {
        const house = gltf.scene;
        // Escala x10 a la anterior
        house.scale.set(1.5, 1.5, 1.5); 
        // Acercada (Z=-5 en lugar de -20)
        house.position.set(22, -15, -5);    
        house.rotation.y = -Math.PI / 4;
        scene.add(house);
    });

    loader.load('assets/models/windmill_mediaval.glb', (gltf) => {
        const mill = gltf.scene;
        // Escala x10
        mill.scale.set(1.5, 1.5, 1.5);
        // Acercado al panel izquierdo
        mill.position.set(-25, -15, -5);     
        mill.rotation.y = Math.PI / 6;
        scene.add(mill);
        if (gltf.animations && gltf.animations.length > 0) {
            const mixer = new THREE.AnimationMixer(mill);
            mixer.clipAction(gltf.animations[0]).play();
            interactiveObjects.mixers.push(mixer);
        }
    });

    // 3. Follaje (Algas/Pasto) Masivo alrededor
    loader.load('assets/models/grass.glb', (gltf) => {
        const grass = gltf.scene;
        for(let i=0; i<10; i++) {
            const clone = grass.clone();
            clone.scale.set(4, 4, 4); 
            clone.position.set(
                (Math.random() - 0.5) * 50,
                -15, 
                (Math.random() * 20) - 10 
            );
            scene.add(clone);
        }
    });

    loader.load('assets/models/anemone.glb', (gltf) => {
        const anemone = gltf.scene;
        anemone.scale.set(3, 3, 3);
        anemone.position.set(-15, -15, 10); // Bien cerca en el marco inferior izquierdo
        scene.add(anemone);
        if (gltf.animations && gltf.animations.length > 0) {
            const mixer = new THREE.AnimationMixer(anemone);
            mixer.clipAction(gltf.animations[0]).play();
            interactiveObjects.mixers.push(mixer);
        }
    });

    // 4. Camino rocoso pasando por debajo de la ventana UI
    loader.load('assets/models/way_path_blocks.glb', (gltf) => {
        const pathBlock = gltf.scene;
        for(let j=0; j<4; j++) {
            const path = pathBlock.clone();
            // Escala grande y notoria
            path.scale.set(0.2, 0.2, 0.2);
            path.position.set(Math.sin(j)*4, -15, 15 - (j * 12)); 
            scene.add(path);
        }
    });

    // 5. Peces Koi patrullando
    loader.load('assets/models/koi_fish.glb', (gltf) => {
        const fishModel = gltf.scene;
        for(let i=0; i<4; i++) {
            const clone = fishModel.clone();
            // Tamaño gigante para que destaquen
            clone.scale.set(1.5, 1.5, 1.5);
            clone.position.set(
                (Math.random() - 0.5) * 40,
                -2 + (Math.random() * 10),
                (Math.random() * 10) - 5
            );
            clone.rotation.y = -Math.PI / 2 + (Math.random() * 0.5);
            scene.add(clone);
            if (gltf.animations && gltf.animations.length > 0) {
                const mixer = new THREE.AnimationMixer(clone);
                mixer.clipAction(gltf.animations[0]).play();
                interactiveObjects.mixers.push(mixer);
            }
        }
    });
}

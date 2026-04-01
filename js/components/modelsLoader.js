import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { interactiveObjects } from './scene3d.js';

export function loadModels(scene) {
    const loader = new GLTFLoader();

    // Material estético compartido para todas las obras arquitectónicas / follaje de fondo
    const crystalMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x00ccff,
        metalness: 0.1,
        roughness: 0.1,
        transmission: 0.8, // Efecto cristal refracción
        opacity: 1,
        transparent: true,
        emissive: 0x0055aa,
        emissiveIntensity: 0.5
    });

    // 1. Cargar Protagonista: Pez Payaso Animado Principal
    loader.load('assets/models/clown_fish.glb', (gltf) => {
        const fish = gltf.scene;
        // ESCALA MASIVA (x10 original) y ubicado frente a cámara (Z=40 para estar cerca de cámara Z=50)
        fish.scale.set(12, 12, 12);
        // Movido hacia la izquierda (X=2 en vez de 12) para entrar en el nuevo plano
        fish.position.set(2, 4, 25);

        scene.add(fish);
        interactiveObjects.protagonist = fish;

        if (gltf.animations && gltf.animations.length > 0) {
            const mixer = new THREE.AnimationMixer(fish);
            mixer.clipAction(gltf.animations[0]).play();
            interactiveObjects.mixers.push(mixer);
        }
    });

    // 1.5. Más Peces Payasos (Banda de fondo)
    // Trasladados a primer plano Z y movidos a la izquierda
    const clownPositions = [{ x: -25, y: 10, z: 27 }, { x: -5, y: 2, z: 24 }, { x: -18, y: 8, z: 30 }];
    clownPositions.forEach(pos => {
        loader.load('assets/models/clown_fish.glb', (gltf) => {
            const extraFish = gltf.scene;
            extraFish.scale.set(8, 8, 8); // Grandes para que se vean nítidos
            extraFish.position.set(pos.x, pos.y, pos.z);
            scene.add(extraFish);

            // Inyectar en el orquestador visual para interactividad
            interactiveObjects.extraFishes.push({ mesh: extraFish, basePos: { ...pos }, isKoi: false });

            if (gltf.animations && gltf.animations.length > 0) {
                const mixer = new THREE.AnimationMixer(extraFish);
                mixer.clipAction(gltf.animations[0]).play();
                interactiveObjects.mixers.push(mixer);
            }
        });
    });

    // 2. Arquitectura de "Ciudad Hundida" - Cercanos para ser visibles, rodeando panel central
    loader.load('assets/models/medieval_house.glb', (gltf) => {
        const house = gltf.scene;
        // Escala x10 a la anterior
        house.scale.set(1.5, 1.5, 1.5);
        // Acercada (Z=-5 en lugar de -20)
        house.position.set(22, -15, -5);
        house.rotation.y = -Math.PI / 4;

        // La casa no tiene texturas de bajada, así que le aplicaremos un material Y2K de Cristal Holográfico 
        house.traverse((child) => {
            if (child.isMesh) {
                child.material = crystalMaterial;
            }
        });

        scene.add(house);
    });

    loader.load('assets/models/windmill_mediaval.glb', (gltf) => {
        const mill = gltf.scene;
        // Agrandado y movido sutilmente (escala solicitada mayor)
        mill.scale.set(6, 6, 6);
        // Movido MUCHO más a la izquierda (X=-35) y un poquitito más atrás (Z=-30)
        mill.position.set(-35, -25, -45);
        // Girar para que mire hacia adelante
        mill.rotation.y = -Math.PI / 2;

        // Cubrir con shader cristalino
        mill.traverse((child) => {
            if (child.isMesh) {
                child.material = crystalMaterial;
            }
        });

        scene.add(mill);
        if (gltf.animations && gltf.animations.length > 0) {
            const mixer = new THREE.AnimationMixer(mill);
            mixer.clipAction(gltf.animations[0]).play();
            interactiveObjects.mixers.push(mixer);
        }
    });

    // 3. Follaje (Algas/Pasto) Masivo alrededor
    /* COMENTADO POR SOLICITUD DEL USUARIO
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
    */

    loader.load('assets/models/anemone.glb', (gltf) => {
        const anemone = gltf.scene;
        // Achicada un poco por petición
        anemone.scale.set(2.5, 2.5, 2.5);
        // Movida un poco más a la izquierda (X=-12) y un poco hacia atrás (Z=5 en lugar de 10)
        anemone.position.set(-12, -15, 5);

        // Cubrir con shader cristalino
        anemone.traverse((child) => {
            if (child.isMesh) {
                child.material = crystalMaterial;
            }
        });

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
        for (let j = 0; j < 4; j++) {
            const path = pathBlock.clone();
            // Escala grande y notoria
            path.scale.set(0.2, 0.2, 0.2);
            path.position.set(Math.sin(j) * 4, -15, 15 - (j * 12));
            scene.add(path);
        }
    });

    // 5. Peces Koi patrullando muy de cerca
    // Corrijo coord X para ubicarlos delante del nuevo ángulo de cámara
    const koiPositions = [{ x: 5, y: 5, z: 25 }, { x: -28, y: -2, z: 32 }, { x: -15, y: 15, z: 20 }, { x: -18, y: -8, z: 30 }];
    koiPositions.forEach(pos => {
        loader.load('assets/models/koi_fish.glb', (gltf) => {
            const koi = gltf.scene;
            // Escala enorme porque están adelantados
            koi.scale.set(8, 8, 8);
            koi.position.set(pos.x, pos.y, pos.z);

            scene.add(koi);

            // Inyectar en interactividad masiva
            interactiveObjects.extraFishes.push({ mesh: koi, basePos: { ...pos }, isKoi: true });

            if (gltf.animations && gltf.animations.length > 0) {
                const mixer = new THREE.AnimationMixer(koi);
                mixer.clipAction(gltf.animations[0]).play();
                interactiveObjects.mixers.push(mixer);
            }
        });
    });
}

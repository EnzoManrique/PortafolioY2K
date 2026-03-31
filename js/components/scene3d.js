import * as THREE from 'three';
import { loadModels } from './modelsLoader.js';

export let scene, camera, renderer, clock;

export const interactiveObjects = {
    protagonist: null,
    mixers: [],
    bubbles: [], 
    mouse: new THREE.Vector2(),
    targetRotation: new THREE.Vector2(),
    windowHalfX: window.innerWidth / 2,
    windowHalfY: window.innerHeight / 2
};

export function init3DScene() {
    const container = document.getElementById('webgl-container');
    if (!container) return;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace; 
    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    
    // Niebla de profundidad (Efecto océano azul infinito claro)
    scene.fog = new THREE.FogExp2(0x006bb3, 0.005);

    // Cámara: Posición neutral buscando enfocar los bordes
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 30); 
    camera.lookAt(0, 0, 0);

    clock = new THREE.Clock();

    // Luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); 
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3.0);
    directionalLight.position.set(20, 50, 20); 
    scene.add(directionalLight);

    const blueBacklight = new THREE.DirectionalLight(0x00ccff, 1.5);
    blueBacklight.position.set(-20, -10, -20);
    scene.add(blueBacklight);

    // Burbujas 3D
    const bubbleGeo = new THREE.SphereGeometry(1, 16, 16);
    const bubbleMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 0.9,     
        opacity: 1,            
        roughness: 0.1,        
        ior: 1.1,              
        emissive: 0x33aaff,    
        emissiveIntensity: 0.1
    });

    for(let i = 0; i < 40; i++) {
        const bubble = new THREE.Mesh(bubbleGeo, bubbleMat);
        bubble.position.set(
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 30 - 10
        );
        const scale = Math.random() * 0.4 + 0.1;
        bubble.scale.set(scale, scale, scale);
        
        bubble.userData = {
            wobbleSpeed: Math.random() * 0.03 + 0.01,
            wobblePhase: Math.random() * Math.PI * 2,
            speedY: Math.random() * 0.05 + 0.02
        };

        scene.add(bubble);
        interactiveObjects.bubbles.push(bubble);
    }

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);

    loadModels(scene);

    animate();
}

function onWindowResize() {
    interactiveObjects.windowHalfX = window.innerWidth / 2;
    interactiveObjects.windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
    interactiveObjects.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    interactiveObjects.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    interactiveObjects.targetRotation.x = interactiveObjects.mouse.x * 0.5;
    interactiveObjects.targetRotation.y = interactiveObjects.mouse.y * 0.5;
}

function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    interactiveObjects.mixers.forEach(mixer => mixer.update(delta));

    const time = clock.getElapsedTime();
    interactiveObjects.bubbles.forEach(bubble => {
        bubble.position.y += bubble.userData.speedY;
        bubble.position.x += Math.sin(time * bubble.userData.wobbleSpeed * 100 + bubble.userData.wobblePhase) * 0.02;

        if (bubble.position.y > 20) {
            bubble.position.y = -20;
        }
    });

    if (interactiveObjects.protagonist) {
        interactiveObjects.protagonist.rotation.y += ( interactiveObjects.targetRotation.x * 2 - interactiveObjects.protagonist.rotation.y ) * 0.05;
        interactiveObjects.protagonist.rotation.x += ( -interactiveObjects.targetRotation.y * 1 - interactiveObjects.protagonist.rotation.x ) * 0.05;
        interactiveObjects.protagonist.position.y = (Math.sin(time * 2) * 1) + 5; 
    }

    camera.position.x += (interactiveObjects.mouse.x * 5 - camera.position.x) * 0.02;
    camera.position.y += (interactiveObjects.mouse.y * 2 - camera.position.y) * 0.02;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

init3DScene();

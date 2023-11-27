import * as THREE from 'three';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { Font } from 'three/examples/jsm/loaders/FontLoader.js';
import init from './setup';

const scene = init();
const loader = new TTFLoader();

// Loading the TTF font file from Fontsource CDN. Can also be the link to font file from Google Fonts
loader.load('https://api.fontsource.org/v1/fonts/lora/latin-600-italic.ttf', (fontData) => {
  // Convert the parsed fontData to the format Three.js understands
  const font = new Font(fontData);

  // Create the text geometry
  const textGeometry = new TextGeometry('Hello world', {
    font: font,
    size: 18,
    height: 5,
    curveSegments: 32,
    bevelEnabled: true,
    bevelThickness: 0.5,
    bevelSize: 0.5,
    bevelSegments: 8,
  });

  // Create a standard material with red color and 50% gloss
  const material = new THREE.MeshStandardMaterial({
    color: 'hotpink',
    roughness: 0.5
  });

  // Geometries are attached to meshes so that they get rendered
  const textMesh = new THREE.Mesh(textGeometry, material);
  // Update positioning of the text
  textMesh.position.set(-50, 0, 0);
  scene.add(textMesh);
});
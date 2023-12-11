import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 30, 30, 50 );
camera.lookAt( 0, 0, 0 );

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// controls.screenSpacePanning = false;
// controls.minDistance = 50;
// controls.maxDistance = 500;
// controls.maxPolarAngle = Math.PI / 2;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xfaebd7);

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

const points = [];
points.push(new THREE.Vector3(-20, -20, 6));
points.push(new THREE.Vector3(0, 0, 1));
points.push(new THREE.Vector3(-3, 3, 0));
points.push( new THREE.Vector3( - 10, 0, 4 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 2 ) );
points.push(new THREE.Vector3(0, -10, 0));
points.push(new THREE.Vector3(10, -10, 3));
points.push(new THREE.Vector3(13, -10, 0));
points.push(new THREE.Vector3(12, -12, 0));
points.push(new THREE.Vector3(-20, -20, 6));


const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add( line );

renderer.render( scene, camera );

// controls = new THREE.OrbitControls( camera );
// controls.addEventListener( 'change', render );
// controls.autoRotate = true;

// controls.update();

// function animate() {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
// }

// animate();

// // This section checks if your browser/device can use webGL and thus three.js
// if ( WebGL.isWebGLAvailable() ) {

// 	// Initiate function or other initializations here
// 	animate();

// } else {

// 	const warning = WebGL.getWebGLErrorMessage();
// 	document.getElementById( 'container' ).appendChild( warning );

// }








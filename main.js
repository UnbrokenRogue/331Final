import WebGL from 'three/addons/capabilities/WebGL.js';

import * as THREE from 'three';



//Create scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial( { color: 0x915301 } );
scene.background = new THREE.Color(0x023b08);
const cube = new THREE.Mesh(geometry, material);

// var geometry1 = new THREE.EdgesGeometry( mesh.geometry ); // or WireframeGeometry
// var material1 = new THREE.LineBasicMaterial( { color: 0xffff00, linewidth: 2 } );
// var edges = new THREE.LineSegments( geometry1, material1 );


scene.add( cube );
//mesh.add( edges );

camera.position.z = 5;


//Animates the cube to rotate
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;
	//cube.rotation.z += 0.01;
	renderer.render( scene, camera );
}

// This section checks if your browser/device can use webGL and thus three.js
if ( WebGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here
	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}
















// EXTRA NOTES SECTION

//start-1
// if ( WebGL.isWebGLAvailable() ) {

// 	// Initiate function or other initializations here
// 	animate();

// } else {

// 	const warning = WebGL.getWebGLErrorMessage();
// 	document.getElementById( 'container' ).appendChild( warning );

// }
//end-1

//animate();
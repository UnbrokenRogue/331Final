import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//renderer.shadowMap.enabled = true;

const plane = new THREE.Mesh(new THREE.PlaneGeometry(200,200), new THREE.MeshPhongMaterial({ color: 0x0a7d15}));
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
//scene.add(plane);
//scene.add(new THREE.AmbientLight(0xffffff, 0.5));

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(1000, 100, 100);
camera.lookAt(100, 20, 20);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xff0000);

const loader = new FontLoader();

//let geometry; // Declare geometry outside the loader callback

loader.load('helvetiker_regular.typeface.json', function (font) {
    const geometry = new TextGeometry('Hello three.js!', {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5
    });
//});

    const textMaterial = new THREE.MeshPhongMaterial(
        { color: 0x151500, specular: 0x15ff15 }
    );

    const mesh = new THREE.Mesh(geometry, textMaterial);
    scene.add(mesh);
	scene.add(plane);
	scene.add(new THREE.AmbientLight(0xffffff, 0.5));

	renderer.render(scene, camera);

    //animate(); // Start animation/rendering after the font is loaded
});

// function animate() {
//     renderer.render(scene, camera);
//     //requestAnimationFrame(animate);
// }





//Extra notes

// var loader = new THREE.FontLoader();
// loader.load( 'fonts/fontname.js', function ( font ) {

//   var textGeometry = new THREE.TextGeometry( "text", {

//     font: font,

//     size: 50,
//     height: 10,
//     curveSegments: 12,

//     bevelThickness: 1,
//     bevelSize: 1,
//     bevelEnabled: true

//   });

//   var textMaterial = new THREE.MeshPhongMaterial( 
//     { color: 0xff0000, specular: 0xffffff }
//   );

//   var mesh = new THREE.Mesh( textGeometry, textMaterial );

//   scene.add( mesh );

// });   

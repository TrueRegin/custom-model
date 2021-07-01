import { AmbientLight, BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
const controls = new OrbitControls(camera, renderer.domElement)
document.body.appendChild(renderer.domElement)

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const loader = new GLTFLoader();
loader.load('/CubeOre.glb', function(gltf) {
    scene.add(gltf.scene);   
}, undefined, function ( error ) {
	console.error( error );
})

camera.position.z = 5;

const light = new AmbientLight( 0xffffff, 10 ); // soft white light
scene.add( light );


// Render loop
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
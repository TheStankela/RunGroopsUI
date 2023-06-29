import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit{
  ngOnInit(): void {
    this.createThreeJsBox();
  }

  createThreeJsBox(): void {
    
		const canvas = document.getElementById('canvas-box');
		const scene = new THREE.Scene();
    let model = new THREE.Group();
    let mixer = new THREE.AnimationMixer(model);

    const canvasSizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const camera = new THREE.PerspectiveCamera( 75, canvasSizes.width/ canvasSizes.height, 0.1, 200 );
    camera.aspect = canvas!.clientWidth/ canvas!.clientHeight;
    camera.updateProjectionMatrix();
    camera.position.set(-4, 1 ,1 );
      if(!canvas){
        return;
      }

			const renderer = new THREE.WebGLRenderer( { canvas: canvas, alpha: true} );
      renderer.setClearColor( 0xffffff, 0 );
      const controls = new OrbitControls( camera, renderer.domElement );
			controls.target.set( 0, 0, 0 );
			controls.update();
			controls.enablePan = false;
			controls.enableDamping = true;
      controls.enableZoom = false;
      controls.maxPolarAngle = Math.PI /2;
      controls.minPolarAngle = Math.PI /2;


			const loader = new GLTFLoader();
			loader.load( '../../assets/planet/scene.gltf', function ( gltf ) {

				model = gltf.scene;
        model.rotation.y = 0;
        model.position.y = 0;
				model.scale.set(2.5,2.5,2.5);
				scene.add( model );

				mixer = new THREE.AnimationMixer( model );
				mixer.clipAction( gltf.animations[ 0 ] ).play();

				animate();

			}, undefined, function ( e ) {

				console.error( e );

			} );


      

			// window.onresize = function () {

			// 	camera.updateProjectionMatrix();

			// 	renderer.setSize( canvasSizes.width, canvasSizes.height );

			// };

      
      const clock = new THREE.Clock();

			function animate() {

				requestAnimationFrame( animate );

				const delta = clock.getDelta();

				mixer.update( delta );

				controls.update();


				renderer.render( scene, camera );

			}}
}

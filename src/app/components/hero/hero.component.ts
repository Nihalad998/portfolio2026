import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import * as THREE from 'three'; 
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {

  @ViewChild('canvas')
  canvasRef!: ElementRef<HTMLCanvasElement>;

  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  mesh!: THREE.Mesh;

  ngAfterViewInit(): void {

    this.createScene();
    this.animate();
    this.animateText();
    this.handleResize();
  }

  createScene(): void {

    // SCENE
    this.scene = new THREE.Scene();

    // CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const isMobile = window.innerWidth < 768;
    // this.camera.position.z = 7;
    this.camera.position.z = isMobile ? 5 : 7;

    
    // RENDERER
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      alpha: true,
      antialias: true
    });

    this.renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );

    this.renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    // GEOMETRY
    const geometry =
      new THREE.IcosahedronGeometry( 1,4 );

    // MATERIAL
    const material =
      new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        wireframe: true,
        transparent: true,
        opacity: 0.28,
      });

    // MESH
    this.mesh = new THREE.Mesh(
      geometry,
      material
    );

    if(isMobile) {
      this.mesh.scale.set(2, 2, 2);
    }

    this.scene.add(this.mesh);

    // RESPONSIVE POSITIONING
    if (window.innerWidth >= 1280) {
      // DESKTOP
      this.mesh.position.x = 6;
      this.mesh.position.y = 0.5;
      this.mesh.scale.set( 2.8, 2.8, 2.8 );
    }
    else {
      // MOBILE + TABLET
      this.mesh.position.x = 0;
      this.mesh.position.y = -1.5;
      this.mesh.scale.set( 1, 1, 1 );
    }

    // LIGHT
    const pointLight =
      new THREE.PointLight( 0x00ffff, 5 );

    pointLight.position.set( 5, 5, 5 );

    this.scene.add(pointLight);

    // AMBIENT LIGHT
    const ambientLight =
      new THREE.AmbientLight( 0x00ffff, 0.5);

    this.scene.add(ambientLight);
  }

  animate(): void {
    requestAnimationFrame( () => this.animate() );

    // ROTATION
    this.mesh.rotation.x += 0.0005;
    this.mesh.rotation.y += 0.001;

    // FLOATING EFFECT
    if (window.innerWidth >= 1280) {
      this.mesh.position.y = 0.3 + Math.sin(Date.now() * 0.001) * 0.15;
    }
    else if (window.innerWidth >= 768) {
      this.mesh.position.y = -0.5 + Math.sin(Date.now() * 0.001) * 0.1;
    }
    else {
      this.mesh.position.y = -1.8 + Math.sin(Date.now() * 0.001) * 0.08;
    }

    this.renderer.render(
      this.scene,
      this.camera
    );

  }

  animateText(): void {
    const tl = gsap.timeline();
    tl.from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 1,
    })

    .from('.hero-title', {
      y: 50,
      opacity: 0,
      duration: 1,
    }, '-=0.5')

    .from('.hero-description', {
      y: 30,
      opacity: 0,
      duration: 1,
    }, '-=0.5')

    .from('.hero-buttons', {
      y: 20,
      opacity: 0,
      duration: 1,
    }, '-=0.5');

  }

  handleResize(): void {
    window.addEventListener(
      'resize',
      () => {
        this.camera.aspect =
          window.innerWidth /
          window.innerHeight;

        this.camera.updateProjectionMatrix();

        this.renderer.setSize(
          window.innerWidth,
          window.innerHeight
        );

      }
    );

  }

}
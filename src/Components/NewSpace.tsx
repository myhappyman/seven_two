import starImg from "../assets/img/star.png";

import { useEffect } from "react";
import styled from "styled-components";
import * as THREE from "three";

const CanvasWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

class Space {
  private divWrapper: Element | null;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera | null;
  private starGeo: THREE.BufferGeometry;
  private vertices: number[];
  private stars: THREE.Points;
  private starMaterial: THREE.PointsMaterial;

  constructor() {
    this.divWrapper = document.querySelector("#wrapper");

    // set Scene
    this.scene = new THREE.Scene();

    // set Camera
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    this.camera.position.z = 1;
    this.camera.rotation.x = Math.PI / 2;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.divWrapper?.appendChild(this.renderer.domElement);

    this.vertices = [];

    this.starGeo = new THREE.BufferGeometry();
    for (let i = 0; i < 6000; i++) {
      const x = Math.random() * 600 - 300;
      const y = Math.random() * 600 - 300;
      const z = Math.random() * 600 - 300;
      this.vertices.push(x, y, z);
    }

    this.starGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(this.vertices, 3)
    );

    let sprite = new THREE.TextureLoader().load(
      require("../assets/img/star.png")
    );

    this.starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.7,
      map: sprite,
    });

    this.stars = new THREE.Points(this.starGeo, this.starMaterial);
    this.scene.add(this.stars);

    this.animate();
  }

  animate() {
    this.renderer.render(
      this.scene,
      this.camera || new THREE.PerspectiveCamera()
    );
    requestAnimationFrame(this.animate);
  }
}

function NewSpace() {
  useEffect(() => {
    new Space();
  }, []);

  return <CanvasWrapper id="wrapper"></CanvasWrapper>;
}

export default NewSpace;

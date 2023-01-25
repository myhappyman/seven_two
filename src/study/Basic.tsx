import { useEffect } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { Light } from "three";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

class Cube {
  private divContainer: Element | null;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera | null;
  private light: THREE.DirectionalLight | null;
  private cube: THREE.Mesh | null;

  constructor() {
    this.divContainer = document.querySelector("#webgl-container");

    //antialias true옵션을 사용하면 3D 오브젝트들의 경계선의 계단현상 없이 부드럽게 표현이 된다.
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.divContainer?.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.setupCamera();
    this.setipLight();
    this.setupModel();

    window.onresize = this.resize.bind(this);
    this.resize();

    requestAnimationFrame(this.render.bind(this));

    this.camera = null;
    this.light = null;
    this.cube = null;
  }

  //카메라 생성 메소드
  private setupCamera() {
    const width = this.divContainer?.clientWidth || 0;
    const height = this.divContainer?.clientHeight || 0;
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    this.camera.position.z = 2;
  }

  //광원 생성 메소드
  private setipLight() {
    const color = 0xffffff; //광원의 색상
    const intensity = 1; //광원의 세기
    this.light = new THREE.DirectionalLight(color, intensity); //광원의 색상과 세기값을 입력하여 생성
    this.light.position.set(-1, 2, 4);
    this.scene.add(this.light);
  }

  //정육면체의 mesh를 생성하는 메소드
  private setupModel() {
    const geometry = new THREE.BoxGeometry(1, 1, 1); //가로, 세로, 깊이에 대한 값을 받는다.
    const material = new THREE.MeshPhongMaterial({ color: 0x44a88 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
  }

  public resize() {
    const width = this.divContainer?.clientWidth || 0;
    const height = this.divContainer?.clientHeight || 0;
    if (this.camera) this.camera.aspect = width / height;

    this.camera?.updateProjectionMatrix();
    this.renderer.setSize(width || 1, height || 1);
  }

  public render(time: number) {
    this.renderer.render(
      this.scene,
      this.camera ? this.camera : new THREE.PerspectiveCamera()
    );
    this.update(time);
    requestAnimationFrame(this.render.bind(this)); //해당 render함수가 재귀함수처럼 무한 반복되어 애니메이션처럼 흐르도록 처리해준다.
  }

  public update(time: number) {
    time *= 0.001; //mmsec > sec
    if (this.cube) {
      this.cube.rotation.x = time;
      this.cube.rotation.y = time;
    }
  }
}

function Basic() {
  useEffect(() => {
    new Cube();
  }, []);

  return <Wrapper id="webgl-container"></Wrapper>;
}

export default Basic;

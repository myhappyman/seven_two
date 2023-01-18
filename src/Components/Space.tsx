import { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import {
  BufferGeometry,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  Vector3,
  WebGLRenderer,
} from "three";

const Wrapper = styled.div`
  overflow: hidden;
`;

class Stage {
  public renderParam: { width: number; height: number };
  public cameraParam: { fov: number; lookAt: Vector3 };
  public fogParam: { color: number; start: number; end: number };
  public scene: Scene | null;
  public camera: PerspectiveCamera | null;
  public renderer: WebGLRenderer | null;
  public geometry: BufferGeometry | null;
  public material: PointsMaterial | null;
  public mesh: Points | null;
  public isInitialized: boolean;
  public mouse: { x: number; y: number };
  public rot: number;

  constructor() {
    this.renderParam = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    this.cameraParam = {
      fov: 70,
      lookAt: new THREE.Vector3(0, 0, 0),
    };

    this.fogParam = {
      color: 0x000000,
      start: 50,
      end: 2000,
    };

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.geometry = null;
    this.material = null;
    this.mesh = null;
    this.isInitialized = false;
    this.mouse = { x: 0, y: 0 };
    this.rot = 0;
  }

  init() {
    this._setScene();
    this._setRender();
    this._setCamera();
    this._setFog();

    this.isInitialized = true;
  }

  _setScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0d0d0d);
  }

  _setRender() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("myThreeJsCanvas") ?? undefined,
      alpha: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(
      this.renderParam?.width ?? 0,
      this.renderParam?.height ?? 0
    );
  }

  _setCamera() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (!this.isInitialized) {
      this.camera = new THREE.PerspectiveCamera(
        this.cameraParam?.fov,
        (this.renderParam?.width ?? window.innerWidth) /
          (this.renderParam?.height ?? window.innerHeight)
      );

      this.camera.lookAt(this.cameraParam?.lookAt ?? new Vector3(0, 0, 0));
    }

    if (this.camera) {
      this.camera.aspect = windowWidth / windowHeight;
      this.camera.updateProjectionMatrix();
      this.renderer?.setPixelRatio(window.devicePixelRatio);
      this.renderer?.setSize(windowWidth, windowHeight);

      // this.controls = new OrbitControlsImpl(
      //   this.camera,
      //   this.renderer?.domElement
      // );
    }
  }

  _setFog() {
    if (this.scene) {
      this.scene.fog = new THREE.Fog(
        this.fogParam?.color,
        this.fogParam?.start,
        this.fogParam?.end
      );
    }
  }

  _render() {
    // const radian = ((this.rot + this.mouse.x + this.mouse.y) * Math.PI) / 180;
    const radian = (this.rot * Math.PI) / 180;
    this.rot += 0.01;
    if (this.camera) {
      this.camera.position.x = 1000 * Math.sin(radian);
      // this.camera.position.y = 1000 * Math.cos(radian);
      // this.camera.position.z = 1000 * Math.cos(radian);
      this.camera.position.set(this.mouse.x, this.mouse.y, 100);
      this.renderer?.render(this.scene ?? new Scene(), this.camera);
    }
  }

  // _setMoveCamera() {
  //   if (this.camera) {
  //     this.camera.position.x = this.mouse.x;
  //     this.camera.position.z = this.mouse.y;
  //     this.renderer?.render(this.scene ?? new Scene(), this.camera);
  //   }
  // }

  onResize() {
    this._setCamera();
  }

  // onMouseMove() {
  //   this._setMoveCamera();
  // }

  onRaf() {
    this._render();
  }
}

class Mesh {
  public stage: Stage;
  public mesh: Points | null;
  public vertices: number[];
  public colors: number[];
  public SIZE: number;
  public LENGTH: number;

  constructor(stage: Stage) {
    this.stage = stage;
    this.mesh = null;
    this.vertices = [];
    this.colors = [];
    this.SIZE = 3000;
    this.LENGTH = 50000;
  }

  init() {
    this._setMesh();
  }

  _setMesh() {
    // const pallet1 = [0, 255, 95, 138];
    // const pallet2 = [84, 255, 0, 138];
    // const pallet3 = [255, 255, 255, 255];
    const r = [1, 255];
    const g = [0, 255];
    const b = [255, 255];
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.PointsMaterial({
      color: 0x888888,
    });
    material.size = 1;
    material.sizeAttenuation = true;
    material.color = new THREE.Color("#FFFEFF");
    // material.color = new THREE.Color("#1E1EFF");
    material.transparent = true;
    material.depthWrite = false;
    material.vertexColors = true;
    // material.alphaTest = 0.001;

    for (let i = 0; i < this.LENGTH; i++) {
      const x = this.SIZE * (Math.random() - 0.5);
      const y = this.SIZE * (Math.random() - 0.5);
      const z = this.SIZE * (Math.random() - 0.5);
      // const idx = Math.round(Math.random() * r.length);
      this.vertices.push(x, y, z);

      if (-900 < x && x < 900 && -900 < y && y < 900 && -900 < z && z < 900) {
        this.colors.push(r[0], g[0], b[0]);
      } else {
        this.colors.push(r[1], g[1], b[1]);
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(this.vertices, 3)
    );

    geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(this.colors, 3)
    );

    this.mesh = new THREE.Points(geometry, material);
    this.stage?.scene?.add(this.mesh);
  }

  _render() {
    if (this.mesh) {
      this.mesh.rotation.x += 0.001;
      this.mesh.rotation.y += 0.001;
      this.mesh.rotation.z += 0.001;
    }
  }

  onRaf() {
    this._render();
  }
}

function Space() {
  useEffect(() => {
    const stage = new Stage();
    const mesh = new Mesh(stage);

    stage.init();
    mesh.init();

    window.addEventListener("resize", () => {
      stage.onResize();
    });

    document.addEventListener("mousemove", onDocumentMouseMove, false);

    function onDocumentMouseMove(event: any) {
      event.preventDefault();
      // stage.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      // stage.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      stage.mouse.x = event.clientX;
      stage.mouse.y = -event.clientY;
      // stage.onMouseMove();
    }
    const _raf = () => {
      window.requestAnimationFrame(() => {
        stage.onRaf();
        mesh.onRaf();

        _raf();
      });
    };

    _raf();
  }, []);

  return (
    <Wrapper>
      <canvas id="myThreeJsCanvas" />
    </Wrapper>
  );
}

export default Space;

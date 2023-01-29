import { useEffect } from "react";
import styled from "styled-components";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BufferGeometry,
  PointsMaterial,
  Points,
  Vector3,
  Color,
  Fog,
  DirectionalLight,
  Float32BufferAttribute,
  BufferAttribute,
} from "three";
import { OrbitControls } from "three-orbitcontrols-ts";

const Wrapper = styled.div`
  overflow: hidden;
`;

class Stage {
  public wrapper: HTMLElement | undefined;
  private renderParam: { width: number; height: number };
  private cameraParam: { fov: number; lookAt: THREE.Vector3 };
  private fogParam: { color: number; start: number; end: number };
  public scene: Scene | null;
  private camera: PerspectiveCamera | null;
  private light: DirectionalLight | null;
  private renderer: WebGLRenderer | null;
  private isInitialized: boolean;
  public mouse: { x: number; y: number; clientX: number; clientY: number };
  private rot: number;
  private controls: OrbitControls | null;

  constructor() {
    this.controls = null;
    this.scene = null;
    this.camera = null;
    this.light = null;
    this.renderer = null;
    this.isInitialized = false;
    this.mouse = { x: 0, y: 0, clientX: 0, clientY: 0 };
    this.rot = 0;

    this.renderParam = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    this.cameraParam = {
      fov: 70,
      lookAt: new Vector3(0, 0, 0),
    };

    this.fogParam = {
      color: 0x000000,
      start: 50,
      end: 2000,
    };

    this.wrapper = document.getElementById("wrapper") || undefined;
  }

  init() {
    this._setScene();
    this._setLight();
    this._setCamera();
    this._setFog();
    // this._setControls();
    this._setRender();

    this.isInitialized = true;
  }

  _setScene() {
    this.scene = new Scene();
    this.scene.background = new Color(0x0d0d0d);
  }

  _setRender() {
    this.renderer = new WebGLRenderer({
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
      this.camera = new PerspectiveCamera(
        this.cameraParam?.fov,
        (this.renderParam?.width ?? window.innerWidth) /
          (this.renderParam?.height ?? window.innerHeight),
        1,
        500
      );

      this.camera.position.x = -0.07;
      this.camera.position.z = 317;
      this.camera.lookAt(this.cameraParam?.lookAt ?? new Vector3(0, 0, 0));
    }

    if (this.camera) {
      this.camera.aspect = windowWidth / windowHeight;
      this.camera.updateProjectionMatrix();
      this.renderer?.setPixelRatio(window.devicePixelRatio);
      this.renderer?.setSize(windowWidth, windowHeight);
    }
  }

  _setLight() {
    const color = 0xffffff;
    const intensity = 1;
    this.light = new DirectionalLight(color, intensity);
    this.light.position.set(-1, 2, 4);
    this.scene?.add(this.light);
  }

  _setControls() {
    this.controls = new OrbitControls(
      this.camera ?? new PerspectiveCamera(),
      this.wrapper
    );
    this.controls.enableDamping = true;
  }

  _setFog() {
    if (this.scene) {
      this.scene.fog = new Fog(
        this.fogParam?.color,
        this.fogParam?.start,
        this.fogParam?.end
      );
    }
  }

  _render() {
    if (this.camera) {
      // console.log(Math.abs(this.mouse.x) * 220 + 100);
      // console.log(Math.sin(this.mouse.x * Math.PI * 2));
      this.camera.position.x = Math.sin(this.mouse.x * Math.PI * 2);
      this.camera.position.y = Math.sin(this.mouse.y * Math.PI * 2);
      this.camera.position.z = Math.abs(this.mouse.x) * 220 + 100;
      this.renderer?.render(this.scene ?? new Scene(), this.camera);
    }
  }

  onResize() {
    this._setCamera();
  }

  onRaf() {
    this._render();
  }
}

class Mesh {
  public stage: Stage;
  public mesh: Points | null;
  private vertices: number[];
  private colors: number[];
  private SIZE: number;
  private LENGTH: number;

  constructor(stage: Stage) {
    this.stage = stage;
    this.mesh = null;
    this.vertices = [];
    this.colors = [];
    this.SIZE = 500;
    this.LENGTH = 20000;
  }

  init() {
    this._setMesh();
  }

  _setMesh() {
    const refPoint = 160;
    const r = [0, 255];
    const g = [0, 255];
    const b = [1, 255];
    const geometry = new BufferGeometry();
    const material = new PointsMaterial({
      color: 0xffffff,
      size: 1,
      sizeAttenuation: true,
      vertexColors: true,
    });

    for (let i = 0; i < this.LENGTH; i++) {
      const x = this.SIZE * (Math.random() - 0.5);
      const y = this.SIZE * (Math.random() - 0.5);
      const z = this.SIZE * (Math.random() - 0.5);
      this.vertices.push(x, y, z);

      const ran = Math.random() * 10;
      //랜덤한 원형느낌을 강제로 만들기 위해
      if (
        -refPoint - ran < x &&
        x < refPoint + ran &&
        -refPoint - ran < y &&
        y < refPoint + ran &&
        -refPoint - ran < z &&
        z < refPoint + ran
      ) {
        this.colors.push(r[0], g[0], b[0]);
      } else {
        this.colors.push(r[1], g[1], b[1]);
      }
    }

    geometry.setAttribute(
      "position",
      new Float32BufferAttribute(this.vertices, 3)
    );

    geometry.setAttribute(
      "color",
      new BufferAttribute(new Float32Array(this.colors), 3)
    );

    this.mesh = new Points(geometry, material);
    this.stage?.scene?.add(this.mesh);
  }

  _render() {
    if (this.mesh) {
      this.mesh.rotation.x += 0.001;
      this.mesh.rotation.y += 0.001;
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

    window.addEventListener("mousemove", (event) => {
      event.preventDefault();
      const { clientX, clientY, offsetX, offsetY } = event;

      const gapX = clientX - offsetX;
      const gapY = clientY - offsetY;
      const clientWidth = stage?.wrapper ? stage?.wrapper.clientWidth : 0;
      const clientHeight = stage?.wrapper ? stage?.wrapper.clientHeight : 0;

      stage.mouse.clientX = clientX;
      stage.mouse.clientY = clientY;
      stage.mouse.x = ((event.clientX - gapX) / clientWidth) * 2 - 1;
      stage.mouse.y = -((event.clientY - gapY) / clientHeight) * 2 + 1;
      // console.log(stage.mouse.x, stage.mouse.y);
    });

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
    <Wrapper id="wrapper">
      <canvas id="myThreeJsCanvas" />
    </Wrapper>
  );
}

export default Space;

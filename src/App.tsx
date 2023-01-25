import styled from "styled-components";
// import Space from "./Components/Space";
import Basic from "./study/Basic";

const Wrapper = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; */
`;

function App() {
  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera(
  //   50,
  //   window.innerWidth / window.innerHeight,
  //   1,
  //   1000
  // );
  // camera.position.z = 96;
  // const canvas = document.getElementById("myThreeJsCanvas");
  // const renderer = new THREE.WebGLRenderer({
  //   canvas: canvas ?? undefined,
  //   antialias: true,
  // });
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // document.body.appendChild(renderer.domElement);
  // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  // ambientLight.castShadow = true;
  // scene.add(ambientLight);
  // const spotLight = new THREE.SpotLight(0xffffff, 1);
  // spotLight.castShadow = true;
  // spotLight.position.set(0, 64, 32);
  // scene.add(spotLight);
  // const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
  // const boxMaterial = new THREE.MeshNormalMaterial();
  // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  // scene.add(boxMesh);
  // const animate = () => {
  //   boxMesh.rotation.x += 0.01;
  //   boxMesh.rotation.y += 0.01;
  //   boxMesh.rotation.z += 0.01;
  //   renderer.render(scene, camera);
  //   window.requestAnimationFrame(animate);
  // };
  // animate();

  return (
    <Wrapper>
      {/* <Space /> */}
      <Basic />
    </Wrapper>
  );
}

export default App;

import { Canvas } from "@react-three/fiber";
import Cylinder3d from "./Components/Cylinder3d";

function App() {
  return (
    <>
      <section className="App-header">
        <Canvas>
          {/* <pointLight position={[10, 10, 10]} /> */}
          {/* <ambientLight /> */}
          <Cylinder3d position={[-1.2, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} />
        </Canvas>
      </section>
    </>
  );
}

export default App;

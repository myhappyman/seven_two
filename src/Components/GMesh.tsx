import { Points } from "@react-three/drei/core";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Mesh, BufferAttribute, PointsMaterial } from "three";

function GMesh() {
  const [clicked, click] = useState(false);
  const SIZE = 3000;
  const LENGTH = 3000;
  const ref = useRef<Mesh>(null);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    if (ref?.current !== null) {
      ref.current.rotation.y += 0.001;
    }
    // ref?.current?.rotation.y += 0.001;
  });

  const [vertices, setVertices] = useState<number[]>([]);
  useEffect(() => {
    for (let i = 0; i < LENGTH; i++) {
      const x = SIZE * (Math.random() - 0.5);
      const y = SIZE * (Math.random() - 0.5);
      const z = SIZE * (Math.random() - 0.5);

      setVertices((prev) => [...prev, x, y, z]);
    }
  }, []);

  return (
    <mesh
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
    >
      <bufferGeometry
        attributes={{ position: new BufferAttribute(vertices, 3) }}
      />
      <meshStandardMaterial />
    </mesh>
  );
}

export default GMesh;

import React, { useRef, useState } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

function Cylinder3d(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
   useFrame(() => {
     ref.current.rotation.x += 0.01;
   });

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}

export default Cylinder3d;

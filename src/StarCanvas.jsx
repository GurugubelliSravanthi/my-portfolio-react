// StarCanvas.jsx
import React, { useRef, useMemo, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";

const NUM_SHAPES = 1000;

const FloatingShapes = () => {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const positions = useMemo(
    () =>
      Array.from({ length: NUM_SHAPES }).map(() => ({
        x: (Math.random() - 0.5) * 50,
        y: Math.random() * 80 - 40,
        z: (Math.random() - 0.5) * 10,
        rotationSpeed: Math.random() * 0.002,
        scale: Math.random() * 0.3 + 0.1,
      })),
    []
  );

  useFrame(() => {
    positions.forEach((pos, i) => {
      const t = Date.now() * 0.001 + i;
      dummy.position.set(pos.x, pos.y + Math.sin(t) * 0.1, pos.z);
      dummy.rotation.z += pos.rotationSpeed;
      dummy.scale.set(pos.scale, pos.scale, pos.scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, NUM_SHAPES]}>
      <circleGeometry args={[0.3, 32]} />
      <meshBasicMaterial
        color="skyblue"
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </instancedMesh>
  );
};

const StarsCanvas = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      const content = document.getElementById("main-content"); // or your outermost wrapper
      setHeight(content?.offsetHeight || window.innerHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      className="star-background"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: `${height}px`,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <fog attach="fog" args={["#0f172a", 10, 50]} />
        <Suspense fallback={null}>
          <FloatingShapes />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

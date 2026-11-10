import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Metallic materials
const gold = {
  color: "#d99a30",
  metalness: 0.8,
  roughness: 0.2,
};

const brightGold = {
  color: "#ffd77b",
  metalness: 0.75,
  roughness: 0.17,
};

const darkGold = {
  color: "#98601c",
  metalness: 0.8,
  roughness: 0.25,
};

const navy = {
  color: "#14243b",
  metalness: 0.65,
  roughness: 0.25,
};

// Curved trophy arms
function TrophyArm({ side = 1 }) {
  const curve = React.useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.26, -0.9, 0),
        new THREE.Vector3(side * 0.47, -0.3, 0),
        new THREE.Vector3(side * 0.76, 0.35, 0),
        new THREE.Vector3(side * 0.82, 1.0, 0),
        new THREE.Vector3(side * 0.69, 1.55, 0),
      ]),
    [side]
  );

  return (
    <mesh>
      <tubeGeometry args={[curve, 70, 0.085, 12, false]} />
      <meshStandardMaterial {...brightGold} />
    </mesh>
  );
}

// Golden globe with metallic rings
function GoldenGlobe() {
  const radius = 0.69;

  return (
    <group position={[0, 1.5, 0]}>
      <mesh>
        <sphereGeometry args={[radius, 64, 48]} />
        <meshStandardMaterial {...gold} />
      </mesh>

      {[-0.35, 0, 0.35].map((y, i) => {
        const ringRadius = Math.sqrt(radius * radius - y * y);

        return (
          <mesh
            key={i}
            position={[0, y, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <torusGeometry args={[ringRadius + 0.008, 0.012, 8, 96]} />
            <meshStandardMaterial {...brightGold} />
          </mesh>
        );
      })}

      {[0, Math.PI / 3, (Math.PI * 2) / 3].map((angle, i) => (
        <mesh key={i} rotation={[0, angle, 0]}>
          <torusGeometry args={[0.697, 0.012, 8, 96]} />
          <meshStandardMaterial {...brightGold} />
        </mesh>
      ))}

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.695, 0.025, 10, 96]} />
        <meshStandardMaterial {...brightGold} />
      </mesh>

      <mesh position={[0, 0.72, 0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial {...brightGold} />
      </mesh>
    </group>
  );
}

// Full navy-and-gold base
function TrophyBase() {
  const tiers = [
    { y: -2.3, top: 0.75, bottom: 0.94, height: 0.38 },
    { y: -2.7, top: 0.91, bottom: 1.12, height: 0.4 },
    { y: -3.1, top: 1.08, bottom: 1.3, height: 0.4 },
  ];

  return (
    <group>
      {tiers.map((tier, index) => (
        <group key={index}>
          <mesh position={[0, tier.y, 0]}>
            <cylinderGeometry
              args={[tier.top, tier.bottom, tier.height, 64]}
            />
            <meshStandardMaterial {...navy} />
          </mesh>

          <mesh
            position={[0, tier.y + tier.height / 2, 0]}
          >
            <cylinderGeometry
              args={[
                tier.top + 0.025,
                tier.top + 0.025,
                0.055,
                64,
              ]}
            />
            <meshStandardMaterial {...brightGold} />
          </mesh>

          <mesh
            position={[0, tier.y - tier.height / 2, 0]}
          >
            <cylinderGeometry
              args={[
                tier.bottom + 0.025,
                tier.bottom + 0.025,
                0.06,
                64,
              ]}
            />
            <meshStandardMaterial {...gold} />
          </mesh>
        </group>
      ))}

      <mesh position={[0, -3.34, 0]}>
        <cylinderGeometry args={[1.34, 1.34, 0.11, 64]} />
        <meshStandardMaterial {...brightGold} />
      </mesh>
    </group>
  );
}

// Entire trophy geometry in one model
function CompleteTrophy() {
  return (
    <group>
      <GoldenGlobe />

      <TrophyArm side={-1} />
      <TrophyArm side={1} />

      <mesh position={[0, -0.87, 0]}>
        <cylinderGeometry args={[0.13, 0.28, 2.1, 40]} />
        <meshStandardMaterial {...brightGold} />
      </mesh>

      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial {...gold} />
      </mesh>

      <mesh position={[0, -1.95, 0]}>
        <cylinderGeometry args={[0.35, 0.45, 0.3, 48]} />
        <meshStandardMaterial {...darkGold} />
      </mesh>

      <TrophyBase />
    </group>
  );
}

// Rotate complete trophy around its centre
function RotatingTrophy({ controls }) {
  const rotatingGroup = useRef(null);

  useFrame((_, delta) => {
    if (!rotatingGroup.current) return;

    if (!controls.current.dragging) {
      controls.current.angle += Math.min(delta, 0.05) * 0.4;
    }

    rotatingGroup.current.rotation.y = controls.current.angle;
  });

  return (
    <group position={[0, -0.25, 0]}>
      <group ref={rotatingGroup}>
        {/* Move trophy geometry so rotation is centred */}
        <group position={[0, 0.75, 0]}>
          <CompleteTrophy />
        </group>
      </group>
    </group>
  );
}

export default function GoldenTrophy3D() {
  const controls = useRef({
    angle: 0,
    dragging: false,
  });

  const lastX = useRef(0);

  const pointerDown = (event) => {
    controls.current.dragging = true;
    lastX.current = event.clientX;

    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const pointerMove = (event) => {
    if (!controls.current.dragging) return;

    const difference = event.clientX - lastX.current;

    controls.current.angle += difference * 0.014;

    lastX.current = event.clientX;
  };

  const pointerUp = (event) => {
    controls.current.dragging = false;

    if (
      event.currentTarget.hasPointerCapture?.(event.pointerId)
    ) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  useEffect(() => {
    const stopDragging = () => {
      controls.current.dragging = false;
    };

    window.addEventListener("pointerup", stopDragging);
    window.addEventListener("blur", stopDragging);

    return () => {
      window.removeEventListener("pointerup", stopDragging);
      window.removeEventListener("blur", stopDragging);
    };
  }, []);

  return (
    <div
      className="golden-trophy-container"
      onPointerDown={pointerDown}
      onPointerMove={pointerMove}
      onPointerUp={pointerUp}
      onPointerCancel={pointerUp}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "480px",
        position: "relative",
        cursor: "grab",
        touchAction: "none",
        userSelect: "none",
      }}
    >
      {/* Stationary decorative golden circle */}
      <div
        style={{
          position: "absolute",
          width: "76%",
          maxWidth: "410px",
          aspectRatio: "1",
          border: "2px solid rgba(245, 215, 123, 0.65)",
          borderRadius: "50%",
          top: "43%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow:
            "0 0 45px rgba(232, 185, 79, 0.25), inset 0 0 30px rgba(232, 185, 79, 0.1)",
          pointerEvents: "none",
        }}
      />

      <Canvas
        camera={{
          position: [0, 0, 10.8],
          fov: 42,
          near: 0.1,
          far: 100,
        }}
        gl={{
          alpha: true,
          antialias: true,
        }}
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <ambientLight intensity={1.4} />

        <hemisphereLight
          args={["#fff0ce", "#10213A", 2]}
        />

        <directionalLight
          position={[4, 7, 8]}
          intensity={4}
          color="#fff1c4"
        />

        <directionalLight
          position={[-5, 3, -4]}
          intensity={3}
          color="#eaa53e"
        />

        <pointLight
          position={[2, 2, 5]}
          intensity={65}
          color="#ffce6e"
          distance={15}
        />

        <pointLight
          position={[-3, -2, 3]}
          intensity={35}
          color="#ffffff"
          distance={12}
        />

        <RotatingTrophy controls={controls} />
      </Canvas>
    </div>
  );
}
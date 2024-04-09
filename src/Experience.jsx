import {
  Text,
  OrbitControls,
  TransformControls,
  PivotControls,
  Float,
  Html,
  MeshReflectorMaterial,
} from "@react-three/drei"
import { useRef } from "react"
export default function Experience() {
  const cube = useRef()
  const sphere = useRef()
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
        scale={100}
        fixed={true}
      >
        <mesh position-x={-2} ref={sphere}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            wrapperClass="sphere-label"
            center
            distanceFactor={6}
            occlude={[cube, sphere]}
            style={{
              color: "black",
              fontSize: "2rem",
              whiteSpace: "nowrap",
              fontFamily: "monospace",
              backgroundColor: "white",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              opacity: 0.8,
            }}
          >
            Thats a Sphere 🤘
          </Html>
        </mesh>
      </PivotControls>

      <Float speed={5} floatIntensity={2}>
        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={1}
          color={"#ff4d6d"}
          position={[0, 2, 0]}
          maxWidth={2}
          textAlign="center"
        >
          I LUV R3R
          <meshNormalMaterial />
        </Text>
      </Float>

      <mesh ref={cube} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <TransformControls object={cube} mode="translate" />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
          //   color="#a0a0a0"
          metalness={0.9}
          //   roughness={0.1}
          //   envMapIntensity={0.5}
          //   clearcoat={1}
          //   clearcoatRoughness={0.1}
        />
      </mesh>
    </>
  )
}

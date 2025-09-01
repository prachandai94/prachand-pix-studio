import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const PARTICLE_COUNT = 2000
const MORPH_DURATION = 4000 // 4 seconds per shape

// Define shape formations
const formations = {
  tornado: (index: number, total: number) => {
    const angle = (index / total) * Math.PI * 8
    const height = (index / total) * 8 - 4
    const radius = Math.sin(height * 0.5) * 2 + 0.5
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      height,
      Math.sin(angle) * radius
    )
  },
  
  scenery: (index: number, total: number) => {
    const x = (Math.random() - 0.5) * 10
    const z = (Math.random() - 0.5) * 10
    let y = Math.random() * 2
    
    // Create mountain-like terrain
    if (Math.abs(x) < 3 && Math.abs(z) < 3) {
      y += Math.sin(x * 0.5) * Math.cos(z * 0.5) * 2
    }
    
    return new THREE.Vector3(x, y - 2, z)
  },
  
  glass: (index: number, total: number) => {
    const angle = (index / total) * Math.PI * 2
    const height = (Math.random() - 0.5) * 6
    const radius = 2 + Math.random() * 0.2
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      height,
      Math.sin(angle) * radius
    )
  },
  
  tripod: (index: number, total: number) => {
    const legIndex = Math.floor(index / (total / 3))
    const legProgress = (index % (total / 3)) / (total / 3)
    const legAngle = (legIndex * Math.PI * 2) / 3
    
    const legRadius = legProgress * 2
    const legHeight = -legProgress * 3
    
    if (legProgress < 0.8) {
      return new THREE.Vector3(
        Math.cos(legAngle) * legRadius,
        legHeight,
        Math.sin(legAngle) * legRadius
      )
    } else {
      // Top platform
      const platformAngle = (index / total) * Math.PI * 2
      return new THREE.Vector3(
        Math.cos(platformAngle) * 0.5,
        1,
        Math.sin(platformAngle) * 0.5
      )
    }
  },
  
  screen: (index: number, total: number) => {
    const cols = 40
    const rows = 25
    const col = index % cols
    const row = Math.floor(index / cols)
    
    if (row < rows) {
      return new THREE.Vector3(
        (col / cols - 0.5) * 6,
        (row / rows - 0.5) * 4,
        0
      )
    }
    
    // Random particles for the rest
    return new THREE.Vector3(
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 2
    )
  },
  
  face: (index: number, total: number) => {
    const angle = (index / total) * Math.PI * 2
    const radius = 2
    
    // Face outline
    if (index < total * 0.6) {
      return new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 1.2,
        0
      )
    }
    
    // Eyes
    if (index < total * 0.75) {
      const eyeX = index % 2 === 0 ? -0.7 : 0.7
      return new THREE.Vector3(eyeX, 0.5, 0.1)
    }
    
    // Mouth
    const mouthAngle = ((index - total * 0.75) / (total * 0.25)) * Math.PI
    return new THREE.Vector3(
      Math.cos(mouthAngle) * 0.8,
      -0.5 - Math.sin(mouthAngle) * 0.3,
      0.1
    )
  },
  
  scattered: (index: number, total: number) => {
    return new THREE.Vector3(
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8
    )
  }
}

const ParticleSystem = () => {
  const pointsRef = useRef<THREE.Points>(null)
  const positions = useRef<Float32Array>(new Float32Array(PARTICLE_COUNT * 3))
  const targetPositions = useRef<Float32Array>(new Float32Array(PARTICLE_COUNT * 3))
  const velocities = useRef<Float32Array>(new Float32Array(PARTICLE_COUNT * 3))
  
  const currentFormation = useRef(0)
  const transitionStart = useRef(Date.now())
  const formationKeys = Object.keys(formations)

  // Initialize scattered particles
  useMemo(() => {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      const pos = formations.scattered(i, PARTICLE_COUNT)
      positions.current[i3] = pos.x
      positions.current[i3 + 1] = pos.y
      positions.current[i3 + 2] = pos.z
      
      velocities.current[i3] = (Math.random() - 0.5) * 0.02
      velocities.current[i3 + 1] = (Math.random() - 0.5) * 0.02
      velocities.current[i3 + 2] = (Math.random() - 0.5) * 0.02
    }
  }, [])

  useFrame(() => {
    if (!pointsRef.current) return

    const now = Date.now()
    const elapsed = now - transitionStart.current

    // Switch formation every MORPH_DURATION
    if (elapsed > MORPH_DURATION) {
      currentFormation.current = (currentFormation.current + 1) % formationKeys.length
      transitionStart.current = now
      
      // Set new target positions
      const formationName = formationKeys[currentFormation.current] as keyof typeof formations
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3
        const target = formations[formationName](i, PARTICLE_COUNT)
        targetPositions.current[i3] = target.x
        targetPositions.current[i3 + 1] = target.y
        targetPositions.current[i3 + 2] = target.z
      }
    }

    // Animate towards target positions
    const progress = Math.min(elapsed / MORPH_DURATION, 1)
    const easeProgress = 1 - Math.pow(1 - progress, 3) // Ease out cubic

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      
      // Smooth transition to target
      if (targetPositions.current[i3] !== undefined) {
        positions.current[i3] += (targetPositions.current[i3] - positions.current[i3]) * 0.05
        positions.current[i3 + 1] += (targetPositions.current[i3 + 1] - positions.current[i3 + 1]) * 0.05
        positions.current[i3 + 2] += (targetPositions.current[i3 + 2] - positions.current[i3 + 2]) * 0.05
      }
      
      // Add subtle random movement
      positions.current[i3] += velocities.current[i3] * 0.5
      positions.current[i3 + 1] += velocities.current[i3 + 1] * 0.5
      positions.current[i3 + 2] += velocities.current[i3 + 2] * 0.5
      
      // Update velocities
      velocities.current[i3] += (Math.random() - 0.5) * 0.001
      velocities.current[i3 + 1] += (Math.random() - 0.5) * 0.001
      velocities.current[i3 + 2] += (Math.random() - 0.5) * 0.001
      
      // Damping
      velocities.current[i3] *= 0.995
      velocities.current[i3 + 1] *= 0.995
      velocities.current[i3 + 2] *= 0.995
    }

    if (pointsRef.current.geometry.attributes.position) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={pointsRef} positions={positions.current}>
      <PointMaterial
        size={0.05}
        color="#ff3333"
        transparent
        opacity={0.8}
        vertexColors={false}
        sizeAttenuation={true}
      />
    </Points>
  )
}

const ParticleAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <ParticleSystem />
      </Canvas>
    </div>
  )
}

export default ParticleAnimation
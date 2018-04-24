import { Scene, PerspectiveCamera, WebGLRenderer } from "three";

export default function sceneFactory ({ width, height }) {

  const scene = new Scene()

  const fov = 45
  const aspect = width / height
  const near = 0.1
  const far = 1000
  const camera = new PerspectiveCamera(fov, aspect, near, far)

  const renderer = new WebGLRenderer({ antialias: true })
  renderer.setClearColor(0x000000, 1)
  renderer.setSize(width, height)

  return {
    scene,
    camera,
    renderer
  }
}
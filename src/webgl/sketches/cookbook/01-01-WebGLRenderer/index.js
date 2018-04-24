import { BoxGeometry, MeshNormalMaterial, Mesh } from "three"
import sceneFactory from '../../../modules/sceneFactory'

export default class Main {
  constructor(node) {
    const screenDimensions = {
      width: node.clientWidth,
      height: node.clientHeight
    }
    const { scene, camera, renderer } = sceneFactory(screenDimensions)
    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    node.appendChild(this.renderer.domElement)
   
    this.cube = this.buildCube()
    this.scene.add(this.cube)

    this.camera.position.set(15, 16, 13)
    this.camera.lookAt(this.scene.position)

    this.render()
  }

  buildCube () {
    const cubeGeometry = new BoxGeometry(10 * Math.random(), 10 * Math.random(), 10 * Math.random())
    const cubeMaterial = new MeshNormalMaterial()
    return new Mesh(cubeGeometry, cubeMaterial)
  }

  render () {
    this.renderer.render(this.scene, this.camera)
  }

}
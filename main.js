import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders/glTF';
import { Inspector } from '@babylonjs/inspector';

const canvas = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas);

const createScene = async function () {
  const scene = new BABYLON.Scene(engine);

  // scene.createDefaultCameraOrLight(true, false, true);
  // scene.createDefaultCamera();
  
  // scene.createDefaultLight();

  // Universal camera: Used for 1st person shooting games
  // const camera = new BABYLON.UniversalCamera('camera', new BABYLON.Vector3(0, 5, -10), scene);
  // camera.attachControl(true);
  // camera.inputs.addMouseWheel();
  // camera.setTarget(BABYLON.Vector3.Zero());

  // ARC rotate camera
  const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
  camera.attachControl(true);

  camera.setPosition(new BABYLON.Vector3(0, 0, -2));
  // camera.lowerBetaLimit = Math.PI / 4;
  // camera.upperBetaLimit = Math.PI / 2;

  // camera.lowerRadiusLimit = 20;
  // camera.upperRadiusLimit = 30;

  // To apply texture to each face we need to use the faceUV
  // const box = new BABYLON.MeshBuilder.CreateBox('myBox', {
  //   size: 0.5,
  //   // faceColors: [
  //   //   new BABYLON.Color4(1, 0, 0, 1),
  //   //   BABYLON.Color3.Green()
  //   // ]
  //   faceUV: [
  //     new BABYLON.Vector4(0, 0, 1/6, 1),
  //     new BABYLON.Vector4(1/6, 0, 2/6, 1),
  //     new BABYLON.Vector4(2/6, 0, 3/6, 1),
  //     new BABYLON.Vector4(3/6, 0, 4/6, 1),
  //     new BABYLON.Vector4(4/6, 0, 5/6, 1),
  //     new BABYLON.Vector4(5/6, 0, 6/6, 1),
  //   ],
  //   wrap: true
  // });
  // const boxCatMat = new BABYLON.StandardMaterial();
  // box.material = boxCatMat;
  // boxCatMat.emissiveTexture = new BABYLON.Texture('./cats.png');

   // Geometric transformations

  // box.position.x = 1;
  // box.position = new BABYLON.Vector3(-1, 0.5, 0);
  // box.rotation.x = Math.PI / 4;
  // box.rotation = new BABYLON.Vector3(0, 0, Math.PI/6);
  // box.scaling.x = 2;
  // box.scaling = new BABYLON.Vector3(2, 0.5, 1);

  const utilLayer = new BABYLON.UtilityLayerRenderer(scene);
  // const positionGizmo = new BABYLON.PositionGizmo(utilLayer);
  // positionGizmo.attachedMesh = box;
  // const rotationGizmo = new BABYLON.RotationGizmo(utilLayer);
  // rotationGizmo.attachedMesh = box;
  // const scaleGizmo = new BABYLON.ScaleGizmo(utilLayer);
  // scaleGizmo.attachedMesh = box;
  // const planeGizmo = new BABYLON.PlaneRotationGizmo(new BABYLON.Vector3(0, 1, 0), BABYLON.Color3.Red(), utilLayer);
  // planeGizmo.attachedMesh = box;

  const sphere = new BABYLON.MeshBuilder.CreateSphere('mysphere', {
    segments: 50,
    diameter: 0.3,
    diameterY: 0.4
  }, scene);
  sphere.position = new BABYLON.Vector3(1, 1.5, 0);

  // const sphereMaterial = new BABYLON.StandardMaterial();
  // sphere.material = sphereMaterial;

  // sphereMaterial.diffuseColor = new BABYLON.Color3(0, 1, 0);
  // sphereMaterial.specularColor = new BABYLON.Color3(1, 0, 0);
  // sphereMaterial.ambientColor = new BABYLON.Color3(0, 1, 1);
  // scene.ambientColor = new BABYLON.Color3(0, 1, 0.5);

  // Can see the color of the mesh even when their is no light
  // sphereMaterial.emissiveColor = new BABYLON.Color3(0, 1, 0);
  // sphereMaterial.alpha = 0.2; // Opacity of the mesh
  // sphereMaterial.wireframe = true;

  // Adding textures to the materials
  // sphereMaterial.diffuseTexture = new BABYLON.Texture('./wood_texture.jpg');
  // To show texture evem without the light source
  // sphereMaterial.emissiveTexture = new BABYLON.Texture('./wood_texture.jpg');

  const ground = new BABYLON.MeshBuilder.CreateGround('', {
    height: 5,
    width: 10,
    subdivisions: 5,
    subdivisionsX: 10
  });

  // ground.material = new BABYLON.StandardMaterial();
  // ground.material.wireframe = true;

  // const groundCatMat = new BABYLON.StandardMaterial();
  // ground.material = groundCatMat;
  // groundCatMat.emissiveTexture = new BABYLON.Texture('./cats.png');

  // We can use uoffset to move the texture left or right, voffset to move up or down, uScale to scale up or down
  // groundCatMat.emissiveTexture.uOffset = 1.4;

  // const groundFromHM = new BABYLON.MeshBuilder.CreateGroundFromHeightMap('', './public/Heightmap.png', {
  //   height: 10,
  //   width: 10,
  //   subdivisions: 50,
  //   maxHeight: 2
  // });
  // groundFromHM.material = new BABYLON.StandardMaterial();
  // groundFromHM.material.wireframe = true;

  // const fontData = await (await fetch('./Montserrat-Regular.json')).json();

  // const text = BABYLON.MeshBuilder.CreateText('', 'My Text', fontData, {
  //   size: 2,
  //   depth: 0.1,
  //   resolution: 64
  // });

  // Creating animation

  // scene.registerBeforeRender(function() {
  //   box.rotation.x += 0.01;
  //   box.rotation.y += 0.01;
  //   box.rotation.z += 0.01;
  // })

  // BABYLON.Animation.CreateAndStartAnimation(
  //   'xScaleAnimation',
  //   box,
  //   'scaling.x',
  //   30,
  //   120,
  //   0,
  //   2,
  //   BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
  //   new BABYLON.CircleEase
  // );

  // const animation = new BABYLON.Animation(
  //   'yRotAnimation',
  //   'rotation.y',
  //   30,
  //   BABYLON.Animation.ANIMATIONTYPE_FLOAT,
  //   BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
  // );
  // const animationKeys = [];
  // animationKeys.push({
  //   frame: 0,
  //   value: 0
  // });
  // animationKeys.push({
  //   frame: 120,
  //   value: 2*Math.PI
  // });
  // animation.setKeys(animationKeys);
  // box.animation = [];
  // box.animations.push(animation);
  // scene.beginAnimation(box, 0, 60, true);

  // Lights 

  // Point Light: Lamps
  // const light = new BABYLON.PointLight(
  //   'pointLight',
  //   new BABYLON.Vector3(0, 1, 0),
  //   scene
  // );

  // SpotLight: Stage Lights
  // const light = new BABYLON.SpotLight(
  //   'spotLight',
  //   new BABYLON.Vector3(0, 1, 0),
  //   new BABYLON.Vector3(0, -1, 0),
  //   Math.PI/3,
  //   2,
  //   scene
  // );
  // light.range = 10;

  // DirectionalLight: SunLight
  const light = new BABYLON.DirectionalLight(
    'directionalLight',
    new BABYLON.Vector3(-2, -3, 0),
    scene
  );
  light.intensity = 1;

  // HemisphericalLight: Sky
  // const light = new BABYLON.HemisphericLight(
  //   'hemisphericalLight',
  //   new BABYLON.Vector3(-5, 5, 0),
  //   scene
  // );
  // light.groundColor = new BABYLON.Color3(0, 1, 0);
  // light.diffuse = new BABYLON.Color3(0, 0, 1);
  // light.specular = new BABYLON.Color3(0, 1, 0);

  const lightGizmo = new BABYLON.LightGizmo(utilLayer);
  lightGizmo.light = light;

  // Adding Shadows

  const shadowGenerator = new BABYLON.ShadowGenerator(1024, light);

  shadowGenerator.addShadowCaster(sphere);
  ground.receiveShadows = true;

  // shadowGenerator.setDarkness(0.5);
  shadowGenerator.useBlurExponentialShadowMap = true;
  shadowGenerator.useKernelBlur = true;
  shadowGenerator.blurKernel = 64;

  // Adding FOG

  // scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
  // scene.fogStart = 10;
  // scene.fogEnd = 60;
  
  scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
  scene.fogDensity = 0.08;
  scene.fogColor = new BABYLON.Color3(0.3, 0.2, 0.6);

  // Picking Objects

  scene.onPointerDown = function castRay() {
    const hit = scene.pick(scene.pointerX, scene.pointerY);

    if (hit.pickedMesh && hit.pickedMesh.name == 'mysphere') {
      hit.pickedMesh.material = new BABYLON.StandardMaterial();
      hit.pickedMesh.material.diffuseColor = BABYLON.Color3.Red();
    }
  }

  // Importing models

  BABYLON.SceneLoader.ImportMesh(
    '',
    '/',
    'Cow.gltf',
    scene,
    function(meshes, particleSystems, skeletons, animationGroups) {
      const model = meshes[0];
      model.scaling = new BABYLON.Vector3(0.25, 0.25, 0.25);

      animationGroups[5].play(true);
    }
  );

  BABYLON.SceneLoader.ImportMeshAsync('', '/', 'Cow.gltf', scene).then((result) => {
    const importedAnimGroups = result.animationGroups;
    importedAnimGroups[3].play(true);
  });

  // Adding sound

  // const bgMusic = new BABYLON.Sound('mySong', '/DivKid.mp3', scene, null, {
  //   loop: true,
  //   autoplay: true,
  //   volume: 2
  // });

  return scene;
}

const scene = await createScene();

// By using the loop we are telling the engine to render at 60 frames per second
engine.runRenderLoop(function() {

  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
});


// Adding Inspector

Inspector.Show(scene, {});
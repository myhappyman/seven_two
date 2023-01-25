# Three js를 React에서 활용해보기

# 1. 필요 설치

-three 설치
`npm install three`

-fiber설치
`npm install three @react-three/fiber`

-drei 설치
`npm install @react-three/drei`

# THREE JS

- three js는 3차원 객체로 구성된 장면(Scene)들이 있습니다.
  해당 장면들을 출력해줘야하는데 출력을 도와주는 Renderer가 있습니다.
  이 Renderer가 출력을 어떤 장면에서 보여주냐에따라 다양한 시점으로 보이는데 이 장면의 시점은 카메로 정의합니다.

또 장면은 Light와 3차원 모델 Mesh로 구성되는데, 3차원의 형상이 화면에 표시되기 위해서는 광원이 필요하여 Light속성이 필요합니다.
없다면 검은색으로만 보이거나 흰색으로만 보임.

Mesh는 Object3D의 파생 클래스로 형상을 정의하는 Geometry와 색상, 투명도를 정의하는 Material로 정의됩니다.

Renderer > Scene, Camera

Scene > Light, Mesh

Mesh > GeoMetry, Material

```Text

                                       Light
                Scene                          GeoMetry
Renderer                               Mesh
                Camera                         Material

```

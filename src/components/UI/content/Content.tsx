import { ContentStyle } from './content.style';
import { useAppSelector } from 'redux/hook';
import { tableOfContentsSelector } from 'redux/tableOfContentsSelector';
import Picture from 'components/UI/picture/Picture';
import Breadcrumb from 'components/UI/breadcrumb/Breadcrumb';
// import * as THREE from 'three';
import * as React from 'react';
// import { Canvas } from '@react-three/fiber';

// const Box = (props: MeshProps) => {
//     // This reference will give us direct access to the THREE.Mesh object
//     const ref = useRef<THREE.Mesh>(null!);
//     // Hold state for hovered and clicked events
//     const [hovered, hover] = useState(false);
//     const [clicked, click] = useState(false);
//     // Rotate mesh every frame, this is outside of React without overhead
//     // useFrame((state, delta) => (ref.current.rotation.x += 0.01));

//     return (
//         <mesh
//             {...props}
//             ref={ref}
//             scale={clicked ? 1.5 : 1}
//             onClick={(event) => click(!clicked)}
//             onPointerOver={(event) => hover(true)}
//             onPointerOut={(event) => hover(false)}
//         >
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//         </mesh>
//     );
// }
export default function Content() {
    const { pictureOfLesson, chapterLesson, widthSidebarHook } =
        useAppSelector(tableOfContentsSelector);
    return (
        <ContentStyle>
            <div
                id="content"
                style={{
                    width: `calc(${window.innerWidth}px - ${widthSidebarHook}px)`,
                    left: `${widthSidebarHook}px`,
                }}
            >
                <Breadcrumb chapterLesson={chapterLesson}></Breadcrumb>
                <Picture pictureOfLesson={pictureOfLesson}></Picture>
            </div>
            {/* <Canvas>
                <pointLight position={[10, 10, 10]} />
                <mesh>
                    <sphereGeometry />
                    <meshStandardMaterial color="hotpink" />
                </mesh>
            </Canvas> */}
        </ContentStyle>
    );
}

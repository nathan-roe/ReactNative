import React from 'react';
import {SvgXml} from 'react-native-svg';

export default function SvgTest(){
    const home = `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="bi bi-house">
        <g>
        <title>Layer 1</title>
        <path stroke="null" id="svg_2" d="m7.44107,1.57527a0.85664,0.77804 0 0 1 1.21129,0l5.69407,5.17088a0.42832,0.38902 0 0 1 -0.6065,0.55086l-5.69322,-5.17166l-5.69322,5.17166a0.42832,0.38902 0 1 1 -0.6065,-0.55086l5.69407,-5.17088z" fill-rule="evenodd"/>
        <rect stroke="null" id="svg_4" height="5.00234" width="0.84151" y="5.82609" x="3.11454" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="null" fill="null"/>
        <rect stroke="null" id="svg_5" height="5.09584" width="0.84151" y="5.82609" x="12.0907" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="null" fill="null"/>
        <rect stroke="null" id="svg_7" height="0.74801" width="8.78915" y="10.54792" x="3.67555" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="null" fill="null"/>
        <ellipse ry="0.53763" rx="0.49088" id="svg_8" cy="10.7583" cx="3.60542" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="null" stroke="null" fill="null"/>
        <ellipse ry="0.53763" rx="0.49088" id="svg_10" cy="10.7583" cx="12.44133" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="null" stroke="null" fill="null"/>
        <text font-style="normal" font-weight="normal" xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="3" id="svg_11" y="14.61524" x="4.33006" opacity="undefined" fill-opacity="null" stroke-opacity="null" stroke-dasharray="null" stroke-width="10" stroke="null" fill="#000000">Home</text>
        </g>
    </svg>`

    const HomeSvg = () => {return <SvgXml xml={home} width='50%' height='50%'/>};
    console.log(<HomeSvg/>);
    return <HomeSvg />;
}

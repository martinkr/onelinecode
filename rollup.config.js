import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';
import { eslint } from "rollup-plugin-eslint";
import banner from 'rollup-plugin-banner'



export default {
    input: './src/index.js',
    output: [
        { file: "./dist/index.js", format: "umd", name: 'onelinecode', plugins: [terser()] },
        { file: "./dist/index.cjs.js", format: "cjs", plugins: [terser()] },
        { file: "./dist/index.esm.js", format: "esm", plugins: [terser()] },
    ],
    plugins: [
        eslint(), terser(), banner('! onelinecode v<%= pkg.version %>')
        , analyze({ summaryOnly: true })
    ]
};


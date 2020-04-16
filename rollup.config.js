import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import rp2 from "rollup-plugin-typescript2";
import serve from "rollup-plugin-serve";
import rollupHtml from "@rollup/plugin-html";
import replace from "@rollup/plugin-replace";
const isProduction = process.env.NODE_ENV === "production";

/**
 * @type { import('rollup').RollupOptions}
 */
const options = {
  input: "src/index.tsx",
  output: {
    dir: "build/",
    format: "esm",
    name: "app",
    entryFileNames: isProduction ? "[name].[hash].js" : "[name].js",
    chunkFileNames: "chunk.[hash].js",
  },
  plugins: [
    rp2(),
    commonjs({ extensions: [".js", ".ts", ".tsx", ".jsx"] }),
    resolve(),
    replace({
      "process.env.NODE_ENV": process.env.NODE_ENV,
    }),
    rollupHtml({ publicPath: "/" }),
    !isProduction && serve("build"),
    livereload(),
  ],
};

export default options;

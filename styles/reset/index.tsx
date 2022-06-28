import { createGlobalStyle } from "styled-components";

/**
 * minireset.css を使用
 * https://jgthms.com/minireset.css/
 */
const reset =
  // eslint-disable-next-line max-len
  "/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6 {margin: 0;padding: 0;}h1,h2,h3,h4,h5,h6 {font-size: 100%;font-weight: normal;}ul {list-style: none;}button,input,select {margin: 0;}html {box-sizing: border-box;} *, *::before, *::after {box-sizing: inherit;}img,video{height: auto;max-width: 100%;}iframe {border: 0;}table {border-collapse: collapse;border-spacing: 0;}td,th {padding: 0;};";

const resetInput = `button,
input[type="submit"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
}`;

export const ResetStyle = createGlobalStyle`
  ${reset}
  ${resetInput}
`;

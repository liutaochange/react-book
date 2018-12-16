import { createGlobalStyle } from 'styled-components'

export const GlobalIcon = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1544952809205'); /* IE9*/
    src: url('iconfont.eot?t=1544952809205#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('iconfont.ttf?t=1544952809205') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('iconfont.svg?t=1544952809205#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-fangdajing:before { content: "\e60a"; }

  .icon-28:before { content: "\e6dd"; }

  .icon-qianbi:before { content: "\e603"; }

  .icon-Aa:before { content: "\e636"; }
`

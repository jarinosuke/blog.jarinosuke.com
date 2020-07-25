import Typography from "typography"
import '../components/layout.css'

const fontNames = [
  "-apple-system",
  "SF Pro JP",
  "SF Pro Display",
  "SF Pro Icons",
  "Hiragino Kaku Gothic Pro",
  "ヒラギノ角ゴ Pro W3",
  "メイリオ",
  "Meiryo",
  "ＭＳ Ｐゴシック",
  "Helvetica Neue",
  "Helvetica",
  "Arial",
  "sans-serif",
];

const typography = new Typography({
  baseFontSize: 20,
  baseLineHeight: 1.6,
  headerColor: 'var(--textTitle)',
  headerFontFamily: fontNames,
  headerWeight: 700,
  bodyColor: 'var(--textNormal)',
  bodyFontFamily: fontNames,
  bodyWeight: 400,
  overrideThemeStyles: () => ({
    a: {
      color: 'var(--textLink)',
    },
    hr: {
      background: 'var(--hr)',
    },
    svg: {
      fill: 'var(--textNormal)'
    }
  }),
})



// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
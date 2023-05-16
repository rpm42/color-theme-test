export interface ColorTheme {
  background: string
  textColor: string
}

export interface FontTheme {
  bodyFamily: string
  headeramily: string
  bodyWeight: number
  boldWeight: number
  headerWeight: number
  bodySize: number
}

export const COLOR_THEMES = {
  light: {
    background: 'white',
    textColor: 'black'
  },
  dark: {
    background: 'black',
    textColor: 'white'
  },
  green: {
    background: 'green',
    textColor: 'yellow'
  },
  cyan: {
    background: 'cyan',
    textColor: 'brown'
  }
}

export const FONT_THEMES = {
  roboto: {
    bodyFamily: 'Roboto',
    headeramily: 'Roboto Slab',
    bodyWeight: 400,
    boldWeight: 600,
    headerWeight: 600,
    bodySize: 18
  },
  noto: {
    bodyFamily: 'Noto Serif',
    headeramily: 'Noto Sans',
    bodyWeight: 400,
    boldWeight: 600,
    headerWeight: 600,
    bodySize: 18
  }
}

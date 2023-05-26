import type { Config } from 'tailwindcss'

import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'
import tailwindAspectRatio from '@tailwindcss/aspect-ratio'
import tailwindContainerQueries from '@tailwindcss/container-queries'



export default <Partial<Config>>{
  content: ['./src/**/*.vue', './src/**/*.ts', './src/**/*.js', './src/**/*.html'],
  safelist: [
    "albert-bold",
    'font-bold',
    'font-normal',
    'underline',
    'underline-offset-4',
    'bg-hslu_medium_green',
    'bg-hslu_medium_magenta',
    'bg-hslu_medium_yellow',
    'col-auto',
    'col-span-full',
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'col-span-4',
    'col-span-5',
    'col-span-6',
    'col-span-7',
    'col-span-8',
    'col-span-9',
    'col-span-10',
    'col-span-11',
    'col-span-12',
    'col-span-13',
    'col-span-14',
    'col-span-15',
    'min-h-19',
    'min-h-33',
    'min-h-52'
  ],
  theme: {
    extend: {
      colors: {
        hslu_lighter_blue: 'rgb(218, 238, 243)',
        hslu_light_blue: 'rgb(186, 224, 234)',
        hslu_medium_blue: 'rgb(119,197,216)',
        hslu_dark_blue: 'rgb(68, 157, 194)',
        hslu_darker_blue: 'rgb(32, 106, 138)',

        hslu_lighter_green: 'rgb(233,240,193)',
        hslu_light_green: 'rgb(214,226,140)',
        hslu_medium_green: 'rgb(173,202,42)',
        hslu_dark_green: 'rgb(125,158,56)',
        hslu_darker_green: 'rgb(56,105,57)',

        hslu_lighter_magenta: 'rgb(251,208,211)',
        hslu_light_magenta: 'rgb(246,169,178)',
        hslu_medium_magenta: 'rgb(236,90,122)',
        hslu_dark_magenta: 'rgb(187,54,93)',
        hslu_darker_magenta: 'rgb(159,48,77)',

        hslu_lighter_yellow: 'rgb(255,240,190)',
        hslu_light_yellow: 'rgb(255,224,134)',
        hslu_medium_yellow: 'rgb(252,195,0)',
        hslu_dark_yellow: 'rgb(247,163,21)',
        hslu_darker_yellow: 'rgb(212,127,28)',

        hslu_light_grey: 'rgb(240, 240, 240)',
        hslu_medium_grey: 'rgb(223, 226, 229)',
        hslu_dark_grey: 'rgb(217, 217, 217)',

        hslu_transparent_grey: 'rgba(white, 0.4)',
        hslu_transparent_white: 'rgba(white, 0.7)',
        hslu_white: '#ffffff',
        hslu_black: '#000'
      },
      fontFamily: {
        "albert": ['FS-Albert', "Helvetica"]
      }
    }
  },
  plugins: [
    tailwindTypography,
    tailwindForms,
    tailwindAspectRatio,
    tailwindContainerQueries
  ]
}




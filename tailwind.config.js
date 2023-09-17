/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'vn-yellow': '#C9BB5A',
        'vn-gray-yellow': '#DFDDCF',
        'vn-white': '#F8F8F8',
        'vn-black-one': '#292E2C',
        'vn-black-mid': '#161716',
        'vn-black-two': '#101010',
        'vn-red-one': '#C76969',
        'vn-red-mid': '#D63838',
        'vn-red-two': '#E02F2F',
        'vn-blue-one': '#8BCDFF',
        'vn-blue-mid': '#78AAFF',
        'vn-blue-two': '#6888F3',
        'vn-yellow-one': '#D9C74B',
        'vn-yellow-two': '#DFCF5E'
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        '-1': -1
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        '75vh': '75vh',
        '80vh': '80vh',
        '80px': '80px'
      },
      fontFamily: {
        NetLulo: ['NetLuloW01OneBold', 'Arial', 'sans-serif'],
        Inter: ['Inter', 'Arial', 'sans-serif'],
        NeoGram: ['NeoGram', 'Arial', 'sans-serif']
      }
    }
  }
}

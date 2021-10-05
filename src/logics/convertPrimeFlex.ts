// TODO: PrimeFlex Grid and Grid Extensions
// Status: Done
// https://www.primefaces.org/primeflex/gridsystem

// Background colors with PrimeVue
// Status: Done
// https://www.primefaces.org/primeflex/backgroundcolor
// bg-primary, surface colors

// Border Radius - PrimeVue
// Status: Done
// https://www.primefaces.org/primeflex/borderradius

// Border Width - Various
// Status: Done
// https://www.primefaces.org/primeflex/borderwidth

// Border Color - PrimeVue
// Status: Done
// https://www.primefaces.org/primeflex/bordercolor

// Width
// Status: Done
// min-w-screen - min-width: 100vw;
// Missing Widths
// https://www.primefaces.org/primeflex/width

// Missing Heights
// Status: Done
// https://www.primefaces.org/primeflex/height

// Text colors with PrimeVue
// Status: Done
// https://www.primefaces.org/primeflex/backgroundcolor
// text-primary, surface colors

// Missing Transition durations
// Status: Done
// https://www.primefaces.org/primeflex/transitionduration

// Missing Animations & Durations
// Status: Don't use; can be added to TW/Windi later if needed.
// https://www.primefaces.org/primeflex/animations
// https://www.primefaces.org/primeflex/animationduration
// https://www.primefaces.org/primeflex/animationdelay
// https://www.primefaces.org/primeflex/animationiteration
// https://www.primefaces.org/primeflex/animationtimingfunction
// https://www.primefaces.org/primeflex/animationfill

const primeFlexMap = {
  // layout: top / right / bottom / left
  'top-50': 'top-1/2',
  'top-100': 'top-full',
  'right-50': 'right-1/2',
  'right-100': 'right-full',
  'bottom-50': 'bottom-1/2',
  'bottom-100': 'bottom-full',
  'left-50': 'left-1/2',
  'left-100': 'left-full',

  // layout: z-index
  'z-1': 'z-10',
  'z-2': 'z-20',
  'z-3': 'z-30',
  'z-4': 'z-40',
  'z-5': 'z-50',

  // flexbox: direction
  'flex-column': 'flex-col',
  'flex-column-reverse': 'flex-col-reverse',

  // flexbox: grow
  'flex-grow-1': 'flex-grow',

  // flexbox: shrink
  'flex-shrink-1': 'flex-shrink',

  // flexbox: order
  'flex-order-0': 'order-0',
  'flex-order-1': 'order-1',
  'flex-order-2': 'order-2',
  'flex-order-3': 'order-3',
  'flex-order-4': 'order-4',
  'flex-order-5': 'order-5',
  'flex-order-6': 'order-6',

  // flexbox: justify content
  'justify-content-start': 'justify-start',
  'justify-content-end': 'justify-end',
  'justify-content-center': 'justify-center',
  'justify-content-between': 'justify-between',
  'justify-content-around': 'justify-around',
  'justify-content-evenly': 'justify-evenly',

  // flexbox: align content
  'align-content-start': 'content-start',
  'align-content-end': 'content-end',
  'align-content-center': 'content-center',
  'align-content-between': 'content-between',
  'align-content-around': 'content-around',
  'align-content-evenly': 'content-evenly',

  // flexbox: align items
  'align-items-start': 'items-start',
  'align-items-end': 'items-end',
  'align-items-center': 'items-center',
  'align-items-baseline': 'items-baseline',
  'align-items-stretch': 'items-stretch',

  // flexbox: align self
  'align-self-start': 'self-start',
  'align-self-end': 'self-end',
  'align-self-center': 'self-center',
  'align-self-between': 'self-between',
  'align-self-around': 'self-around',
  'align-self-evenly': 'self-evenly',

  // border radius
  'border-circle': 'rounded-full',
  'border-noround': 'rounded-none',
  'border-round': 'rounded-var',
  'border-round-left': 'rounded-l-var',
  'border-round-top': 'rounded-t-var',
  'border-round-bottom': 'rounded-b-var',
  'border-round-right': 'rounded-r-var',

  // border widths
  'border-none': 'border-0',
  'border-top-none': 'border-t-0',
  'border-top-1': 'border-t',
  'border-top-2': 'border-t-2',
  'border-top-3': 'border-t-3',
  'border-left-none': 'border-l-0',
  'border-left-1': 'border-l',
  'border-left-2': 'border-l-2',
  'border-left-3': 'border-l-3',
  'border-bottom-none': 'border-b-0',
  'border-bottom-1': 'border-b',
  'border-bottom-2': 'border-b-2',
  'border-bottom-3': 'border-b-3',
  'border-right-none': 'border-r-0',
  'border-right-1': 'border-r',
  'border-right-2': 'border-r-2',
  'border-right-3': 'border-r-3',

  'border-x-none': 'border-l-0 border-r-0',
  'border-x-1': 'border-l border-r',
  'border-x-2': 'border-l-2 border-r-2',
  'border-x-3': 'border-l-3 border-r-3',
  'border-y-none': 'border-t-0 border-b-0',
  'border-y-1': 'border-t border-b',
  'border-y-2': 'border-t-2 border-b-2',
  'border-y-3': 'border-t-3 border-b-3',

  // border color
  'border-0': 'border-surface-0',
  'border-50': 'border-surface-50',
  'border-100': 'border-surface-100',
  'border-200': 'border-surface-200',
  'border-300': 'border-surface-300',
  'border-400': 'border-surface-400',
  'border-500': 'border-surface-500',
  'border-600': 'border-surface-600',
  'border-700': 'border-surface-700',
  'border-800': 'border-surface-800',
  'border-900': 'border-surface-900',

  // padding
  'p-8': 'p-20',
  'p-7': 'p-16',
  'p-6': 'p-12',
  'p-5': 'p-8',
  'p-4': 'p-6',
  'p-3': 'p-4',
  'pt-8': 'pt-20',
  'pt-7': 'pt-16',
  'pt-6': 'pt-12',
  'pt-5': 'pt-8',
  'pt-4': 'pt-6',
  'pt-3': 'pt-4',
  'pr-8': 'pr-20',
  'pr-7': 'pr-16',
  'pr-6': 'pr-12',
  'pr-5': 'pr-8',
  'pr-4': 'pr-6',
  'pr-3': 'pr-4',
  'pb-8': 'pb-20',
  'pb-7': 'pb-16',
  'pb-6': 'pb-12',
  'pb-5': 'pb-8',
  'pb-4': 'pb-6',
  'pb-3': 'pb-4',
  'pl-8': 'pl-20',
  'pl-7': 'pl-16',
  'pl-6': 'pl-12',
  'pl-5': 'pl-8',
  'pl-4': 'pl-6',
  'pl-3': 'pl-4',
  'px-8': 'px-20',
  'px-7': 'px-16',
  'px-6': 'px-12',
  'px-5': 'px-8',
  'px-4': 'px-6',
  'px-3': 'px-4',
  'py-8': 'py-20',
  'py-7': 'py-16',
  'py-6': 'py-12',
  'py-5': 'py-8',
  'py-4': 'py-6',
  'py-3': 'py-4',

  // margin
  'm-8': 'm-20',
  'm-7': 'm-16',
  'm-6': 'm-12',
  'm-5': 'm-8',
  'm-4': 'm-6',
  'm-3': 'm-4',
  'mt-8': 'mt-20',
  'mt-7': 'mt-16',
  'mt-6': 'mt-12',
  'mt-5': 'mt-8',
  'mt-4': 'mt-6',
  'mt-3': 'mt-4',
  'mr-8': 'mr-20',
  'mr-7': 'mr-16',
  'mr-6': 'mr-12',
  'mr-5': 'mr-8',
  'mr-4': 'mr-6',
  'mr-3': 'mr-4',
  'mb-8': 'mb-20',
  'mb-7': 'mb-16',
  'mb-6': 'mb-12',
  'mb-5': 'mb-8',
  'mb-4': 'mb-6',
  'mb-3': 'mb-4',
  'ml-8': 'ml-20',
  'ml-7': 'ml-16',
  'ml-6': 'ml-12',
  'ml-5': 'ml-8',
  'ml-4': 'ml-6',
  'ml-3': 'ml-4',
  'mx-8': 'mx-20',
  'mx-7': 'mx-16',
  'mx-6': 'mx-12',
  'mx-5': 'mx-8',
  'mx-4': 'mx-6',
  'mx-3': 'mx-4',
  'my-8': 'my-20',
  'my-7': 'my-16',
  'my-6': 'my-12',
  'my-5': 'my-8',
  'my-4': 'my-6',
  'my-3': 'my-4',

  // Remove min width screen
  'min-w-screen': '',

  // widths
  'w-1"': 'w-1/12"',
  'w-2"': 'w-2/12"',
  'w-3"': 'w-3/12"',
  'w-4"': 'w-4/12"',
  'w-5"': 'w-5/12"',
  'w-6"': 'w-6/12"',
  'w-7"': 'w-7/12"',
  'w-8"': 'w-8/12"',
  'w-9"': 'w-9/12"',
  'w-10"': 'w-10/12"',
  'w-11"': 'w-11/12"',
  'w-12"': 'w-full"',
  'w-1 ': 'w-1/12 ',
  'w-2 ': 'w-2/12 ',
  'w-3 ': 'w-3/12 ',
  'w-4 ': 'w-4/12 ',
  'w-5 ': 'w-5/12 ',
  'w-6 ': 'w-6/12 ',
  'w-7 ': 'w-7/12 ',
  'w-8 ': 'w-8/12 ',
  'w-9 ': 'w-9/12 ',
  'w-10 ': 'w-10/12 ',
  'w-11 ': 'w-11/12 ',
  'w-12 ': 'w-full ',
  'w-1\'': 'w-1/12\'',
  'w-2\'': 'w-2/12\'',
  'w-3\'': 'w-3/12\'',
  'w-4\'': 'w-4/12\'',
  'w-5\'': 'w-5/12\'',
  'w-6\'': 'w-6/12\'',
  'w-7\'': 'w-7/12\'',
  'w-8\'': 'w-8/12\'',
  'w-9\'': 'w-9/12\'',
  'w-10\'': 'w-10/12\'',
  'w-11\'': 'w-11/12\'',
  'w-12\'': 'w-full\'',

  'w-1rem': 'w-4',
  'w-2rem': 'w-8',
  'w-3rem': 'w-12',
  'w-4rem': 'w-16',
  'w-5rem': 'w-20',
  'w-6rem': 'w-24',
  'w-7rem': 'w-28',
  'w-8rem': 'w-32',
  'w-9rem': 'w-36',
  'w-10rem': 'w-40',
  'w-11rem': 'w-44',
  'w-12rem': 'w-48',
  'w-13rem': 'w-52',
  'w-14rem': 'w-56',
  'w-15rem': 'w-60',
  'w-16rem': 'w-64',
  'w-17rem': 'w-68',
  'w-18rem': 'w-72',
  'w-19rem': 'w-76',
  'w-20rem': 'w-80',
  'w-21rem': 'w-84',
  'w-22rem': 'w-88',
  'w-23rem': 'w-92',
  'w-24rem': 'w-96',
  'w-25rem': 'w-100',
  'w-26rem': 'w-104',
  'w-27rem': 'w-108',
  'w-28rem': 'w-112',
  'w-29rem': 'w-116',
  'w-30rem': 'w-120',

  'h-1rem': 'h-4',
  'h-2rem': 'h-8',
  'h-3rem': 'h-12',
  'h-4rem': 'h-16',
  'h-5rem': 'h-20',
  'h-6rem': 'h-24',
  'h-7rem': 'h-28',
  'h-8rem': 'h-32',
  'h-9rem': 'h-36',
  'h-10rem': 'h-40',
  'h-11rem': 'h-44',
  'h-12rem': 'h-48',
  'h-13rem': 'h-52',
  'h-14rem': 'h-56',
  'h-15rem': 'h-60',
  'h-16rem': 'h-64',
  'h-17rem': 'h-68',
  'h-18rem': 'h-72',
  'h-19rem': 'h-76',
  'h-20rem': 'h-80',
  'h-21rem': 'h-84',
  'h-22rem': 'h-88',
  'h-23rem': 'h-92',
  'h-24rem': 'h-96',
  'h-25rem': 'h-100',
  'h-26rem': 'h-104',
  'h-27rem': 'h-108',
  'h-28rem': 'h-112',
  'h-29rem': 'h-116',
  'h-30rem': 'h-120',

  // fonts
  'font-italic': 'italic',

  // line-height
  'line-height-1': 'leading-none',
  'line-height-2': 'leading-tight',
  'line-height-3': 'leading-normal',
  'line-height-4': 'leading-loose',

  // whitespace
  'white-space-normal': 'whitespace-normal',
  'white-space-nowrap': 'whitespace-nowrap',

  // shadow
  'shadow-none': 'shadow-none',
  'shadow-1': 'shadow',
  'shadow-2': 'shadow-md',
  'shadow-3': 'shadow-md',
  'shadow-4': 'shadow-lg',
  'shadow-5': 'shadow-lg',
  'shadow-6': 'shadow-xl',
  'shadow-7': 'shadow-2xl',
  'shadow-8': 'shadow-2xl',

  'transition-duration-100': 'duration-100',
  'transition-duration-150': 'duration-150',
  'transition-duration-200': 'duration-200',
  'transition-duration-300': 'duration-300',
  'transition-duration-400': 'duration-400', // add
  'transition-duration-500': 'duration-500',
  'transition-duration-1000': 'duration-1000',
  'transition-duration-2000': 'duration-2000', // add
  'transition-duration-3000': 'duration-3000', // add

  'transition-linear': 'ease-linear',
  'transition-ease-in': 'ease-in',
  'transition-ease-out': 'ease-out',
  'transition-ease-in-out': 'ease-in-out',

  'transition-delay-100': 'delay-100',
  'transition-delay-150': 'delay-150',
  'transition-delay-200': 'delay-200',
  'transition-delay-300': 'delay-300',
  'transition-delay-400': 'delay-400', // add
  'transition-delay-500': 'delay-500',
  'transition-delay-1000': 'delay-1000',

  'translate-x-100': 'translate-x-full',
  '-translate-x-100': '-translate-x-full',
  'translate-y-100': 'translate-y-full',
  '-translate-y-100': '-translate-y-full',

  'grid': 'pf-grid',
  'col': 'pf-col',
}

// https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
function replaceAll(str: string, mapObj: any) {
  const re = new RegExp(Object.keys(mapObj).join('|'), 'gi')

  return str.replace(re, (matched) => {
    return mapObj[matched.toLowerCase()]
  })
}

export function convertPrimeFlex(str: string) {
  return replaceAll(str, primeFlexMap)
}

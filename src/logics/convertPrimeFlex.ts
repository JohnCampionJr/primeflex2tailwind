// Current through 10/18/21 commits to PrimeFlex

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

  // primeflex 3.2.0 extra border radiuses
  'border-round-xs': 'rounded-sm',
  'border-round-sm': 'rounded',
  'border-round-md': 'rounded-md',
  'border-round-lg': 'rounded-lg',
  'border-round-xl': 'rounded-xl',
  'border-round-2xl': 'rounded-2xl',
  'border-round-3xl': 'rounded-3xl',

  'border-round-left-xs': 'rounded-l-sm',
  'border-round-left-sm': 'rounded-l',
  'border-round-left-md': 'rounded-l-md',
  'border-round-left-lg': 'rounded-l-lg',
  'border-round-left-xl': 'rounded-l-xl',
  'border-round-left-2xl': 'rounded-l-2xl',
  'border-round-left-3xl': 'rounded-l-3xl',

  'border-round-top-xs': 'rounded-t-sm',
  'border-round-top-sm': 'rounded-t',
  'border-round-top-md': 'rounded-t-md',
  'border-round-top-lg': 'rounded-t-lg',
  'border-round-top-xl': 'rounded-t-xl',
  'border-round-top-2xl': 'rounded-t-2xl',
  'border-round-top-3xl': 'rounded-t-3xl',

  'border-round-right-xs': 'rounded-r-sm',
  'border-round-right-sm': 'rounded-r',
  'border-round-right-md': 'rounded-r-md',
  'border-round-right-lg': 'rounded-r-lg',
  'border-round-right-xl': 'rounded-r-xl',
  'border-round-right-2xl': 'rounded-r-2xl',
  'border-round-right-3xl': 'rounded-r-3xl',

  'border-round-bottom-xs': 'rounded-b-sm',
  'border-round-bottom-sm': 'rounded-b',
  'border-round-bottom-md': 'rounded-b-md',
  'border-round-bottom-lg': 'rounded-b-lg',
  'border-round-bottom-xl': 'rounded-b-xl',
  'border-round-bottom-2xl': 'rounded-b-2xl',
  'border-round-bottom-3xl': 'rounded-b-3xl',

  'border-noround-left': '',
  'border-noround-top': '',
  'border-noround-right': '',
  'border-noround-bottom': '',
  'border-circle-left': '',
  'border-circle-top': '',
  'border-circle-right': '',
  'border-circle-bottom': '',

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
  'border-x-1': 'border-x',
  'border-x-2': 'border-x-2',
  'border-x-3': 'border-x-3',
  'border-y-none': 'border-y-0',
  'border-y-1': 'border-y',
  'border-y-2': 'border-y-2',
  'border-y-3': 'border-y-3',

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

  // negative margins
  '-m-8': '-m-20',
  '-m-7': '-m-16',
  '-m-6': '-m-12',
  '-m-5': '-m-8',
  '-m-4': '-m-6',
  '-m-3': '-m-4',
  '-mt-8': '-mt-20',
  '-mt-7': '-mt-16',
  '-mt-6': '-mt-12',
  '-mt-5': '-mt-8',
  '-mt-4': '-mt-6',
  '-mt-3': '-mt-4',
  '-mr-8': '-mr-20',
  '-mr-7': '-mr-16',
  '-mr-6': '-mr-12',
  '-mr-5': '-mr-8',
  '-mr-4': '-mr-6',
  '-mr-3': '-mr-4',
  '-mb-8': '-mb-20',
  '-mb-7': '-mb-16',
  '-mb-6': '-mb-12',
  '-mb-5': '-mb-8',
  '-mb-4': '-mb-6',
  '-mb-3': '-mb-4',
  '-ml-8': '-ml-20',
  '-ml-7': '-ml-16',
  '-ml-6': '-ml-12',
  '-ml-5': '-ml-8',
  '-ml-4': '-ml-6',
  '-ml-3': '-ml-4',
  '-mx-8': '-mx-20',
  '-mx-7': '-mx-16',
  '-mx-6': '-mx-12',
  '-mx-5': '-mx-8',
  '-mx-4': '-mx-6',
  '-mx-3': '-mx-4',
  '-my-8': '-my-20',
  '-my-7': '-my-16',
  '-my-6': '-my-12',
  '-my-5': '-my-8',
  '-my-4': '-my-6',
  '-my-3': '-my-4',

  // Remove min width screen
  'min-w-screen': '',

  // widths
  'w-1': 'w-1/12',
  'w-2': 'w-2/12',
  'w-3': 'w-3/12',
  'w-4': 'w-4/12',
  'w-5': 'w-5/12',
  'w-6': 'w-6/12',
  'w-7': 'w-7/12',
  'w-8': 'w-8/12',
  'w-9': 'w-9/12',
  'w-10': 'w-10/12',
  'w-11': 'w-11/12',
  'w-12': 'w-full',

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
  'grid-nogutter': 'pf-grid-nogutter',
  'col': 'pf-col',
  'col-fixed': 'pf-col-fixed',
  'col-1': 'pf-col-1',
  'col-2': 'pf-col-2',
  'col-3': 'pf-col-3',
  'col-4': 'pf-col-4',
  'col-5': 'pf-col-5',
  'col-6': 'pf-col-6',
  'col-7': 'pf-col-7',
  'col-8': 'pf-col-8',
  'col-9': 'pf-col-9',
  'col-10': 'pf-col-10',
  'col-11': 'pf-col-11',
  'col-12': 'pf-col-12',
  'col-offset-1': 'pf-col-offset-1',
  'col-offset-2': 'pf-col-offset-2',
  'col-offset-3': 'pf-col-offset-3',
  'col-offset-4': 'pf-col-offset-4',
  'col-offset-5': 'pf-col-offset-5',
  'col-offset-6': 'pf-col-offset-6',
  'col-offset-7': 'pf-col-offset-7',
  'col-offset-8': 'pf-col-offset-8',
  'col-offset-9': 'pf-col-offset-9',
  'col-offset-10': 'pf-col-offset-10',
  'col-offset-11': 'pf-col-offset-11',
  'col-offset-12': 'pf-col-offset-12',

  'text-overflow-clip': 'overflow-clip',
  'text-overflow-ellipsis': 'overflow-ellipsis',

  'bg-white-alpha-10': 'bg-white bg-opacity-10',
  'bg-white-alpha-20': 'bg-white bg-opacity-20',
  'bg-white-alpha-30': 'bg-white bg-opacity-30',
  'bg-white-alpha-40': 'bg-white bg-opacity-40',
  'bg-white-alpha-50': 'bg-white bg-opacity-50',
  'bg-white-alpha-60': 'bg-white bg-opacity-60',
  'bg-white-alpha-70': 'bg-white bg-opacity-70',
  'bg-white-alpha-80': 'bg-white bg-opacity-80',
  'bg-white-alpha-90': 'bg-white bg-opacity-90',

  'bg-black-alpha-10': 'bg-black bg-opacity-10',
  'bg-black-alpha-20': 'bg-black bg-opacity-20',
  'bg-black-alpha-30': 'bg-black bg-opacity-30',
  'bg-black-alpha-40': 'bg-black bg-opacity-40',
  'bg-black-alpha-50': 'bg-black bg-opacity-50',
  'bg-black-alpha-60': 'bg-black bg-opacity-60',
  'bg-black-alpha-70': 'bg-black bg-opacity-70',
  'bg-black-alpha-80': 'bg-black bg-opacity-80',
  'bg-black-alpha-90': 'bg-black bg-opacity-90',

  'border-white-alpha-10': 'border-white border-opacity-10',
  'border-white-alpha-20': 'border-white border-opacity-20',
  'border-white-alpha-30': 'border-white border-opacity-30',
  'border-white-alpha-40': 'border-white border-opacity-40',
  'border-white-alpha-50': 'border-white border-opacity-50',
  'border-white-alpha-60': 'border-white border-opacity-60',
  'border-white-alpha-70': 'border-white border-opacity-70',
  'border-white-alpha-80': 'border-white border-opacity-80',
  'border-white-alpha-90': 'border-white border-opacity-90',

  'border-black-alpha-10': 'border-black border-opacity-10',
  'border-black-alpha-20': 'border-black border-opacity-20',
  'border-black-alpha-30': 'border-black border-opacity-30',
  'border-black-alpha-40': 'border-black border-opacity-40',
  'border-black-alpha-50': 'border-black border-opacity-50',
  'border-black-alpha-60': 'border-black border-opacity-60',
  'border-black-alpha-70': 'border-black border-opacity-70',
  'border-black-alpha-80': 'border-black border-opacity-80',
  'border-black-alpha-90': 'border-black border-opacity-90',

  'text-white-alpha-10': 'text-white text-opacity-10',
  'text-white-alpha-20': 'text-white text-opacity-20',
  'text-white-alpha-30': 'text-white text-opacity-30',
  'text-white-alpha-40': 'text-white text-opacity-40',
  'text-white-alpha-50': 'text-white text-opacity-50',
  'text-white-alpha-60': 'text-white text-opacity-60',
  'text-white-alpha-70': 'text-white text-opacity-70',
  'text-white-alpha-80': 'text-white text-opacity-80',
  'text-white-alpha-90': 'text-white text-opacity-90',

  'text-black-alpha-10': 'text-black text-opacity-10',
  'text-black-alpha-20': 'text-black text-opacity-20',
  'text-black-alpha-30': 'text-black text-opacity-30',
  'text-black-alpha-40': 'text-black text-opacity-40',
  'text-black-alpha-50': 'text-black text-opacity-50',
  'text-black-alpha-60': 'text-black text-opacity-60',
  'text-black-alpha-70': 'text-black text-opacity-70',
  'text-black-alpha-80': 'text-black text-opacity-80',
  'text-black-alpha-90': 'text-black text-opacity-90',

  // primeflex 3.2.0 gap classes
  'gap-0': 'gap-0,',
  'gap-1': 'gap-1,',
  'gap-2': 'gap-2,',
  'gap-3': 'gap-4,',
  'gap-4': 'gap-6,',
  'gap-5': 'gap-8,',
  'gap-6': 'gap-12,',
  'gap-7': 'gap-16,',
  'gap-8': 'gap-20,',
  'row-gap-0': 'gap-y-0,',
  'row-gap-1': 'gap-y-1,',
  'row-gap-2': 'gap-y-2,',
  'row-gap-3': 'gap-y-4,',
  'row-gap-4': 'gap-y-6,',
  'row-gap-5': 'gap-y-8,',
  'row-gap-6': 'gap-y-12,',
  'row-gap-7': 'gap-y-16,',
  'row-gap-8': 'gap-y-20,',
  'column-gap-0': 'gap-x-0,',
  'column-gap-1': 'gap-x-1,',
  'column-gap-2': 'gap-x-2,',
  'column-gap-3': 'gap-x-4,',
  'column-gap-4': 'gap-x-6,',
  'column-gap-5': 'gap-x-8,',
  'column-gap-6': 'gap-x-12,',
  'column-gap-7': 'gap-x-16,',
  'column-gap-8': 'gap-x-20,',

  // primeflex 3.2.0 vertical align
  'vertical-align-baseline': 'align-baseline',
  'vertical-align-top': 'align-top',
  'vertical-align-middle': 'align-middle',
  'vertical-align-bottom': 'align-bottom',
  'vertical-align-text-top': 'align-text-top',
  'vertical-align-text-bottom': 'align-text-bottom',
  'vertical-align-sub': 'align-sub',
  'vertical-align-super': 'align-super',

  // primeflex 3.2.0 max-w and max-h
  'max-w-1rem': 'max-w-[1rem]',
  'max-w-2rem': 'max-w-[2rem]',
  'max-w-3rem': 'max-w-[3rem]',
  'max-w-4rem': 'max-w-[4rem]',
  'max-w-5rem': 'max-w-[5rem]',
  'max-w-6rem': 'max-w-[6rem]',
  'max-w-7rem': 'max-w-[7rem]',
  'max-w-8rem': 'max-w-[8rem]',
  'max-w-9rem': 'max-w-[9rem]',
  'max-w-10rem': 'max-w-[10rem]',
  'max-w-11rem': 'max-w-[11rem]',
  'max-w-12rem': 'max-w-[12rem]',
  'max-w-13rem': 'max-w-[13rem]',
  'max-w-14rem': 'max-w-[14rem]',
  'max-w-15rem': 'max-w-[15rem]',
  'max-w-16rem': 'max-w-[16rem]',
  'max-w-17rem': 'max-w-[17rem]',
  'max-w-18rem': 'max-w-[18rem]',
  'max-w-19rem': 'max-w-[19rem]',
  'max-w-20rem': 'max-w-[20rem]',
  'max-w-21rem': 'max-w-[21rem]',
  'max-w-22rem': 'max-w-[22rem]',
  'max-w-23rem': 'max-w-[23rem]',
  'max-w-24rem': 'max-w-[24rem]',
  'max-w-25rem': 'max-w-[25rem]',
  'max-w-26rem': 'max-w-[26rem]',
  'max-w-27rem': 'max-w-[27rem]',
  'max-w-28rem': 'max-w-[28rem]',
  'max-w-29rem': 'max-w-[29rem]',
  'max-w-30rem': 'max-w-[30rem]',
  'max-h-1rem': 'max-h-[1rem]',
  'max-h-2rem': 'max-h-[2rem]',
  'max-h-3rem': 'max-h-[3rem]',
  'max-h-4rem': 'max-h-[4rem]',
  'max-h-5rem': 'max-h-[5rem]',
  'max-h-6rem': 'max-h-[6rem]',
  'max-h-7rem': 'max-h-[7rem]',
  'max-h-8rem': 'max-h-[8rem]',
  'max-h-9rem': 'max-h-[9rem]',
  'max-h-10rem': 'max-h-[10rem]',
  'max-h-11rem': 'max-h-[11rem]',
  'max-h-12rem': 'max-h-[12rem]',
  'max-h-13rem': 'max-h-[13rem]',
  'max-h-14rem': 'max-h-[14rem]',
  'max-h-15rem': 'max-h-[15rem]',
  'max-h-16rem': 'max-h-[16rem]',
  'max-h-17rem': 'max-h-[17rem]',
  'max-h-18rem': 'max-h-[18rem]',
  'max-h-19rem': 'max-h-[19rem]',
  'max-h-20rem': 'max-h-[20rem]',
  'max-h-21rem': 'max-h-[21rem]',
  'max-h-22rem': 'max-h-[22rem]',
  'max-h-23rem': 'max-h-[23rem]',
  'max-h-24rem': 'max-h-[24rem]',
  'max-h-25rem': 'max-h-[25rem]',
  'max-h-26rem': 'max-h-[26rem]',
  'max-h-27rem': 'max-h-[27rem]',
  'max-h-28rem': 'max-h-[28rem]',
  'max-h-29rem': 'max-h-[29rem]',
  'max-h-30rem': 'max-h-[30rem]',

}

const re = new RegExp(`\\b(?:${Object.keys(primeFlexMap).join('|')})\\b`, 'gi')

function replaceClassNames(match: string, p1: string, p2: string, p3: string) {
  const test = p2.replace(re, (matched) => {
    // @ts-ignore
    return primeFlexMap[matched.toLowerCase()]
  })

  return `class=${p1}${test}${p3}`
}

export function convertPrimeFlex(str: string): string {
  return str.replace(/class=(['"])(.+?)(['"])/gis, replaceClassNames)
}

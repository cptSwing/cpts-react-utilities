# React Utilities

A place to store components and hooks that I end up using more than once. In Typescript TS/TSX.
Once I find the time I'll backfill from older projects, promise.

- [ ] Set up exports
- [ ] Add instructions on how to include in a project via yarn
- [ ] Set up .prettierrc
- [ ] Add useAnimationOnMount()
- [ ] Add useAddClassListOnMount()
- [x] Add useDebugButton()
- [x] Add usePrevious(), useCompare()
- [ ] useCSSCalc() (see https://github.com/shyndman/tosser for inspiration?)
- [ ] Add useLocalStorage(), <CookieNotice/>

Should I ever be bored:

- [ ] Set up site to showcase

## Components

#### TextStroke

Returns a Span element with stroked text, using `-webkit-text-stroke`. Draws the stroke behind the `<span>`, using a `:before` pseudo-element.

#### FitText

Fits/scales text to any container size (using a SVG node)

#### GetChildSize

## Hooks

#### useForwardedRef

#### useBreakpoint (WIP, how to ingest user's tailwind config?)

#### useReactNodeAsStaticMarkup

#### useWillChange (WIP, is this actually a good idea?)

#### useOutsideClick

Executes a callback once a click outside of this Element is registered

#### useMountTransition

Unmounts a component only once it's transitions have ended

#### useDebugButton

#### useMouseWheelDirection

Gets a mousewheel scroll's direction and distance

#### useThrottle

#### usePrevious (WIP, clean this up and decide on one haha)

#### useIsDocumentReady (Fix Types)

#### useCreateRefArray / useArrayRef (WIP, figure out use case and decide on naming)

#### useLocalStorage (WIP clean up)

#### useSearchParamsState (WIP)

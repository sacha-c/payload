import type { FeatureProvider } from '../../types'

export const TestRecorderFeature = (): FeatureProvider => {
  return {
    feature: () => {
      return {
        plugins: [
          {
            Component: () =>
              // @ts-expect-error-next-line
              import('./plugin').then((module) => module.TestRecorderPlugin),
            position: 'bottom',
          },
        ],
        props: null,
      }
    },
    key: 'debug-testrecorder',
  }
}

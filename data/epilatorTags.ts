export const epilatorModels = [
  'silk-epil-5',
  'silk-epil-7',
  'silk-epil-9',
  'silk-epil-9-flex',
  'silk-expert-pro-3',
  'silk-expert-pro-5',
] as const

export const contentTypes = [
  'cleaning',
  'battery',
  'review',
  'usage',
  'maintenance',
  'tutorial',
] as const

export type EpilatorModel = (typeof epilatorModels)[number]
export type ContentType = (typeof contentTypes)[number]

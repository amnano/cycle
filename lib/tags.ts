import { epilatorModels, contentTypes, EpilatorModel, ContentType } from '@/data/epilatorTags'

export function validateTags(tags: string[]): boolean {
  // Check if at least one epilator model is present
  const hasEpilatorModel = tags.some((tag) => epilatorModels.includes(tag as EpilatorModel))

  // Check if at least one content type is present
  const hasContentType = tags.some((tag) => contentTypes.includes(tag as ContentType))

  return hasEpilatorModel && hasContentType
}

export function getEpilatorModel(tags: string[]): string | null {
  return tags.find((tag) => epilatorModels.includes(tag as EpilatorModel)) || null
}

export function getContentTypes(tags: string[]): string[] {
  return tags.filter((tag) => contentTypes.includes(tag as ContentType))
}

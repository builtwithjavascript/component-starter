// file: src/components/useComponentStarter.ts
export const useComponentStarter = (id: string, options?: any) => {
  if ((id || '').trim().length === 0) {
    throw new Error('-------------- useComponentStarter -------------- EXCEPTION: invalid id argument.')
  }

  return {
    id,
    options
  }
}

export interface Params extends Record<string, string | number | undefined> {
  limit: number
  page: number
  keyword?: string
  order_by: string
}

export interface Time {
  year: number
  month: number
  day: number
}

export interface TimeMonth extends Omit<Time, 'day'> {}
export interface TimeYear extends Omit<Time, 'month' | 'day'> {}

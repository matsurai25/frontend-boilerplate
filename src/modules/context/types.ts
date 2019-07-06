export interface User {
  id: number
  name: string
  iconUrl: string
}

export interface ContextState {
  isLoading: boolean
  user: User | null
  csrfToken: string | null
}

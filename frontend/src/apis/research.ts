import axios from 'axios'

export interface HealthResponse {
  status: boolean
}

const baseURL = import.meta.env.VITE_RESEARCH_API_HOST ?? ''

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function fetchHealth(): Promise<HealthResponse> {
  try {
    const response = await apiClient.get<HealthResponse>('/api/health')
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Health check failed:', error)
    throw error
  }
}

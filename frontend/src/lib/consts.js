const { location: { origin } } = window

// API Routes
export const API_ROOT = `${origin}/api`
export const SOURCES_API = `${API_ROOT}/sources`
export const PAGE_API = `${API_ROOT}/source`
export const DB_VERSION = `${API_ROOT}/version`

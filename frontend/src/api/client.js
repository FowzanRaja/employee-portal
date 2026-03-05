const BASE_URL = import.meta.env.VITE_API_URL || ''

export async function request(path, opts = {}) {
  const res = await fetch(BASE_URL + path, opts)
  if (!res.ok) throw new Error('Network error')
  return res.json()
}

export default { request }

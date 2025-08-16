// /api/stalk.js
export default async function handler(req, res) {
  const { username } = req.query

  if (!username) {
    return res.status(400).json({ error: "Username wajib diisi" })
  }

  try {
    const response = await fetch(
      `https://fastrestapis.fasturl.cloud/stalk/instagram?username=${username}`
    )

    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: "Gagal fetch API", detail: err.message })
  }
                          }

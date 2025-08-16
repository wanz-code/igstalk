export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { username } = req.body
    if (!username) {
      return res.status(400).json({ error: "Username is required" })
    }

    const apiRes = await fetch("https://fastrestapis.fasturl.cloud/stalk/Instagram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username })
    })

    const data = await apiRes.json()
    return res.status(200).json(data)

  } catch (err) {
    return res.status(500).json({ error: "Internal server error", details: err.message })
  }
    }

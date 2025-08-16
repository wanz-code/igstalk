import express from "express"
import fetch from "node-fetch"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.post("/stalk", async (req, res) => {
  try {
    const { username } = req.body
    if (!username) {
      return res.status(400).json({ error: "Username diperlukan" })
    }

    const response = await fetch("https://fastrestapis.fasturl.cloud/stalk/Instagram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username })
    })

    const data = await response.json()
    res.json(data)
  } catch (e) {
    res.status(500).json({ error: "Server error", detail: e.message })
  }
})

export default app

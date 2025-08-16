import express from "express"
import fetch from "node-fetch"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

// endpoint proxy
app.post("/api/stalk", async (req, res) => {
  try {
    const response = await fetch("https://fastrestapis.fasturl.cloud/stalk/instagram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    })
    const data = await response.json()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: "Server Error", detail: err.message })
  }
})

export default app

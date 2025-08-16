// /api/stalk.js
export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ status: 400, content: "Username wajib diisi" });
  }

  try {
    const upstream = await fetch(
      `https://fastrestapis.fasturl.cloud/stalk/instagram?username=${encodeURIComponent(username)}`,
      { headers: { "accept": "application/json" } }
    );

    // Teruskan status & isi persis dari upstream (agar "alur respon API" tetap sama)
    const data = await upstream.json();
    return res.status(upstream.ok ? 200 : upstream.status).json(data);
  } catch (err) {
    return res.status(502).json({ status: 502, content: "Gateway error ke API sumber", detail: String(err) });
  }
}

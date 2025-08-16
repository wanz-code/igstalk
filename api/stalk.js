export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ status: 400, message: "Username required" });
  }

  try {
    const fetchRes = await fetch(`https://fastrestapis.fasturl.cloud/stalk/instagram?username=${username}`);
    const data = await fetchRes.json();

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
      }

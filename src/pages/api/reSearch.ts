import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const mockData = {
    data: [
      { id: 1, name: "Zhang San" },
      { id: 2, name: "Li Si" },
      { id: 3, name: "Wang WU" },
    ],
    message: "this is mock data",
  }
  if (req.method === "GET") {
    res.status(200).json(mockData)
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).end("This method is not allowed")
  }
}

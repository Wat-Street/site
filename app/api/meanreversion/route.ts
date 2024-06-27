import { z } from "zod";

const schema = z.object({
  ticker: z.string(),
  trainstart: z.string(),
  trainend: z.string(),
  teststart: z.string(),
  testend: z.string(),
  maxholding: z.string(),
});

// ===== EXAMPLE REQUEST =====

// {
//   "ticker": "AAPL",
//   "trainstart": "2015-01-01",
//   "trainend": "2022-01-01",
//   "teststart": "2022-01-01",
//   "testend": "2024-05-06",
//   "maxholding": 100
// }

export async function POST(request: Request) {
  const body = await request.json();
  let parsed;

  try {
    parsed = schema.parse(body);
  } catch (error) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://immense-alert-osprey.ngrok-free.app/api/meanreversion`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(parsed),
      }
    );
    const data = await res.json();

    // ===== EXAMPLE RESPONSE =====

    // const data = [
    //   {
    //     confidence: 0.9731735587120056,
    //     datetime: "2022-12-06 00:00:00",
    //     suggestion: "Buy",
    //   },
    //   {
    //     confidence: 0.9925611019134521,
    //     datetime: "2022-12-07 00:00:00",
    //     suggestion: "Buy",
    //   },
    // ];

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

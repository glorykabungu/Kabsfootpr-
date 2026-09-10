export default async function handler(request, response) {
  try {
    const apiKey = process.env.API_FOOTBALL_KEY;

    if (!apiKey) {
      return response.status(500).json({
        error: "API_FOOTBALL_KEY manquante"
      });
    }

    const date =
      request.query.date ||
      new Date().toISOString().slice(0, 10);

    const url =
      `https://v3.football.api-sports.io/fixtures?date=${date}`;

    const apiResponse = await fetch(url, {
      headers: {
        "x-apisports-key": apiKey
      }
    });

    const data = await apiResponse.json();

    if (!apiResponse.ok || data.errors?.length) {
      return response.status(502).json({
        error: "Erreur API-Football",
        details: data.errors || []
      });
    }

    return response.status(200).json({
      success: true,
      date,
      results: data.results,
      matches: data.response
    });

  } catch (error) {
    return response.status(500).json({
      error: "Erreur serveur",
      message: error.message
    });
  }
        }    

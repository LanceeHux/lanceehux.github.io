export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        let body = req.body;
        if (typeof body === 'string') {
            body = JSON.parse(body);
        }

        const prompt = body?.prompt;
        if (!prompt) {
            return res.status(400).json({ error: 'Missing prompt' });
        }

        const apiKey = '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';

        const apiResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: 'You are J.A.R.V.I.S., Tony Stark\'s highly intelligent, sophisticated, and slightly witty AI assistant. Keep responses relatively concise, professional, and spoken from the persona of an advanced holographic HUD interface.' },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.7,
                max_tokens: 150
            })
        });

        const data = await apiResponse.json();

        if (!apiResponse.ok) {
            return res.status(apiResponse.status).json({ error: data.error?.message || 'Groq upstream error' });
        }

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

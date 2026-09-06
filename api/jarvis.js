// api/jarvis.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { prompt } = req.body;
        const apiKey = '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';

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'openai/gpt-oss-120b',
                messages: [
                    { role: 'system', content: 'You are J.A.R.V.I.S., Tony Stark\'s highly intelligent, sophisticated, and slightly witty AI assistant. Keep responses relatively concise, professional, and spoken from the persona of an advanced holographic HUD interface.' },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.7,
                max_tokens: 150
            })
        });

        const data = await response.json();
        
        // If Groq returns an error object, pass it through so you can see it in the terminal
        if (!response.ok) {
            return res.status(response.status).json({ error: data.error?.message || 'Groq API error' });
        }

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

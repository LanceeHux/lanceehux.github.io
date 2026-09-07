this.registerProtocol('ask', async (input) => {
    const prompt = input.replace(/(ask jarvis|ask|query|jarvis)/g, '').trim();
    if (!prompt) {
        const err = 'Please provide a prompt for cognitive processing, sir.';
        this.printToLog('JARVIS', err);
        this.speak(err);
        return;
    }

    this.printToLog('JARVIS', `Transmitting cognitive query to neural uplink: "${prompt}"...`, 'system');
    this.speak('Processing query.');

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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' // Paste your key right here
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [{ role: "user", content: prompt }]
            })
        });

        if (!response.ok) {
            throw new Error(`API handshake failed with status ${response.status}`);
        }

        const data = await response.json();
        const aiReply = data.choices[0]?.message?.content || 'Neural response matrix returned empty payload.';

        this.printToLog('JARVIS', aiReply);
        this.speak(aiReply);
        this.logDiagnostic('NEURAL_UPLINK: Remote generative inference successfully received.');

    } catch (error) {
        console.error("AI API Connection Error:", error);
        const fallbackReply = `Cognitive uplink connection failed. Local heuristic synthesis: I understand you are asking about "${prompt}", but the server connection encountered a runtime exception.`;
        this.printToLog('JARVIS', fallbackReply, 'system');
        this.speak('Neural uplink offline.');
    }
});

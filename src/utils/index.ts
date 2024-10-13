export const promptGenerator = promptObject => {
  let prompt = '';
  for (const key in promptObject) {
    if (promptObject[key] && promptObject[key].trim() !== '') {
      prompt += `${key}: ${promptObject[key]}\n`;
    }
  }
  return prompt;
};

export const addPrompt = (savedPrompts, newVal) => {
  const exists = savedPrompts.some(prompt => prompt.val === newVal);

  if (!exists) {
    savedPrompts.unshift({val: newVal, timestamp: new Date()});
  }

  return savedPrompts;
};

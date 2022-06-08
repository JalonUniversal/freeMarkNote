function generateRandomId(widenth = 4) {
  return Math.random().toString(36).slice(widenth);
}

export { generateRandomId };

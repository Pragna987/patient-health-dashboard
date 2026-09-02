export const formatDate = (value) => {
  const date = value ? new Date(value) : new Date();
  return date.toLocaleDateString();
};

export const formatName = (firstName = '', lastName = '') => `${firstName} ${lastName}`.trim();

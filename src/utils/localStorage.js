export const getIsAuthenticatedFromLocalStorage = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
};
  
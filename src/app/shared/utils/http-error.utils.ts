/**
 * Retourne un message d'erreur lisible selon le statut HTTP.
 * Utilisé dans les composants pour remplacer les messages génériques.
 */
const SPATIE_MESSAGES = [
  'User does not have the right permissions.',
  'User does not have the right roles.',
  'This action is unauthorized.',
];

export function httpErrorMessage(err: any, fallback = 'Une erreur est survenue.'): string {
  const status = err?.status ?? err?.error?.status;
  const backendMsg = err?.error?.message as string | undefined;

  if (status === 403) {
    // Masquer les messages techniques Spatie en anglais
    if (!backendMsg || SPATIE_MESSAGES.includes(backendMsg)) {
      return 'Vous n\'avez pas les permissions nécessaires pour accéder à cette ressource.';
    }
    return backendMsg;
  }
  if (status === 401) {
    return 'Votre session a expiré. Veuillez vous reconnecter.';
  }
  if (status === 404) {
    return 'Ressource introuvable.';
  }
  if (status === 500) {
    return 'Erreur serveur. Veuillez réessayer plus tard.';
  }
  if (backendMsg) {
    return backendMsg;
  }
  return fallback;
}

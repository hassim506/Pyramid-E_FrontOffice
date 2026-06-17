// src/app/shared/utils/http-error.utils.ts
var SPATIE_MESSAGES = [
  "User does not have the right permissions.",
  "User does not have the right roles.",
  "This action is unauthorized."
];
function httpErrorMessage(err, fallback = "Une erreur est survenue.") {
  const status = err?.status ?? err?.error?.status;
  const backendMsg = err?.error?.message;
  if (status === 403) {
    if (!backendMsg || SPATIE_MESSAGES.includes(backendMsg)) {
      return "Vous n'avez pas les permissions n\xE9cessaires pour acc\xE9der \xE0 cette ressource.";
    }
    return backendMsg;
  }
  if (status === 401) {
    return "Votre session a expir\xE9. Veuillez vous reconnecter.";
  }
  if (status === 404) {
    return "Ressource introuvable.";
  }
  if (status === 500) {
    return "Erreur serveur. Veuillez r\xE9essayer plus tard.";
  }
  if (backendMsg) {
    return backendMsg;
  }
  return fallback;
}

export {
  httpErrorMessage
};
//# sourceMappingURL=chunk-RL3SOXDI.js.map

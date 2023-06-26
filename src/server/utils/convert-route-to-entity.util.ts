const mapping: Record<string, string> = {
  academies: 'academy',
  parents: 'parent',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

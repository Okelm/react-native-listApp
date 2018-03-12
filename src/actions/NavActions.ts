export enum ActionKey {
  NAVIGATE_TO_DETAILS_REQUESTED = 'NAV/NAVIGATE_TO_DETAILS_REQUESTED',
  REHYDRATION_COMPLETED = 'NAV/REHYDRATION_COMPLETED',
}

export type NavigationToDetailRequested = {
  type: ActionKey.NAVIGATE_TO_DETAILS_REQUESTED,
  itemId: number;
};
export function navigationToDetailRequested(itemId: number): NavigationToDetailRequested {
  return {
    type: ActionKey.NAVIGATE_TO_DETAILS_REQUESTED,
    itemId,
  };
}

export type RehydrationComplated = {
  type: ActionKey.REHYDRATION_COMPLETED,
};
export function rehydrationComplated(): RehydrationComplated {
  return {
    type: ActionKey.REHYDRATION_COMPLETED,
  };
}

export type NavActionsType = NavigationToDetailRequested | RehydrationComplated;

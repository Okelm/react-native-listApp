export enum ActionKey {
  NAVIGATE_TO_DETAILS_REQUESTED = 'NAV/NAVIGATE_TO_DETAILS_REQUESTED',
}

export type NavigationToDetailRequested = {
  type: ActionKey.NAVIGATE_TO_DETAILS_REQUESTED,
  itemId: string;
};
export function navigationToDetailRequested(itemId: string): NavigationToDetailRequested {
  return {
    type: ActionKey.NAVIGATE_TO_DETAILS_REQUESTED,
    itemId,
  };
}

export type NavActionsType = NavigationToDetailRequested;

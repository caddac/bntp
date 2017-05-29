export const FETCH_NETWORK_STATUS = 'FETCH_NETWORK_STATUS';
export const RECEIVE_NETWORK_STATUS = 'RECEIVE_NETWORK_STATUS';
export const SUBSCRIBE_NETWORK_STATUS = 'SUBSCRIBE_NETWORK_STATUS';
export const UNSUBSCRIBE_NETWORK_STATUS = 'UNSUBSCRIBE_NETWORK_STATUS';

export function subscribeNetworkStatus() {
  return {
    type: SUBSCRIBE_NETWORK_STATUS,
  }
}

export function unsubscribeNetworkStatus() {
  return {
    type: UNSUBSCRIBE_NETWORK_STATUS,
  }
}

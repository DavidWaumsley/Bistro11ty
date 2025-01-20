/**
 * Returns back some attributes based on whether the
 * link is active or a parent of an active item
 * This was converted to 11ty v3 from Andy Bell's example:
 * https://learneleventyfromscratch.com/lesson/7.html#wiring-up-our-navigation
 *
 * @param {String} itemUrl The link in question
 * @param {String} pageUrl The page context
 * @returns {String} The attributes or empty
 */
export function getLinkActiveState(itemUrl, pageUrl) {
    let response = '';
  
    if (itemUrl === pageUrl) {
      response = 'aria-current="page"';
    }
  
    if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
      response += 'data-state="active"';
    }
  
    return response;
  }
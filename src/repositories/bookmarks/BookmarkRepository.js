import BookmarkTree from '../../models/bookmarks/BookmarkTree';

export default class BookmarkRepository {
  findAll(callback) {
    return window.chrome.bookmarks.getTree(tree =>
      callback(new BookmarkTree({children: tree, canEdit: true}).flatten()));
  }

  update(bookmark, callback) {
    window.chrome.bookmarks.update(bookmark.id, {
      title: bookmark.title,
      url: bookmark.link.url,
    }, callback);
  }

  remove(bookmark, callback) {
    window.chrome.bookmarks.remove(bookmark.id, callback);
  }

  onChange(callback) {
    window.chrome.bookmarks.onCreated.addListener(callback);
    window.chrome.bookmarks.onRemoved.addListener(callback);
    window.chrome.bookmarks.onChanged.addListener(callback);
    window.chrome.bookmarks.onMoved.addListener(callback);
    window.chrome.bookmarks.onChildrenReordered.addListener(callback);
  }
}
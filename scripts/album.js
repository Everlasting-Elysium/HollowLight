'use strict'

/**
 * HollowLight — Album Helper
 *
 * Hexo automatically reads YAML files from source/_data/ into site.data.
 * This script registers a helper for convenient access in templates,
 * and ensures the album data structure is always valid.
 */

hexo.extend.helper.register('get_album_data', function () {
  var data = this.site.data.album || {}
  return {
    albums: data.albums || []
  }
})

hexo.extend.helper.register('get_friends_data', function () {
  var data = this.site.data.friends || {}
  return {
    friends: data.friends || []
  }
})

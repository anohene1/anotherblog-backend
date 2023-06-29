module.exports = {
  async beforeCreate(event) {
    event.params.data.slug = await strapi.service('plugin::content-manager.uid').generateUIDField({
      contentTypeUID: "api::article.article",
      field: "slug",
      data: event.params.data
    })
  }
}

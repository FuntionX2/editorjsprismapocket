migrate((db) => {
  const collection = new Collection({
    "id": "ush2vjdb3ywdtxm",
    "created": "2022-12-11 19:39:52.795Z",
    "updated": "2022-12-11 19:39:52.795Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pzvebmtj",
        "name": "image",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif"
          ],
          "thumbs": []
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ush2vjdb3ywdtxm");

  return dao.deleteCollection(collection);
})

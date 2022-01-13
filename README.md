# PortraitSpa Challenge

## Installation instructions

1. Install [Docker](https://docs.docker.com/engine/install/) and [Docker compose](https://docs.docker.com/compose/install/)
2. Build and run containers executing on a terminal:

```sh
  sh ./deploy.sh
```
[This script](./deploy.sh) runs three containers, one for the rails app, one for the react app and another for Elasticsearch. In the rails app, in the building process, the database is populated.

4. Do a GET request to [http://localhost:5000/es/import](http://localhost:5000/es/import) in order to import the data from the database to Elasticsearch.

4. Go to [http://localhost:3000](http://localhost:3000) to see the web interface of the solution.
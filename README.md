# Prometheus Exporter for NATS Affiliate Tracking Software

a Prometheus exporter is a tool for exporting existing metrics from third-party systems as Prometheus metrics. This is useful for cases where it is not feasible to instrument a given system with Prometheus metrics directly.

In this case, this app is a NodeJS app that queries NATS API, in order to extract information about the stats and export it in a format that is compatible with Prometheus.

The exporter publishes the metrics it collected in http://localhost:7846/metrics which can then be scraped by Prometheus.
Ultimately, Grafana can be used to visualize such scraped data.

### Requirements

* v6.10.1 or higher

### Local Environment 

copy the .env.example file to .env then customize the values

```
cp .env.example .env
```

you can use docker-compose to boot up the entire stack (NodeJS ap + Prometheus + Grafana)
note that it might take time to pull all images.

```
docker-compose up -d
```
Once it is finished provisioning, you can then visit the to access Grafana http://localhost:3000/
By default, the Grafana admin account is:

```
username: admin
password: admin
```

but for local development, just change the password to anything that you can easily remember (usually "secret")

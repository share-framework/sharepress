# 存储在es的每一个索引的含义

## prod_bcy_instance_traffic-20220629

> 该索引存储的是所有service保存的实例

### 存储数据示例

```json
{
        "_index" : "prod_bcy_instance_traffic-20220629",
        "_type" : "type",
        "_id" : "YmN5LWs4cy1jb21wZXRpdGlvbi10ZXN0.1_MWQ2MjUzMjI0MTUwNGQ1Nzg0NTJmYzEyNzVkYjAwZWZAMTcyLjIwLjEuMTQw",
        "_score" : 1.0,
        "_source" : {
          "bcy_timestamp" : "2022-06-29T02:26:57.109845Z",
          "last_ping" : 202206290230,
          "service_id" : "YmN5LWs4cy1jb21wZXRpdGlvbi10ZXN0.1",
          "name" : "1d62532241504d578452fc1275db00ef@172.20.1.140",
          "time_bucket" : 202206290226,
          "properties" : ""
        }
      }
```
